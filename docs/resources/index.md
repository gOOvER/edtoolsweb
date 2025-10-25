# Ressourcen

Hier finden Sie eine umfassende Sammlung von Ressourcen, APIs und Datenbanken für Elite Dangerous.

## 📊 Datenbanken

### Elite Dangerous Database (EDDB)
Die umfassendste Datenbank für Elite Dangerous:
- **Systeme & Stationen**: Vollständige galaktische Karte
- **Marktdaten**: Aktuelle Preise und Verfügbarkeit
- **Schiffe & Module**: Komplette Ausrüstungslisten
- **Commodities**: Handelsgüter und Marktanalysen

[🔗 EDDB besuchen](https://eddb.io)

### Elite Dangerous Star Map (EDSM)
Kartographie und Exploration:
- **3D Galaktische Karte**: Interaktive Sternennavigation
- **Entdeckungsjournal**: Commander-spezifische Daten
- **Statistiken**: Persönliche Exploration-Metriken
- **Routen-API**: Für Tool-Entwickler

[🔗 EDSM besuchen](https://www.edsm.net)

### Inara
Community-getriebene Datenbank:
- **Commander Profile**: Öffentliche Profile und Logs
- **Squadron Management**: Gruppenorganisation
- **Engineering Database**: Material- und Blueprint-Tracking
- **Trade Data**: Community-basierte Marktdaten

[🔗 Inara besuchen](https://inara.cz)

## 🔌 APIs

### Elite Dangerous Data Network (EDDN)
Echtzeit-Datenstream:
```json
{
  "header": {
    "uploaderID": "commander_name",
    "timestamp": "2025-10-25T12:00:00Z"
  },
  "message": {
    "systemName": "Sol",
    "marketId": 128049314,
    "commodities": [...]
  }
}
```

### Companion API (CAPI)
Offizieller Frontier API:
- **Spieler-Daten**: Schiffe, Credits, Ranks
- **Markt-Informationen**: Aktuelle Station-Daten
- **Journal-Integration**: Automatische Updates

### Spansh API
Routing und Navigation:
```bash
# Neutron Route berechnen
curl "https://spansh.co.uk/api/route" \
  -d "efficiency=60&range=50&source=Sol&destination=Colonia"
```

## 🛠️ Entwickler-Tools

### EDMarketConnector (EDMC)
Desktop-Application für automatische Datenübertragung:
- **Plugins**: Erweiterte Funktionalität
- **Journal Monitoring**: Automatische Updates
- **EDDN Integration**: Daten-Broadcasting

### Elite Dangerous Journal
Spiel-interne Log-Dateien:
```json
{
  "timestamp": "2025-10-25T12:00:00Z",
  "event": "FSDJump",
  "StarSystem": "Wolf 359",
  "StarPos": [7.856, 0.863, -5.333],
  "SystemAllegiance": "Federation"
}
```

## 📚 Dokumentation

### API Dokumentationen
- **EDDN Schema**: Datenformat-Spezifikationen
- **EDSM API**: Vollständige Endpoint-Referenz
- **Inara API**: Community-Daten Zugriff
- **Journal Events**: Frontier's offizielle Dokumentation

### Code-Beispiele
Repository mit Implementierungsbeispielen:
```python
import requests

# EDSM System-Informationen abrufen
response = requests.get(
    "https://www.edsm.net/api-v1/system",
    params={"systemName": "Sol", "showInformation": 1}
)
system_data = response.json()
```

## 🌐 Community-Projekte

### Open Source Tools
- **EDPathFinder**: Route-Optimierung
- **ED Engineer**: Material-Tracking
- **EDDI**: Voice-activated assistant
- **Elite Observatory**: Signal-Überwachung

### Daten-Beiträger
So können Sie zur Datenqualität beitragen:
1. **EDMC installieren** und konfigurieren
2. **Automatisches Uploading** aktivieren
3. **Marktdaten sammeln** durch normales Spielen
4. **Community profitiert** von Ihren Beiträgen

## 📊 Datenqualität

### Aktualität
- **EDDN**: Sekunden bis Minuten
- **EDSM**: Echtzeit bei EDMC-Nutzung
- **Inara**: Stündliche Updates
- **EDDB**: Tägliche Synchronisation

### Abdeckung
- **Core Systems**: 99%+ Abdeckung
- **Bubble**: 95%+ Abdeckung  
- **Outer Rim**: 60%+ Abdeckung
- **Deep Space**: Community-abhängig

## 🔐 API-Zugang

### Rate Limits
Respektieren Sie API-Limits:
- **EDSM**: 100 Requests/Minute
- **Inara**: 200 Requests/Minute
- **EDDB**: Download-basiert

### Authentifizierung
```python
headers = {
    'User-Agent': 'YourApp/1.0 (contact@yourapp.com)',
    'Authorization': 'Bearer YOUR_API_KEY'
}
```

---

*Diese Ressourcen werden von der Community gepflegt. Beiträge zur Datenqualität sind immer willkommen!*