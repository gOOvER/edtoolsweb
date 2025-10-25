---
title: Route Planner
description: Plan optimal routes through the galaxy with neutron boost calculations
tags:
  - exploration
  - routing
  - neutron
  - travel
---

# Route Planner

The Elite Dangerous Route Planner helps you calculate optimal routes through the galaxy.

## 🗺️ Features

<div class="ed-tool-card">
  <h3>✨ Intelligent Route Calculation</h3>
  <ul>
    <li><strong>Jump Range Optimization</strong>: Consider your ship specifications</li>
    <li><strong>Fuel Management</strong>: Plan automatic refueling stops</li>
    <li><strong>Neutron Star Routing</strong>: Use FSD boost for long distances</li>
    <li><strong>Danger Zone Avoidance</strong>: Exclude permit-locked and dangerous systems</li>
  </ul>
</div>

## 🚀 Usage

### Basic Routing
```
Start: Sol
Destination: Colonia
Jump Range: 50 LY
Neutron Stars: Enabled
```

### Advanced Options

- **Economic Routing**: Minimum jumps
- **Fast Routing**: Direct route
- **Exploration**: Prefer undiscovered systems
- **Material Collection**: Systems with specific resources

## 📊 API Integration

Our Route Planner uses real-time data from:

- **EDSM**: Updated system data
- **Spansh**: Neutron star database
- **EDDB**: Station information
- **Custom Algorithms**: Optimized pathfinding

## 🛠️ Technical Details

### Algorithm
The planner uses a modified A* algorithm:

```python
def calculate_route(start, destination, jump_range, options):
    # Heuristic for optimal pathfinding
    heuristic = lambda pos: distance_to_goal(pos, destination)
    
    # Consider neutron star boost
    if options.use_neutron_stars:
        jump_range *= NEUTRON_BOOST_FACTOR
    
    return astar_search(start, destination, jump_range, heuristic)
```

### Performance

- **Average calculation time**: < 2 seconds
- **Maximum distance**: 65,000 LY
- **Database size**: 85+ million systems

## 🎯 Tips for Commanders

!!! tip "Optimize Jump Range"
    - Engineering your FSD drive can increase range by up to 50%
    - Lighter ship builds = greater jump range
    - Guardian FSD Booster for an additional +10.5 LY

!!! warning "Neutron Stars"
    Neutron stars provide 4x jump range, but:
    - FSD damage after ~100 jumps
    - AFMU (Auto Field-Maintenance Unit) recommended
    - Careful approach to the jet cone

!!! note "Fuel Management"
    - Fuel scoop essential for long-distance travel
    - KGBFOAM stars are scoopable
    - Emergency contact: [Fuel Rats](https://fuelrats.com)

## 📱 Mobile App

The Route Planner is also available as a mobile app:

- **Android**: Elite Navigator
- **iOS**: ED Route Planner
- **Progressive Web App**: Works offline

---

*Safe travels, Commander! o7*