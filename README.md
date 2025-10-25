# Elite Dangerous Tools Website

# Elite Dangerous Tools Website

A modern, responsive MkDocs website for Elite Dangerous tools, optimized for Cloudflare Pages.

## 🚀 Features

- **Elite Dangerous Design**: Authentic color palette (Orange/Black/Blue)
- **Material Design**: Modern, responsive user interface
- **Dark/Light Theme**: Automatic theme switcher
- **Multilingual Support**: English and German versions
- **Tool Categories**: Exploration, Trading, Engineering, Combat
- **Community Integration**: Discord, GitHub, Reddit links
- **API Documentation**: Comprehensive developer resources
- **Mobile Optimized**: Works perfectly on all devices

## 🌐 Languages

- **English**: Default language (`/`)
- **German**: German version (`/de/`)
- **Automatic Detection**: Based on URL path

## 🛠️ Technology

- **MkDocs**: Static site generator
- **Material Theme**: Modern design framework
- **Cloudflare Pages**: Hosting and CDN
- **GitHub Actions**: Automatic deployment
- **Elite Dangerous APIs**: EDDN, EDSM, Inara integration

## 🔧 Local Development

### Requirements
- Python 3.11+
- pip
- Git

### Setup
```bash
# Clone repository
git clone https://github.com/yourusername/edtoolsweb.git
cd edtoolsweb

# Create Python virtual environment
python -m venv venv
venv\Scripts\activate  # Windows

# Install dependencies
pip install -r requirements.txt

# Start development server
mkdocs serve
```

The site will be available at `http://localhost:8000`.

## 🚀 Deployment to Cloudflare Pages

1. Push repository to GitHub
2. Connect Cloudflare Pages with GitHub
3. Build command: `pip install -r requirements.txt && mkdocs build`
4. Output directory: `site`
5. Automatic deployment on Git push

## 🎨 Design System

### Elite Dangerous Colors
```css
:root {
  --ed-orange: #ff6600;        /* Primary */
  --ed-blue: #00b4d8;          /* Accent */
  --ed-black: #0a0a0a;         /* Background */
  --ed-dark-grey: #1a1a1a;     /* Surface */
  --ed-text-light: #e0e0e0;    /* Text */
}
```

## 📁 Project Structure

```
edtoolsweb/
├── docs/                      # Markdown files
│   ├── index.md              # English homepage
│   ├── de/                   # German translations
│   │   └── index.md          # German homepage
│   ├── tools/                # Tool documentation
│   ├── resources/            # API & database info
│   ├── community/            # Community pages
│   ├── stylesheets/          # Custom CSS
│   ├── javascripts/          # Custom JavaScript
│   └── assets/               # Images and icons
├── .github/workflows/        # CI/CD pipeline
├── mkdocs.yml               # MkDocs configuration
├── requirements.txt         # Python dependencies
└── README.md               # This file
```

---

*Fly dangerous, Commander! o7*

