# Companion API - Elite Dangerous Official API

<div class="tool-header">
    <div class="tool-status status-limited">Limited Access</div>
    <div class="tool-category">API</div>
</div>

## Overview

The Elite Dangerous Companion API (CAPI) is the official API provided by Frontier Developments for accessing player account data and game information. This authenticated API allows players to retrieve their commander profile, ship information, and market data directly from the game servers.

## Key Features

### 👤 **Commander Profile**
- Personal commander statistics and rankings
- Career progress and achievement tracking
- Credit balance and asset information
- Reputation and faction standing data

### 🚀 **Fleet Management**
- Current ship configuration and loadout
- Ship storage and fleet inventory
- Module and weapon specifications
- Engineering modifications and effects

### 📊 **Market Data**
- Current station market information
- Commodity prices and availability
- Station services and facilities
- Local faction and economic data

### 📍 **Location Tracking**
- Current commander location
- Docked station information
- System and galactic position
- Recent travel history

## Authentication

### **OAuth 2.0 Flow**
The Companion API uses OAuth 2.0 for secure authentication and authorization.

#### **Authorization Process**
1. **Registration**: Register application with Frontier
2. **Authorization Request**: Redirect user to Frontier login
3. **User Consent**: Player authorizes data access
4. **Authorization Code**: Receive temporary code
5. **Access Token**: Exchange code for API token
6. **API Access**: Use token for authenticated requests

#### **Token Management**
- **Access Tokens**: Short-lived authentication tokens
- **Refresh Tokens**: Long-term token renewal capability
- **Scope Permissions**: Granular access control
- **Token Expiration**: Automatic security timeout

### **Security Considerations**
- **HTTPS Only**: All communications encrypted
- **Rate Limiting**: API usage quotas and throttling
- **Secure Storage**: Token protection requirements
- **User Consent**: Explicit permission for data access

## Available Endpoints

### **Profile Data**
Access comprehensive commander profile information.

#### **/profile**
- **Commander Details**: Name, rank, and basic information
- **Statistics**: Career achievements and progress
- **Reputation**: Faction standings and relationships
- **Credits**: Current balance and financial status

#### **Response Data**
```json
{
  "commander": {
    "name": "CMDR Name",
    "credits": 150000000,
    "rank": {
      "combat": 5,
      "trade": 7,
      "exploration": 6
    }
  }
}
```

### **Fleet Information**
Current ship and fleet data.

#### **/fleet**
- **Active Ship**: Currently piloted vessel
- **Fleet Inventory**: All owned ships
- **Module Configuration**: Detailed loadout information
- **Engineering Data**: Applied modifications

#### **Ship Data Structure**
```json
{
  "ship": {
    "name": "Ship Name",
    "shipType": "python",
    "modules": {
      "PowerPlant": {
        "module": "int_powerplant_size6_class5_name",
        "engineering": {
          "blueprint": "PowerPlant_Armoured",
          "level": 5
        }
      }
    }
  }
}
```

### **Market Data**
Current station market information when docked.

#### **/market**
- **Commodity Prices**: Buy/sell prices and stock
- **Station Services**: Available facilities
- **Market Conditions**: Supply and demand data
- **Economic State**: Local market conditions

## Integration Use Cases

### **Third-Party Applications**
The Companion API enables rich third-party tool development.

#### **Popular Integrations**
- **Ship Builders**: Import current loadouts
- **Trading Tools**: Real-time market data
- **Fleet Managers**: Comprehensive ship tracking
- **Progress Trackers**: Achievement monitoring

#### **Mobile Applications**
- **Companion Apps**: Remote fleet monitoring
- **Market Checkers**: Price comparison tools
- **Progress Viewers**: Career statistics
- **Location Trackers**: Travel monitoring

### **Community Tools**
- **EDMC Integration**: Market Connector API usage
- **Discord Bots**: Commander status reporting
- **Web Dashboards**: Real-time player data
- **Analytics Tools**: Progress analysis

## Technical Implementation

### **API Client Development**
Guidelines for implementing Companion API clients.

#### **Best Practices**
- **Token Security**: Secure credential storage
- **Error Handling**: Robust failure recovery
- **Rate Limiting**: Respect API quotas
- **User Privacy**: Protect sensitive data
- **Offline Support**: Cache data appropriately

#### **Common Patterns**
```python
import requests

class CompanionAPI:
    def __init__(self, access_token):
        self.token = access_token
        self.base_url = "https://companion.orerve.net"
    
    def get_profile(self):
        headers = {"Authorization": f"Bearer {self.token}"}
        response = requests.get(
            f"{self.base_url}/profile", 
            headers=headers
        )
        return response.json()
```

### **Data Processing**
- **JSON Parsing**: Standard data format handling
- **Error Responses**: HTTP status code handling
- **Data Validation**: Response structure verification
- **Caching Strategy**: Appropriate data persistence

## Limitations & Considerations

### **API Restrictions**
- **Rate Limiting**: Request frequency limitations
- **Data Scope**: Limited to authenticated player data
- **Availability**: Dependent on game server status
- **Version Changes**: API evolution and compatibility

### **Privacy & Security**
- **Personal Data**: Sensitive information protection
- **User Consent**: Explicit permission requirements
- **Data Retention**: Responsible data handling
- **Third-Party Sharing**: User control over data use

### **Development Considerations**
- **Registration Required**: Frontier developer account needed
- **Usage Approval**: Application review process
- **Documentation**: Limited public documentation
- **Community Support**: Developer community assistance

## Alternative Data Sources

### **Community APIs**
When Companion API access is limited, consider community alternatives.

#### **Data Sources**
- **EDDN**: Real-time community data network
- **Journal Files**: Local game data parsing
- **Screen Scraping**: Game interface data extraction
- **Community Databases**: Aggregated player data

#### **Hybrid Approaches**
- **Primary Source**: Companion API for authenticated data
- **Fallback Data**: Community sources for unavailable information
- **Data Validation**: Cross-reference multiple sources
- **User Choice**: Allow users to select data sources

## Getting Started

### **Developer Registration**
1. **Frontier Account**: Create developer account
2. **Application Registration**: Register your application
3. **API Credentials**: Receive client ID and secret
4. **OAuth Setup**: Implement authentication flow
5. **Testing**: Validate integration with test data

### **Community Resources**
- **Developer Forums**: Frontier developer community
- **Documentation**: Official API documentation
- **Code Examples**: Community-contributed samples
- **Support Channels**: Developer assistance

!!! warning "Limited Access"
    The Companion API has restricted access and requires approval from Frontier Developments.

!!! info "Authentication Required"
    All API access requires OAuth 2.0 authentication and user consent for data access.

!!! tip "Community Alternatives"
    Consider EDDN and other community data sources for broader data access needs.

---

<div class="tool-footer">
    <div class="footer-links">
        <a href="../eddn/" class="btn btn-secondary">EDDN Network</a>
        <a href="../../databases/eddb/" class="btn btn-secondary">EDDB Database</a>
        <a href="https://companion.orerve.net" class="btn btn-primary" data-external="true">API Documentation</a>
    </div>
</div>