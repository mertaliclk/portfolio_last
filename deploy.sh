#!/bin/bash

echo "🚀 Building portfolio for GitHub Pages..."

# Clean previous build
rm -rf out/
rm -rf .next/

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ -d "out" ]; then
    echo "✅ Build successful! Static files generated in 'out/' directory"
    echo "📁 Contents of out/ directory:"
    ls -la out/
    echo ""
    echo "🚀 Next steps:"
    echo "1. Push your code to GitHub: git push origin main"
    echo "2. Go to your repository Settings > Pages"
    echo "3. Select 'GitHub Actions' as the source"
    echo "4. The GitHub Action will automatically deploy your site"
    echo ""
    echo "🌐 Your site will be available at: https://yourusername.github.io/portfolio_last/"
else
    echo "❌ Build failed! Check the error messages above."
    exit 1
fi 