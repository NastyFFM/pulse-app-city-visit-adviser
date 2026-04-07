# Plan: City Visit Adviser

created: 2026-04-07T13:35:00Z
status: active
app_id: city-visit-adviser
app_dir: /Users/chris.pohl/Documents/GitHub/pulse-app-city-visit-adviser/
standalone: true

## Ziel
Eine App die Nutzern hilft, Städtebesuche zu planen. Nutzer können eine Stadt eingeben, erhalten Kategorie-basierte Empfehlungen (Sehenswürdigkeiten, Restaurants, Parks, Kultur), können Orte als "Besucht" markieren und eine persönliche Besuchsliste pflegen.

## Stack
- PulseOS Vanilla HTML/CSS/JS (Single-File App)
- PulseOS SDK (saveState, loadState, onInput, emit, onDataChanged)
- CSS-Variablen (var(--bg), var(--text), var(--teal), etc.)
- Nominatim/OpenStreetMap API für Stadtdaten (keine API-Key nötig)
- Wikidata API für Sehenswürdigkeiten (keine API-Key nötig)

## Features
1. Stadt-Suche mit Autovervollständigung
2. Empfehlungskarten nach Kategorie (Sehenswürdigkeiten, Restaurants, Shopping, Natur)
3. Besuchsliste (Orte als besucht markieren)
4. Reisenotizen pro Stadt
5. Gespeicherte Städte (zuletzt besucht / Favoriten)

## Aufgaben

### Phase 1 — Grundgerüst
- [x] TASK-001: PLAN.md, PROGRESS.md, DECISIONS.md erstellen
      assigned_to: planner
      depends_on: -
      files: [PLAN.md, PROGRESS.md, DECISIONS.md]
      complexity: low

### Phase 2 — Features
- [ ] TASK-002: Vollständige index.html mit Stadt-Suche, Empfehlungen, Besuchsliste
      assigned_to: code-generator
      depends_on: TASK-001
      files: [index.html, manifest.json, data/state.json]
      complexity: high

### Phase 3 — Qualität
- [ ] TASK-003: Code Review
      assigned_to: code-reviewer
      depends_on: TASK-002
      files: []
      complexity: low

### Phase 4 — Abschluss
- [ ] TASK-004: Git commit + Deploy
      assigned_to: orchestrator
      depends_on: TASK-003
      files: []
      complexity: low

## Offene Fragen an User
Keine offenen Fragen — Plan ist bereit.
