# How to Contribute

<div class="tool-header">
    <div class="tool-status status-active">Active</div>
    <div class="tool-category">Community</div>
</div>

## Overview

The Elite Dangerous community thrives on contributions from commanders across the galaxy. Whether you're sharing data, creating tools, writing guides, or helping other players, your participation helps build and maintain the rich ecosystem of resources that make Elite Dangerous more enjoyable for everyone.

## Data Contribution

### **Market Data Collection**
Help keep market databases current with real-time trading information.

#### **Elite Dangerous Market Connector (EDMC)**
The primary tool for automatic market data submission.

**Setup Process:**
1. **Download EDMC**: Install the official market connector
2. **Configure Plugins**: Enable EDDN data submission
3. **Automatic Updates**: Market data uploads automatically when docking
4. **Privacy Settings**: Control what data you share

**Data Types Submitted:**
- **Market Prices**: Buy/sell prices and stock levels
- **Station Services**: Available facilities and outfitting
- **Ship Sales**: Shipyard inventory and pricing
- **Module Data**: Outfitting availability and costs

#### **Manual Data Submission**
For situations where automated tools aren't available.

**Database Websites:**
- **EDDB.io**: Direct market data entry forms
- **Inara.cz**: Comprehensive data submission tools
- **EDSM.net**: System and exploration data entry

### **Exploration Data Sharing**
Contribute to the galaxy's collective knowledge through exploration data.

#### **System Discovery Data**
- **First Discoveries**: Document new system discoveries
- **Planetary Surveys**: Detailed celestial body information
- **POI Locations**: Points of interest and notable features
- **Route Information**: Navigation and travel data

#### **ED Discovery Integration**
Automated exploration data sharing through ED Discovery.

**Features:**
- **Journal File Monitoring**: Automatic game data parsing
- **Real-time Uploads**: Immediate data submission to EDSM
- **Historical Data**: Upload past exploration records
- **Privacy Controls**: Selective data sharing options

## Tool Development

### **Community Applications**
Create tools that enhance the Elite Dangerous experience.

#### **Popular Development Areas**
- **Trading Tools**: Route optimization and market analysis
- **Exploration Utilities**: Route planning and discovery tracking
- **Combat Aids**: Ship building and loadout optimization
- **Community Coordination**: Squadron and event management

#### **Development Resources**
- **API Documentation**: Access community databases
- **Code Repositories**: Open source project contributions
- **Developer Communities**: Technical discussion and support
- **Testing Groups**: User feedback and quality assurance

### **Data APIs & Integration**
Access and contribute to community data ecosystems.

#### **Available APIs**
- **EDDN**: Real-time data network integration
- **EDDB API**: Trading and station database access
- **EDSM API**: Exploration and system data
- **Inara API**: Community features and profiles

#### **Integration Examples**
```python
# Example EDDB API usage
import requests

def get_system_data(system_name):
    url = f"https://eddb.io/api/v1/systems"
    params = {"name": system_name}
    response = requests.get(url, params=params)
    return response.json()
```

## Content Creation

### **Educational Content**
Share your knowledge through guides, tutorials, and documentation.

#### **Guide Writing**
- **Beginner Tutorials**: New player onboarding content
- **Advanced Strategies**: Expert-level technique documentation
- **Tool Instructions**: Software usage and setup guides
- **Game Mechanics**: Deep analysis of game systems

#### **Video Content**
- **YouTube Tutorials**: Visual learning content
- **Streaming**: Live gameplay and education
- **Screenshot Galleries**: Visual documentation
- **Time-lapse Expeditions**: Long-form exploration content

### **Community Documentation**
Contribute to wikis, databases, and reference materials.

#### **Wiki Contributions**
- **Elite Dangerous Wiki**: Comprehensive game documentation
- **Specialized Wikis**: Focus area documentation
- **Translation Projects**: Multi-language content development
- **Template Creation**: Standardized content formats

## Community Support

### **New Player Assistance**
Help newcomers learn and enjoy Elite Dangerous.

#### **Mentorship Programs**
- **One-on-One Guidance**: Personal instruction and support
- **Group Training**: Organized learning sessions
- **Question Answering**: Forum and Discord assistance
- **Resource Sharing**: Tool and guide recommendations

#### **Support Channels**
- **Discord Help Channels**: Real-time assistance
- **Forum Support Sections**: Detailed problem solving
- **Reddit Communities**: Community-driven help
- **In-Game Assistance**: Direct player support

### **Community Services**
Participate in community service organizations.

#### **The Fuel Rats**
Emergency fuel rescue service for stranded commanders.

