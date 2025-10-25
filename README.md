# Elite Dangerous Tools Website

Eine moderne, responsive MkDocs-Webseite für Elite Dangerous Tools, optimiert für Cloudflare Pages.

## 🚀 Features

- **Elite Dangerous Design**: Authentische Farbpalette (Orange/Schwarz/Blau)
- **Material Design**: Moderne, responsive Benutzeroberfläche
- **Dark/Light Theme**: Automatischer Theme-Switcher
- **Tool-Kategorien**: Exploration, Trading, Engineering, Combat
- **Community-Integration**: Discord, GitHub, Reddit Links
- **API-Dokumentation**: Umfassende Entwickler-Ressourcen
- **Mobile-optimiert**: Funktioniert perfekt auf allen Geräten

## 🛠️ Technologie

- **MkDocs**: Statischer Site-Generator
- **Material Theme**: Modernes Design-Framework
- **Cloudflare Pages**: Hosting und CDN
- **GitHub Actions**: Automatisches Deployment
- **Elite Dangerous APIs**: EDDN, EDSM, Inara Integration

## 🔧 Lokale Entwicklung

### Voraussetzungen
- Python 3.11+
- pip
- Git

### Setup
```bash
# Repository klonen
git clone https://github.com/yourusername/edtoolsweb.git
cd edtoolsweb

# Python Virtual Environment erstellen
python -m venv venv
venv\Scripts\activate  # Windows

# Dependencies installieren
pip install -r requirements.txt

# Development Server starten
mkdocs serve
```

Die Seite ist dann unter `http://localhost:8000` erreichbar.

## 🚀 Deployment auf Cloudflare Pages

1. Repository zu GitHub pushen
2. Cloudflare Pages mit GitHub verbinden
3. Build-Kommando: `pip install -r requirements.txt && mkdocs build`
4. Output-Verzeichnis: `site`
5. Automatisches Deployment bei Git-Push

## 🎨 Design-System

### Elite Dangerous Farben
```css
:root {
  --ed-orange: #ff6600;        /* Primary */
  --ed-blue: #00b4d8;          /* Accent */
  --ed-black: #0a0a0a;         /* Background */
  --ed-dark-grey: #1a1a1a;     /* Surface */
  --ed-text-light: #e0e0e0;    /* Text */
}
```

---

*Fly dangerous, Commander! o7*

