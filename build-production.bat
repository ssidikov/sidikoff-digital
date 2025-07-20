@echo off
echo Starting build without Turbopack...

REM Clear Next.js cache
if exist .next rmdir /s /q .next

REM Set environment to disable Turbopack
set FORCE_WEBPACK=true

REM Run build
npm run build

REM Generate sitemap after successful build
if %ERRORLEVEL% EQU 0 (
    echo Build successful! Generating sitemap...
    npm run sitemap
) else (
    echo Build failed with error code %ERRORLEVEL%
    exit /b %ERRORLEVEL%
)

echo Build and sitemap generation complete!
