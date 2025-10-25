# EDDN - Elite Dangerous Data Network

<div class="tool-header">
    <div class="tool-status status-active">Active</div>
    <div class="tool-category">API</div>
</div>

## Overview

The Elite Dangerous Data Network (EDDN) is the backbone infrastructure that enables real-time data sharing across the Elite Dangerous community. This decentralized network collects and distributes market data, system information, and exploration discoveries to power the tools and databases commanders rely on daily.

## Network Architecture

### 📡 **Data Distribution**
- Real-time message broadcasting to all connected services
- Decentralized architecture ensuring high availability
- Automatic data validation and quality assurance
- Scalable infrastructure supporting millions of messages

### 🔄 **Data Flow**
- Game clients submit data through compatible tools
- Network validates and processes incoming messages
- Verified data broadcasts to all subscribers
- Tools and databases receive live updates instantly

### 🛡️ **Quality Assurance**
- Automated anomaly detection and filtering
- Rate limiting to prevent spam and abuse
- Data freshness validation and timestamping
- Community-driven quality reporting

## Data Types

### **Market Data**
Real-time commodity prices and market information from stations across the galaxy.

#### **Message Content**
- **Station Information**: Name, system, faction control
- **Commodity Prices**: Buy/sell prices, stock levels, demand
- **Market Services**: Available facilities and services
- **Timestamp Data**: When information was collected

#### **Update Frequency**
- **High-Traffic Stations**: Multiple updates per hour
- **Popular Trade Routes**: Frequent data refresh
- **Remote Stations**: Periodic updates from visitors
- **Event Systems**: Enhanced monitoring during CGs

### **System Information**
Exploration data and system details from commander discoveries.

#### **Exploration Data**
- **System Surveys**: Complete system scans
- **Planetary Bodies**: Detailed celestial body information
- **First Discoveries**: Commander attribution data
- **Faction Control**: Political and economic states

#### **Navigation Data**
- **Jump Range Calculations**: Distance and routing information
- **Fuel Star Locations**: Refueling waypoints
- **Neutron Star Data**: Supercharging opportunities
- **Hazard Warnings**: Dangerous system information

### **Fleet Carrier Data**
Mobile fleet carrier services and location tracking.

#### **Carrier Services**
- **Buy/Sell Orders**: Market opportunities
- **Service Availability**: Outfitting, shipyard, repairs
- **Location Tracking**: Current system and movement
- **Owner Information**: Contact and communication data

## Integration Methods

### **Publisher Clients**
Tools that submit data to the EDDN network.

#### **Popular Publishers**
- **ED Market Connector**: Automatic market data submission
- **EDDiscovery**: Comprehensive game data integration
- **EDDI**: Voice-activated data submission
- **Custom Tools**: Community-developed applications

#### **Data Submission**
- **Automatic Collection**: Game journal file monitoring
- **Real-time Submission**: Immediate data broadcasting
- **Privacy Controls**: User-configurable data sharing
- **Quality Validation**: Client-side data verification

### **Subscriber Services**
Tools and databases that consume EDDN data feeds.

#### **Major Subscribers**
- **EDDB**: Market data and station information
- **Inara**: Community features and trading data
- **EDSM**: Exploration and system data
- **Third-Party Tools**: Custom applications and services

#### **Data Consumption**
- **Live Feeds**: Real-time message streaming
- **Filtered Streams**: Specific data type subscriptions
- **Historical Data**: Archived message replay
- **API Integration**: RESTful data access

## Technical Specifications

### **Message Format**
EDDN uses standardized JSON message schemas for all data types.

#### **Schema Validation**
- **Versioned Schemas**: Backward compatibility support
- **Required Fields**: Mandatory data elements
- **Optional Data**: Extended information support
- **Validation Rules**: Data format and range checking

#### **Message Structure**
```json
{
  "header": {
    "uploaderID": "commander_name",
    "timestamp": "2025-10-25T10:30:00Z",
    "gameversion": "4.0.0.1456",
    "gamebuild": "r303119/r0 "
  },
  "message": {
    // Schema-specific data content
  }
}
```

### **Network Protocols**
- **ZeroMQ**: High-performance messaging protocol
- **TCP/WebSocket**: Standard network connectivity
- **SSL/TLS**: Encrypted data transmission
- **Load Balancing**: Distributed message handling

## Developer Integration

### **Getting Started**
Integration guide for developers building EDDN-compatible tools.

#### **Publisher Development**
1. **Schema Selection**: Choose appropriate message types
2. **Data Collection**: Implement game data monitoring
3. **Message Construction**: Build valid EDDN messages
4. **Network Submission**: Connect to EDDN relays
5. **Error Handling**: Implement robust failure recovery

#### **Subscriber Development**
1. **Connection Setup**: Establish EDDN feed connection
2. **Message Filtering**: Subscribe to relevant data types
3. **Data Processing**: Parse and validate received messages
4. **Storage Integration**: Update local databases/caches
5. **Error Recovery**: Handle network and data issues

### **Best Practices**
- **Rate Limiting**: Respect network capacity limits
- **Data Validation**: Verify message content before processing
- **Error Handling**: Implement graceful failure recovery
- **User Privacy**: Respect commander privacy preferences
- **Documentation**: Provide clear integration guides

## Community Impact

### **Data Democracy**
EDDN democratizes access to Elite Dangerous data, enabling innovation across the community.

#### **Tool Development**
- **Barrier Reduction**: Easy access to comprehensive data
- **Innovation Enablement**: Foundation for new tools
- **Community Collaboration**: Shared data infrastructure
- **Quality Improvement**: Collective data validation

#### **Player Benefits**
- **Real-time Information**: Up-to-date market and system data
- **Trading Optimization**: Accurate profit calculations
- **Exploration Support**: Current discovery information
- **Community Coordination**: Shared situational awareness

### **Network Statistics**
- **Daily Messages**: Millions of data updates
- **Active Publishers**: Thousands of contributing tools
- **Subscriber Services**: Dozens of major databases
- **Global Coverage**: Worldwide data contribution

## Reliability & Performance

### **Uptime Statistics**
EDDN maintains extremely high availability through redundant infrastructure.

#### **Performance Metrics**
- **Message Latency**: Sub-second data delivery
- **Network Availability**: 99.9%+ uptime target
- **Throughput Capacity**: Millions of messages per day
- **Geographic Distribution**: Global relay network

#### **Monitoring Systems**
- **Real-time Metrics**: Network performance tracking
- **Quality Monitoring**: Data accuracy verification
- **Capacity Planning**: Scaling for growth
- **Issue Detection**: Proactive problem identification

!!! info "Community Effort"
    EDDN's success depends on community participation. Consider contributing data to help everyone!

!!! tip "Development Support"
    Comprehensive documentation and community support available for developers.

!!! warning "Data Privacy"
    Review privacy settings in publishing tools to control what data you share.

---

<div class="tool-footer">
    <div class="footer-links">
        <a href="../capi/" class="btn btn-secondary">Companion API</a>
        <a href="../../databases/eddb/" class="btn btn-secondary">EDDB Integration</a>
        <a href="https://eddn.edcd.io" class="btn btn-primary" data-external="true">EDDN Documentation</a>
    </div>
</div>