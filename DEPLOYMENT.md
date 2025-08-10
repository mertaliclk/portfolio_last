# 🚀 GitHub Pages Deployment Guide

This guide will walk you through deploying your portfolio to GitHub Pages using GitHub Actions.

## 📋 Prerequisites

- A GitHub account
- Your portfolio code pushed to a GitHub repository
- Node.js 18+ installed locally (for testing builds)

## 🔧 Project Configuration

Your project has been configured with:

- **Static Export**: `next.config.ts` is set to export static files
- **GitHub Actions**: Automated build and deployment workflow
- **Build Scripts**: Added `export` script for static generation

## 📁 Files Added/Modified

- ✅ `next.config.ts` - Added static export configuration
- ✅ `.github/workflows/pages.yml` - GitHub Actions workflow
- ✅ `package.json` - Added export script
- ✅ `.gitignore` - Updated to exclude build artifacts
- ✅ `README.md` - Updated with deployment information
- ✅ `deploy.bat` - Windows deployment script
- ✅ `deploy.sh` - Linux/Mac deployment script

## 🚀 Deployment Steps

### Step 1: Push to GitHub

```bash
# Add all changes
git add .

# Commit changes
git commit -m "Configure for GitHub Pages deployment"

# Push to GitHub
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Click **Configure** if prompted

### Step 3: Automatic Deployment

Once you push to the `main` branch:
1. GitHub Actions will automatically trigger
2. The workflow will build your project
3. Static files will be generated in the `out/` directory
4. Your site will be deployed to GitHub Pages

## 🔍 Monitoring Deployment

### Check GitHub Actions

1. Go to your repository
2. Click **Actions** tab
3. You'll see the "Deploy to GitHub Pages" workflow running
4. Click on it to see detailed logs

### Check GitHub Pages

1. Go to **Settings** > **Pages**
2. You'll see the deployment status
3. Once complete, your site URL will be displayed

## 🌐 Your Site URL

Your portfolio will be available at:
```
https://yourusername.github.io/portfolio_last/
```

**Note**: Replace `yourusername` with your actual GitHub username and `portfolio_last` with your repository name.

## 🧪 Testing Locally

Before pushing to GitHub, test the build locally:

### Windows
```bash
deploy.bat
```

### Linux/Mac
```bash
chmod +x deploy.sh
./deploy.sh
```

### Manual Build
```bash
npm run build
```

The static files will be generated in the `out/` directory.

## 🔧 Troubleshooting

### Build Fails

1. Check the GitHub Actions logs for errors
2. Ensure all dependencies are properly installed
3. Verify the `next.config.ts` configuration

### Site Not Loading

1. Check if GitHub Pages is enabled
2. Verify the repository name matches the URL
3. Wait a few minutes for deployment to complete

### Images Not Loading

1. Ensure all images are in the `src/images/` directory
2. Check that image paths are correct in components
3. Verify images are imported properly

## 📱 Custom Domain (Optional)

To use a custom domain:

1. Go to **Settings** > **Pages**
2. Under **Custom domain**, enter your domain
3. Add a `CNAME` file to your repository root with your domain
4. Configure DNS settings with your domain provider

## 🔄 Updating Your Site

To update your portfolio:

1. Make changes to your code
2. Commit and push to GitHub
3. GitHub Actions will automatically rebuild and deploy
4. Your site will be updated within a few minutes

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## 🎯 Next Steps

1. **Push your code** to GitHub
2. **Enable GitHub Pages** in repository settings
3. **Wait for deployment** to complete
4. **Share your portfolio** with the world! 🎉

---

**Need help?** Check the GitHub Actions logs or create an issue in your repository. 