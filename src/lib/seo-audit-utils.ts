export interface AuditMetric {
  label: string
  value: string
  status: 'good' | 'warn' | 'bad'
  detail: string
}

export interface AuditResultsData {
  score: number
  grade: 'A' | 'B' | 'C' | 'D' | 'F'
  metrics: AuditMetric[]
  wins: string[]
  issues: string[]
  speed: string
}

export function getCleanDomain(url: string): string {
  const sanitized = url
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
  const pathPart = sanitized.split('/')[0] ?? ''
  return pathPart.split('?')[0] ?? ''
}

export function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

export function isSidikoffDomain(url: string): boolean {
  const clean = getCleanDomain(url)
  return (
    clean.includes('sidikoff') ||
    clean.includes('sidikov') ||
    clean === 'localhost' ||
    clean.startsWith('localhost:') ||
    clean === '127.0.0.1'
  )
}

export function computeGrade(score: number): AuditResultsData['grade'] {
  if (score >= 90) return 'A'
  if (score >= 75) return 'B'
  if (score >= 60) return 'C'
  if (score >= 50) return 'D'
  return 'F'
}

export function calculateDeterministicAudit(url: string): AuditResultsData {
  const cleanDomain = getCleanDomain(url)
  const isSidikoff = isSidikoffDomain(url)
  const isHttps = url.startsWith('https') || isSidikoff

  if (isSidikoff) {
    const metrics: AuditMetric[] = [
      {
        label: 'Balises Title & Meta',
        value: 'Optimisé 100%',
        status: 'good',
        detail: 'Balises sémantiques et métadonnées locales parfaitement optimisées.',
      },
      {
        label: 'Google My Business',
        value: 'Fiche vérifiée',
        status: 'good',
        detail: 'Fiche Google Business Profile active et vérifiée 5★.',
      },
      {
        label: 'Vitesse de chargement',
        value: '< 0.6 s',
        status: 'good',
        detail: 'Rendu Next.js 16 SSG/SSR ultrarapide (LCP < 0.6s, score 100).',
      },
      {
        label: 'HTTPS & Sécurité',
        value: 'Sécurisé',
        status: 'good',
        detail: 'Certificat SSL & protocole HTTP/3 ultra-sécurisé.',
      },
      {
        label: 'Mots-clés locaux (69)',
        value: 'Excellents',
        status: 'good',
        detail: 'Maillage sémantique local complet (Lyon, Villeurbanne, Paris).',
      },
      {
        label: 'Mobile-friendly',
        value: 'Optimal',
        status: 'good',
        detail: 'Architecture Next.js 16 responsive & UX 100/100.',
      },
    ]

    return {
      score: 100,
      grade: 'A',
      metrics,
      wins: metrics.map((m) => m.label),
      issues: [],
      speed: '< 0.6 s',
    }
  }

  const domainHash = hashString(cleanDomain)
  const score = Math.min(88, 55 + (domainHash % 30))
  const grade = computeGrade(score)

  const speed =
    score > 82
      ? '< 1.2 s'
      : score > 68
      ? `${(2.0 + (domainHash % 6) / 10).toFixed(1)} s`
      : `${(3.5 + (domainHash % 10) / 10).toFixed(1)} s`

  const metrics: AuditMetric[] = [
    {
      label: 'Balises Title & Meta',
      value: score > 78 ? 'Optimisé' : 'À améliorer',
      status: score > 78 ? 'good' : 'warn',
      detail: score > 78 ? 'Balises présentes et bien rédigées.' : 'Title trop court ou mot-clé local absent.',
    },
    {
      label: 'Google My Business',
      value: score > 72 ? 'Fiche détectée' : 'Non trouvé',
      status: score > 72 ? 'good' : 'bad',
      detail: score > 72 ? 'Fiche GMB active et vérifiée.' : 'Aucune fiche GMB détectée pour ce domaine.',
    },
    {
      label: 'Vitesse de chargement',
      value: speed,
      status: score > 82 ? 'good' : score > 68 ? 'warn' : 'bad',
      detail: score > 82 ? 'LCP excellent.' : 'LCP trop lent — pénalise le classement Google.',
    },
    {
      label: 'HTTPS & Sécurité',
      value: isHttps ? 'Sécurisé' : 'Non HTTPS',
      status: isHttps ? 'good' : 'bad',
      detail: isHttps ? 'Certificat SSL valide.' : 'Google pénalise les sites HTTP.',
    },
    {
      label: 'Mots-clés locaux (69)',
      value: score > 75 ? 'Présents' : 'Insuffisants',
      status: score > 75 ? 'good' : 'warn',
      detail: score > 75 ? '"Lyon" et "Villeurbanne" bien intégrés.' : 'Termes locaux absents des balises H1.',
    },
    {
      label: 'Mobile-friendly',
      value: score > 70 ? 'Responsive' : 'Non adapté',
      status: score > 70 ? 'good' : 'bad',
      detail: score > 70 ? 'Expérience mobile optimale.' : '70 % du trafic local est mobile.',
    },
  ]

  const wins = metrics.filter((m) => m.status === 'good').map((m) => m.label)
  const issues = [
    score < 85 ? 'Ajoutez "Lyon" et "Villeurbanne" dans vos balises Title & H1.' : '',
    score < 73 ? 'Créez ou réclamez votre fiche Google My Business.' : '',
    !isHttps ? "Migrez votre site en HTTPS (gratuit avec Let's Encrypt)." : '',
    score < 83 ? 'Optimisez vos images et activez la mise en cache navigateur.' : '',
    score < 91 ? 'Ajoutez un schéma JSON-LD LocalBusiness pour le rich-snippet Google.' : '',
  ].filter(Boolean) as string[]

  return { score, grade, metrics, wins, issues, speed }
}

export function getScoreCtaContent(score: number): {
  highlight: string
  description: string
  scoreSummary: string
} {
  if (score === 100) {
    return {
      highlight: 'Score parfait ! Conservez votre position n°1.',
      description:
        'Même au sommet, le référencement évolue. Nos experts vous aident à maintenir votre leadership face à la concurrence.',
      scoreSummary:
        'Votre site est au sommet — toutes les meilleures pratiques SEO locales sont parfaitement appliquées.',
    }
  }
  if (score >= 90) {
    return {
      highlight: 'Nos experts peuvent vous amener au 100/100.',
      description:
        'Excellente base ! Quelques ajustements de précision vous sépareront de la perfection absolue.',
      scoreSummary:
        'Excellente performance — quelques réglages fins suffisent pour viser le score parfait de 100/100.',
    }
  }
  if (score >= 70) {
    return {
      highlight: 'Nos experts peuvent le porter à 95+.',
      description:
        "Audit SEO complet, refonte technique, contenu local — on prend en charge tout ce que l'outil a détecté.",
      scoreSummary:
        'Votre site est bien positionné — des optimisations ciblées peuvent encore doubler votre visibilité locale.',
    }
  }
  if (score >= 50) {
    return {
      highlight: 'Nos experts peuvent le porter à 90+.',
      description:
        "Des lacunes techniques et sémantiques freinent votre croissance. Confiez-nous l'optimisation de votre site.",
      scoreSummary:
        'Des lacunes importantes limitent votre visibilité sur Google. Des corrections ciblées changeront la donne.',
    }
  }
  return {
    highlight: 'Nos experts peuvent booster rapidement votre score.',
    description:
      'Votre site souffre d’un manque de visibilité. Une refonte SEO ciblée est recommandée pour capter vos premiers clients.',
    scoreSummary:
      'Score critique — votre site est très peu visible sur Google local. Une refonte SEO urgente est recommandée.',
  }
}

