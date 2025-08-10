@echo off
echo 🚀 Building portfolio for GitHub Pages...

REM Clean previous build
if exist out\ rmdir /s /q out
if exist .next\ rmdir /s /q .next

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Build the project
echo 🔨 Building project...
npm run build

REM Check if build was successful
if exist out\ (
    echo ✅ Build successful! Static files generated in 'out/' directory
    echo 📁 Contents of out/ directory:
    dir out
    echo.
    echo 🚀 Next steps:
    echo 1. Push your code to GitHub: git push origin main
    echo 2. Go to your repository Settings ^> Pages
    echo 3. Select 'GitHub Actions' as the source
    echo 4. The GitHub Action will automatically deploy your site
    echo.
    echo 🌐 Your site will be available at: https://yourusername.github.io/portfolio_last/
) else (
    echo ❌ Build failed! Check the error messages above.
    pause
    exit /b 1
)

pause 