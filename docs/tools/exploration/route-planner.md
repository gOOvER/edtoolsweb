# Route Planner

Der Elite Dangerous Route Planner hilft Ihnen dabei, optimale Routen durch die Galaxis zu berechnen.

## 🗺️ Features

<div class="ed-tool-card">
  <h3>✨ Intelligente Routenberechnung</h3>
  <ul>
    <li><strong>Sprungreichweiten-Optimierung</strong>: Berücksichtigung Ihrer Schiffsspezifikationen</li>
    <li><strong>Treibstoff-Management</strong>: Automatische Tankstopps einplanen</li>
    <li><strong>Neutronenstern-Routing</strong>: FSD-Boost für Langstrecken nutzen</li>
    <li><strong>Gefahrenzonen-Vermeidung</strong>: Permit-locked und gefährliche Systeme ausschließen</li>
  </ul>
</div>

## 🚀 Verwendung

### Basis-Routing
```
Start: Sol
Ziel: Colonia
Sprungreichweite: 50 LY
Neutronensterne: Aktiviert
```

### Erweiterte Optionen
- **Wirtschaftsrouting**: Minimale Sprünge
- **Schnellrouting**: Direkte Route
- **Exploration**: Unentdeckte Systeme bevorzugen
- **Material-Sammeln**: Systeme mit spezifischen Ressourcen

## 📊 API-Integration

Unser Route Planner nutzt Echtzeitdaten von:

- **EDSM**: Aktualisierte Systemdaten
- **Spansh**: Neutronenstern-Datenbank
- **EDDB**: Stationsinformationen
- **Eigene Algorithmen**: Optimierte Pfadfindung

## 🛠️ Technische Details

### Algorithmus
Der Planner verwendet einen modifizierten A*-Algorithmus:

```python
def calculate_route(start, destination, jump_range, options):
    # Heuristik für optimale Pfadfindung
    heuristic = lambda pos: distance_to_goal(pos, destination)
    
    # Neutronenstern-Boost berücksichtigen
    if options.use_neutron_stars:
        jump_range *= NEUTRON_BOOST_FACTOR
    
    return astar_search(start, destination, jump_range, heuristic)
```

### Performance
- **Durchschnittliche Berechnungszeit**: < 2 Sekunden
- **Maximale Entfernung**: 65.000 LY
- **Datenbankgröße**: 85+ Millionen Systeme

## 🎯 Tipps für Commanders

!!! tip "Sprungreichweite optimieren"
    - Engineering Ihres FSD-Antriebs kann die Reichweite um bis zu 50% erhöhen
    - Leichterer Schiffsaufbau = größere Sprungreichweite
    - Guardian-FSD-Booster für zusätzliche +10.5 LY

!!! warning "Neutronensterne"
    Neutronensterne geben 4x Sprungreichweite, aber:
    - Schäden am FSD nach ~100 Sprüngen
    - AFMU (Auto Field-Maintenance Unit) empfohlen
    - Vorsichtiges Andocken an den Jet-Cone

!!! note "Treibstoff-Management"
    - Fuel Scoop für Langstreckenreisen unverzichtbar
    - KGBFOAM-Sterne sind tankbar
    - Notfall-Kontakt: [Fuel Rats](https://fuelrats.com)

## 📱 Mobile App

Der Route Planner ist auch als mobile App verfügbar:

- **Android**: Elite Navigator
- **iOS**: ED Route Planner
- **Progressive Web App**: Funktioniert offline

---

*Sichere Reisen, Commander! o7*