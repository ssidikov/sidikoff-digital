import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const EXPORT_DIR = path.join(ROOT, 'gsc-exports')
const OUTPUT_FILE = path.join(ROOT, 'SEO-GSC-OPPORTUNITIES.md')

const TARGET_TERMS = [
  'agence web lyon',
  'creation site internet lyon',
  'création site internet lyon',
  'agence web villeurbanne',
  'seo lyon',
  'site vitrine lyon',
  'referencement lyon',
  'référencement lyon',
  'developpeur web lyon',
  'développeur web lyon',
]

const COMMERCIAL_TERMS = [
  'agence',
  'creation',
  'création',
  'site',
  'web',
  'seo',
  'referencement',
  'référencement',
  'developpeur',
  'développeur',
  'refonte',
  'vitrine',
  'ecommerce',
  'e-commerce',
]

const HEADERS = {
  query: ['top queries', 'query', 'queries', 'requete', 'requête', 'requetes', 'requêtes'],
  page: ['top pages', 'page', 'pages', 'url', 'landing page'],
  date: ['date', 'jour', 'day'],
  clicks: ['clicks', 'clics', 'click'],
  impressions: ['impressions', 'impression'],
  ctr: ['ctr', 'taux de clics', 'taux de clic', 'click through rate'],
  position: ['position', 'average position', 'position moyenne'],
}

function parseCsv(text) {
  const rows = []
  let row = []
  let cell = ''
  let quoted = false

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i]
    const next = text[i + 1]

    if (char === '"' && quoted && next === '"') {
      cell += '"'
      i += 1
      continue
    }

    if (char === '"') {
      quoted = !quoted
      continue
    }

    if ((char === ',' || char === ';' || char === '\t') && !quoted) {
      row.push(cell.trim())
      cell = ''
      continue
    }

    if ((char === '\n' || char === '\r') && !quoted) {
      if (char === '\r' && next === '\n') i += 1
      row.push(cell.trim())
      if (row.some(Boolean)) rows.push(row)
      row = []
      cell = ''
      continue
    }

    cell += char
  }

  if (cell || row.length) {
    row.push(cell.trim())
    if (row.some(Boolean)) rows.push(row)
  }

  return rows
}

