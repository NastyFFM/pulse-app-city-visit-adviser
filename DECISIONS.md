# Decisions: City Visit Adviser

## D-001: Keine externe API mit Key
date: 2026-04-07T13:35:00Z
context: App soll sofort ohne Setup nutzbar sein
decision: Nominatim (OpenStreetMap) für Geocoding, Overpass API für POIs — beide kostenlos und ohne Key
alternatives: Google Places API (Key nötig, kostenpflichtig), Foursquare (Key nötig)

## D-002: Lokale Datenspeicherung
date: 2026-04-07T13:35:00Z
context: Besuchte Orte und Notizen sollen persistent sein
decision: Daten via PulseOS SDK in data/state.json gespeichert
alternatives: localStorage (kein Server-Sync), IndexedDB (zu komplex)

## D-003: Single-File App
date: 2026-04-07T13:35:00Z
context: PulseOS-Konvention
decision: Alles in index.html — HTML + CSS + JS
alternatives: Separate CSS/JS Dateien (nicht PulseOS-konform)
