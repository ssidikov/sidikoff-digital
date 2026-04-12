# Graphify Guide

Graphify is a knowledge graph extraction pipeline designed to transform this repository's codebase and documents into a structured, navigable network map. It detects communities, uncovers "God Nodes" (the most central abstractions), and helps trace surprising interactions across components.

## How to trigger it

Since Graphify relies on agentic pipeline execution, simply prompt your coding assistant with the following commands:

- **`/graphify .`**
  Runs the full extraction pipeline on your current directory, building an entirely new codebase map.
- **`/graphify <path> --update`**
  Incrementally updates the existing graph by only processing new or modified files. This saves API costs and time.
- **`/graphify <path> --mode deep`**
  Runs the semantic analysis engine more aggressively to discover deeply inferred edge connections and hidden architectural patterns.

## What is generated?

All outputs are saved to the newly created and automatically Git-ignored `graphify-out/` folder in the root directory.

1. **`graph.html`**
   An interactable, color-coded node visualization of your codebase. You can simply double-click and open this in any browser — no web server is necessary.
2. **`GRAPH_REPORT.md`**
   An analytical audit report. It groups codebase entities into "communities", flags potentially "surprising connections", lists the most connected "God Nodes", and suggests exploratory questions for architectural review.
3. **`graph.json`**
   The raw knowledge graph payload. 
4. **`cache/`**
   Cached JSON extractions for every individually parsed file. This accelerates the `--update` command by preventing unchanged files from being re-parsed.

## Viewing the results

To see the interactive graph, just locate `graphify-out/graph.html` in your file explorer and open it with Chrome, Safari, or Firefox!
