# Ressourcen

# Resources

Here you'll find a comprehensive collection of resources, APIs, and databases for Elite Dangerous.

## 📊 Databases

### Elite Dangerous Database (EDDB)
The most comprehensive database for Elite Dangerous:

- **Systems & Stations**: Complete galactic map
- **Market Data**: Current prices and availability
- **Ships & Modules**: Complete equipment lists
- **Commodities**: Trade goods and market analysis

[🔗 Visit EDDB](https://eddb.io)

### Elite Dangerous Star Map (EDSM)
Cartography and exploration:

- **3D Galactic Map**: Interactive star navigation
- **Discovery Journal**: Commander-specific data
- **Statistics**: Personal exploration metrics
- **Route API**: For tool developers

[🔗 Visit EDSM](https://www.edsm.net)

### Inara
Community-driven database:

- **Commander Profiles**: Public profiles and logs
- **Squadron Management**: Group organization
- **Engineering Database**: Material and blueprint tracking
- **Trade Data**: Community-based market data

[🔗 Visit Inara](https://inara.cz)

## 🔌 APIs

### Elite Dangerous Data Network (EDDN)
Real-time data stream:

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
Official Frontier API:

- **Player Data**: Ships, credits, ranks
- **Market Information**: Current station data
- **Journal Integration**: Automatic updates

### Spansh API
Routing and navigation:

```bash
# Calculate neutron route
curl "https://spansh.co.uk/api/route" \
  -d "efficiency=60&range=50&source=Sol&destination=Colonia"
```

## 🛠️ Developer Tools

### EDMarketConnector (EDMC)
Desktop application for automatic data transmission:

- **Plugins**: Extended functionality
- **Journal Monitoring**: Automatic updates
- **EDDN Integration**: Data broadcasting

### Elite Dangerous Journal
In-game log files:

```json
{
  "timestamp": "2025-10-25T12:00:00Z",
  "event": "FSDJump",
  "StarSystem": "Wolf 359",
  "StarPos": [7.856, 0.863, -5.333],
  "SystemAllegiance": "Federation"
}
```

## 📚 Documentation

### API Documentation

- **EDDN Schema**: Data format specifications
- **EDSM API**: Complete endpoint reference
- **Inara API**: Community data access
- **Journal Events**: Frontier's official documentation

### Code Examples
Repository with implementation examples:

```python
import requests

# Get EDSM system information
response = requests.get(
    "https://www.edsm.net/api-v1/system",
    params={"systemName": "Sol", "showInformation": 1}
)
system_data = response.json()
```

## 🌐 Community Projects

### Open Source Tools

- **EDPathFinder**: Route optimization
- **ED Engineer**: Material tracking
- **EDDI**: Voice-activated assistant
- **Elite Observatory**: Signal monitoring

### Data Contributors
How you can contribute to data quality:

1. **Install EDMC** and configure
2. **Enable automatic uploading**
3. **Collect market data** through normal gameplay
4. **Community benefits** from your contributions

## 📊 Data Quality

### Timeliness

- **EDDN**: Seconds to minutes
- **EDSM**: Real-time with EDMC usage
- **Inara**: Hourly updates
- **EDDB**: Daily synchronization

### Coverage

- **Core Systems**: 99%+ coverage
- **Bubble**: 95%+ coverage
- **Outer Rim**: 60%+ coverage
- **Deep Space**: Community-dependent

## 🔐 API Access

### Rate Limits
Respect API limits:

- **EDSM**: 100 requests/minute
- **Inara**: 200 requests/minute
- **EDDB**: Download-based

### Authentication

```python
headers = {
    'User-Agent': 'YourApp/1.0 (contact@yourapp.com)',
    'Authorization': 'Bearer YOUR_API_KEY'
}
```

---

*These resources are maintained by the community. Contributions to data quality are always welcome!*