**Roles:**
- **Active Rats**: Emergency response pilots
- **Dispatchers**: Rescue coordination staff
- **Technical Support**: Systems and procedure maintenance
- **Training Staff**: New member education

#### **Hull Seals**
Ship repair and rescue services for damaged vessels.

**Participation:**
- **Repair Technicians**: Emergency repair specialists
- **Logistics Coordinators**: Resource and planning support
- **Case Managers**: Complex situation specialists
- **Community Outreach**: Service awareness and education

## Technical Contributions

### **Open Source Projects**
Contribute to community-developed software and tools.

#### **Popular Projects**
- **EDDiscovery**: Comprehensive game companion
- **EDMC**: Market connector and plugin ecosystem
- **EDSM Tools**: Exploration and mapping utilities
- **Trading Applications**: Route optimization and analysis

#### **Contribution Types**
- **Code Development**: Feature implementation and bug fixes
- **Documentation**: User guides and technical documentation
- **Testing**: Quality assurance and bug reporting
- **Translation**: Multi-language support development

### **Plugin Development**
Extend existing tools with custom functionality.

#### **EDMC Plugins**
Create custom plugins for the Elite Dangerous Market Connector.

**Example Plugin Structure:**
```python
import tkinter as tk
from config import config

class MyPlugin:
    def __init__(self):
        self.frame = None
    
    def plugin_start(self, parent):
        # Plugin initialization
        return "MyPlugin"
    
    def plugin_app(self, parent):
        # UI creation
        self.frame = tk.Frame(parent)
        return self.frame
```

## Event Organization

### **Community Events**
Organize and coordinate community activities and expeditions.

#### **Event Types**
- **Exploration Expeditions**: Large group discovery missions
- **Racing Events**: Competitive gameplay competitions
- **Construction Projects**: Community building activities
- **Memorial Services**: Community remembrance events

#### **Organization Skills**
- **Event Planning**: Timeline and logistics coordination
- **Community Outreach**: Participant recruitment and communication
- **Resource Management**: Tool and infrastructure provision
- **Documentation**: Event recording and archival

### **Squadron Activities**
Lead and coordinate player group activities.

#### **Squadron Leadership**
- **Member Recruitment**: Community building and growth
- **Activity Coordination**: Regular group events and missions
- **Goal Setting**: Collective objectives and achievements
- **Conflict Resolution**: Internal dispute management

## Recognition & Rewards

### **Community Recognition**
Outstanding contributions are often recognized by the community and developers.

#### **Recognition Forms**
- **Developer Mentions**: Official acknowledgment from Frontier
- **Community Awards**: Peer recognition for contributions
- **Feature Highlights**: Tool and content showcasing
- **Historical Records**: Permanent contribution documentation

### **Personal Benefits**
Contributing to the community provides personal rewards and growth.

#### **Skill Development**
- **Technical Skills**: Programming and data analysis
- **Communication**: Writing and presentation abilities
- **Leadership**: Organization and coordination experience
- **Networking**: Professional and personal connections

## Getting Started

### **Choose Your Path**
Select contribution areas that match your interests and skills.

#### **Assessment Questions**
- **What aspects of Elite Dangerous do you enjoy most?**
- **What technical skills do you have or want to develop?**
- **How much time can you dedicate to community activities?**
- **Do you prefer individual work or group collaboration?**

#### **Starting Small**
- **Data Submission**: Begin with automated data sharing
- **Community Participation**: Join discussions and help others
- **Skill Building**: Learn tools and techniques gradually
- **Project Contribution**: Start with small improvements to existing projects

### **Community Onboarding**
Connect with existing community members and projects.

#### **Finding Opportunities**
- **Discord Servers**: Join relevant community channels
- **GitHub Projects**: Explore open source repositories
- **Forum Threads**: Participate in development discussions
- **Direct Contact**: Reach out to project maintainers

!!! tip "Start Simple"
    Begin with small contributions like data submission or forum participation before taking on larger projects.

!!! info "Community Support"
    The Elite Dangerous community is welcoming to new contributors. Don't hesitate to ask for guidance.

!!! warning "Commitment"
    Consider your available time carefully when taking on community responsibilities or leadership roles.

---

<div class="tool-footer">
    <div class="footer-links">
        <a href="discord/" class="btn btn-secondary">Discord Communities</a>
        <a href="forums/" class="btn btn-secondary">Community Forums</a>
        <a href="https://github.com/EDCD" class="btn btn-primary" data-external="true">Elite Dangerous Community Developers</a>
    </div>
</div>