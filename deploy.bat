@echo off
REM Elite Dangerous Tools - Windows Deployment Script
REM Automatisiert den Build und Deploy-Prozess für Cloudflare Pages

echo 🚀 Elite Dangerous Tools - Deployment gestartet
echo ================================================

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python ist nicht installiert!
    pause
    exit /b 1
)

REM Check if pip is installed  
pip --version >nul 2>&1
if errorlevel 1 (
    echo ❌ pip ist nicht installiert!
    pause
    exit /b 1
)

echo ✅ Python und pip gefunden

REM Install or upgrade dependencies
echo 📦 Installiere Dependencies...
pip install -r requirements.txt --upgrade
if errorlevel 1 (
    echo ❌ Fehler beim Installieren der Dependencies!
    pause
    exit /b 1
)

REM Clean previous build
if exist "site" (
    echo 🧹 Lösche vorherigen Build...
    rmdir /s /q site
)

REM Build the site
echo 🔨 Erstelle MkDocs Build...
mkdocs build --verbose
if errorlevel 1 (
    echo ❌ Build fehlgeschlagen!
    pause
    exit /b 1
)

REM Check if build was successful
if not exist "site" (
    echo ❌ Build-Verzeichnis nicht gefunden!
    pause
    exit /b 1
)

echo ✅ Build erfolgreich erstellt

REM Display build info
echo 📊 Build-Informationen:
echo    - Ausgabeverzeichnis: %CD%\site
for /f %%i in ('dir /s /b site\*.* ^| find /c /v ""') do echo    - Dateien: %%i

echo.
echo 🎉 Deployment vorbereitet!
echo ================================================
echo.
echo Nächste Schritte für Cloudflare Pages:
echo 1. Pushe die Änderungen zu GitHub:
echo    git add .
echo    git commit -m "Update Elite Dangerous Tools"
echo    git push origin main
echo.
echo 2. Cloudflare Pages wird automatisch deployen
echo 3. Überprüfe den Status auf: https://dash.cloudflare.com
echo.
echo Manuelle Deployment-Option:
echo    npx wrangler pages publish site --project-name=edtools
echo.
echo ✨ Fly dangerous, Commander! o7

pause