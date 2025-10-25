#!/bin/bash

# Elite Dangerous Tools - Deployment Script
# Automatisiert den Build und Deploy-Prozess für Cloudflare Pages

set -e  # Exit on any error

echo "🚀 Elite Dangerous Tools - Deployment gestartet"
echo "================================================"

# Check if Python is installed
if ! command -v python &> /dev/null; then
    echo "❌ Python ist nicht installiert!"
    exit 1
fi

# Check if pip is installed
if ! command -v pip &> /dev/null; then
    echo "❌ pip ist nicht installiert!"
    exit 1
fi

echo "✅ Python und pip gefunden"

# Install or upgrade dependencies
echo "📦 Installiere Dependencies..."
pip install -r requirements.txt --upgrade

# Clean previous build
if [ -d "site" ]; then
    echo "🧹 Lösche vorherigen Build..."
    rm -rf site
fi

# Build the site
echo "🔨 Erstelle MkDocs Build..."
mkdocs build --verbose

# Check if build was successful
if [ ! -d "site" ]; then
    echo "❌ Build fehlgeschlagen!"
    exit 1
fi

echo "✅ Build erfolgreich erstellt"

# Display build info
echo "📊 Build-Informationen:"
echo "   - Ausgabeverzeichnis: $(pwd)/site"
echo "   - Dateien: $(find site -type f | wc -l)"
echo "   - Größe: $(du -sh site | cut -f1)"

# Check for common issues
echo "🔍 Prüfe auf häufige Probleme..."

# Check for broken internal links
if command -v linkchecker &> /dev/null; then
    echo "🔗 Prüfe interne Links..."
    mkdocs serve --dirtyreload &
    sleep 5
    linkchecker http://localhost:8000 --no-warnings || true
    pkill -f "mkdocs serve"
else
    echo "ℹ️  linkchecker nicht installiert, überspringe Link-Prüfung"
fi

# Validate HTML structure
if command -v html5validator &> /dev/null; then
    echo "📝 Validiere HTML..."
    html5validator --root site/ --also-check-css || true
else
    echo "ℹ️  html5validator nicht installiert, überspringe HTML-Validierung"
fi

echo ""
echo "🎉 Deployment vorbereitet!"
echo "================================================"
echo ""
echo "Nächste Schritte für Cloudflare Pages:"
echo "1. Pushe die Änderungen zu GitHub:"
echo "   git add ."
echo "   git commit -m 'Update Elite Dangerous Tools'"
echo "   git push origin main"
echo ""
echo "2. Cloudflare Pages wird automatisch deployen"
echo "3. Überprüfe den Status auf: https://dash.cloudflare.com"
echo ""
echo "Manuelle Deployment-Option:"
echo "   npx wrangler pages publish site --project-name=edtools"
echo ""
echo "✨ Fly dangerous, Commander! o7"