function normalize(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function findColumn(headers, aliases) {
  const normalized = headers.map(normalize)
  const aliasSet = aliases.map(normalize)
  return normalized.findIndex((header) => aliasSet.some((alias) => header === alias || header.includes(alias)))
}

function toNumber(value) {
  if (!value) return 0
  const cleaned = String(value)
    .replace(/\s/g, '')
    .replace('%', '')
    .replace(',', '.')
    .replace(/[^\d.-]/g, '')
  const number = Number.parseFloat(cleaned)
  return Number.isFinite(number) ? number : 0
}

function toCtr(value) {
  const number = toNumber(value)
  return number > 1 ? number / 100 : number
}

function readGscFiles() {
  if (!existsSync(EXPORT_DIR)) return []
  return readdirSync(EXPORT_DIR)
    .filter((file) => file.toLowerCase().endsWith('.csv'))
    .map((file) => path.join(EXPORT_DIR, file))
}

function classifyFile(filePath, firstHeader) {
  const name = path.basename(filePath).toLowerCase()
  const header = normalize(firstHeader || '')
  if (name.includes('quer') || header.includes('quer') || header.includes('requ')) return 'queries'
  if (name.includes('page') || header.includes('page') || header.includes('url')) return 'pages'
  if (name.includes('date') || header.includes('date') || header.includes('jour')) return 'dates'
  return 'unknown'
}

function parseGscFile(filePath) {
  const rows = parseCsv(readFileSync(filePath, 'utf8'))
  if (rows.length < 2) return null

  const headers = rows[0]
  const indexes = {
    query: findColumn(headers, HEADERS.query),
    page: findColumn(headers, HEADERS.page),
    date: findColumn(headers, HEADERS.date),
    clicks: findColumn(headers, HEADERS.clicks),
    impressions: findColumn(headers, HEADERS.impressions),
    ctr: findColumn(headers, HEADERS.ctr),
    position: findColumn(headers, HEADERS.position),
  }
  const type = classifyFile(filePath, headers[0])

  return {
    filePath,
    type,
    headers,
    rows: rows.slice(1).map((row) => ({
      dimension: row[indexes.query] || row[indexes.page] || row[indexes.date] || '',
      query: indexes.query >= 0 ? row[indexes.query] : '',
      page: indexes.page >= 0 ? row[indexes.page] : '',
      date: indexes.date >= 0 ? row[indexes.date] : '',
      clicks: indexes.clicks >= 0 ? toNumber(row[indexes.clicks]) : 0,
      impressions: indexes.impressions >= 0 ? toNumber(row[indexes.impressions]) : 0,
      ctr: indexes.ctr >= 0 ? toCtr(row[indexes.ctr]) : 0,
      position: indexes.position >= 0 ? toNumber(row[indexes.position]) : 0,
    })),
  }
}

function hasTerm(value, terms) {
  const text = normalize(value)
  return terms.some((term) => text.includes(normalize(term)))
}

function commercialScore(query) {
  const text = normalize(query)
  return COMMERCIAL_TERMS.reduce((score, term) => score + (text.includes(normalize(term)) ? 1 : 0), 0)
}

function opportunityScore(row) {
  const intent = commercialScore(row.query || row.dimension)
  const positionBoost = row.position >= 4 && row.position <= 20 ? 30 : row.position > 20 ? 12 : 8
  const ctrGap = row.position <= 10 && row.ctr < expectedCtr(row.position) ? 25 : 0
  const targetBoost = hasTerm(row.query || row.dimension, TARGET_TERMS) ? 35 : 0
  return Math.round(row.impressions * 0.08 + positionBoost + ctrGap + targetBoost + intent * 6)
}

function expectedCtr(position) {
  if (position <= 1) return 0.25
  if (position <= 3) return 0.12
  if (position <= 5) return 0.06
  if (position <= 10) return 0.025
  return 0
}

function sortTop(rows, limit = 15) {
  return [...rows]
    .sort((a, b) => opportunityScore(b) - opportunityScore(a))
    .slice(0, limit)
}

function formatPercent(value) {
  return `${(value * 100).toFixed(1)}%`
}

function table(rows, dimensionLabel) {
  if (!rows.length) return '_No matching rows._\n'
  const lines = [
    `| ${dimensionLabel} | Clicks | Impr. | CTR | Pos. | Score |`,
    '| --- | ---: | ---: | ---: | ---: | ---: |',
  ]
  for (const row of rows) {
    const dimension = (row.query || row.page || row.date || row.dimension || '-').replace(/\|/g, '\\|')
    lines.push(
      `| ${dimension} | ${row.clicks} | ${row.impressions} | ${formatPercent(row.ctr)} | ${row.position.toFixed(1)} | ${opportunityScore(row)} |`,
    )
  }
  return `${lines.join('\n')}\n`
}

function dateBuckets(dateRows) {
  const rows = dateRows
    .filter((row) => row.date)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  if (rows.length < 14) return null

  const latest = rows.slice(-28)
  const previous = rows.slice(-56, -28)
  const sum = (items, key) => items.reduce((total, item) => total + item[key], 0)
  return {
    latestClicks: sum(latest, 'clicks'),
    previousClicks: sum(previous, 'clicks'),
    latestImpressions: sum(latest, 'impressions'),
    previousImpressions: sum(previous, 'impressions'),
  }
}

function writeReport(parsed) {
  const queryRows = parsed.filter((file) => file.type === 'queries').flatMap((file) => file.rows)
  const pageRows = parsed.filter((file) => file.type === 'pages').flatMap((file) => file.rows)
  const dateRows = parsed.filter((file) => file.type === 'dates').flatMap((file) => file.rows)

  const targetRows = queryRows.filter((row) => hasTerm(row.query, TARGET_TERMS))
  const quickWins = sortTop(
    queryRows.filter((row) => row.impressions >= 10 && row.position >= 4 && row.position <= 20),
  )
  const ctrFixes = sortTop(
    queryRows.filter((row) => row.impressions >= 20 && row.position > 0 && row.position <= 10 && row.ctr < expectedCtr(row.position)),
  )
  const contentGaps = sortTop(
    queryRows.filter((row) => row.impressions >= 10 && row.position > 10 && row.position <= 30 && commercialScore(row.query) > 0),
  )
  const pageOpportunities = sortTop(pageRows.filter((row) => row.impressions >= 10), 12)
  const trend = dateBuckets(dateRows)

  const sourceFiles = parsed.map((file) => `- \`${path.relative(ROOT, file.filePath)}\` (${file.rows.length} rows, ${file.type})`)

  const report = [
    '# SEO GSC Opportunities - Lyon/Villeurbanne',
    '',
    `Generated: ${new Date().toISOString()}`,
    '',
    '## Source Files',
    sourceFiles.length ? sourceFiles.join('\n') : '_No GSC CSV exports found yet._',
    '',
    '## Status',
    parsed.length
      ? 'GSC exports parsed. Use the buckets below for page rewrites, internal links and CTR work.'
      : 'Waiting for CSV exports in `gsc-exports/`. Run `pnpm seo:gsc` again after adding files.',
    '',
    '## Lyon/Villeurbanne Target Queries',
    table(sortTop(targetRows, 15), 'Query'),
    '## Quick Wins',
    table(quickWins, 'Query'),
    '## CTR Fixes',
    table(ctrFixes, 'Query'),
    '## Content Gaps',
    table(contentGaps, 'Query'),
    '## Page Opportunities',
    table(pageOpportunities, 'Page'),
    '## Declining Pages / Trend Check',
    trend
      ? [
          `Latest 28d clicks: ${trend.latestClicks}`,
          `Previous 28d clicks: ${trend.previousClicks}`,
          `Latest 28d impressions: ${trend.latestImpressions}`,
          `Previous 28d impressions: ${trend.previousImpressions}`,
        ].join('\n')
      : '_Add `gsc-performance-dates-16m.csv` to compare latest 28 days vs previous 28 days._',
    '',
    '## Cannibalization',
    'For exact cannibalization, export query+page combined data from the API/Looker Studio/BigQuery. With standard single-dimension CSVs, treat URL families in Page Opportunities as candidates only.',
    '',
    '## Default Priority Until CSV Arrives',
    '1. `/services/agence-web-lyon`',
    '2. `/services/creation-site-internet-lyon`',
    '3. `/services/agence-web-villeurbanne`',
    '4. `/services/seo-lyon`',
    '5. `/services/site-vitrine-lyon`',
    '6. `/services/seo-villeurbanne`',
    '7. `/services/site-vitrine-villeurbanne`',
    '8. `/services/refonte-site-web-lyon`',
    '9. `/services/developpeur-web-lyon`',
    '10. `/services/ecommerce-lyon`',
    '',
  ].join('\n')

  writeFileSync(OUTPUT_FILE, report)
}

mkdirSync(EXPORT_DIR, { recursive: true })
const files = readGscFiles()
const parsed = files.map(parseGscFile).filter(Boolean)
writeReport(parsed)

console.log(`Wrote ${path.relative(ROOT, OUTPUT_FILE)}`)
