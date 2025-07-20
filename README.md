# FolioForge - Your AI-Powered Portfolio Website

Welcome to FolioForge! This is a modern, responsive, and feature-rich portfolio website built with Next.js, Firebase, and Genkit AI. It's designed to be easily customizable and deployable.

This project includes a fully-featured portfolio, a contact form that saves submissions to Firebase Storage, and an AI Design Assistant to help you refine your design.

## Features

- **Modern UI/UX:** A clean, professional, and visually engaging design built with Tailwind CSS and ShadCN UI.
- **Responsive Design:** Looks great on desktop, tablet, and mobile devices.
- **Project Showcase:** A gallery to display your work with images, descriptions, and links.
- **Contact Form:** A serverless contact form that saves submissions directly to Firebase Storage.
- **AI Design Assistant:** An integrated Genkit AI flow to provide design feedback.
- **Downloadable Resume:** A link to your resume hosted on Firebase Storage.
- **Two Deployment Options:** Deploy the full-featured site to Firebase App Hosting or a static version to GitHub Pages.

## Getting Started

Follow these steps to get your portfolio website up and running.

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [Firebase Account](https://firebase.google.com/) with a new project created.

### 2. Clone and Install Dependencies

First, clone this repository and install the necessary npm packages.

```bash
git clone <your-repository-url>
cd <repository-name>
npm install
```

### 3. Firebase Setup

This project uses Firebase for two key features:
1.  **Firebase Storage:** To host your project images and resume PDF.
2.  **Firebase Storage:** To store contact form submissions as JSON files.

**A. Create a Firebase Project**

If you haven't already, go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.

**B. Create a Web App**

In your Firebase project, create a new Web App. You'll be provided with a `firebaseConfig` object. You will need this for the next step.

**C. Configure Firebase in Your Project**

Open the file `src/lib/firebase.ts`. You will see a placeholder `firebaseConfig` object. Replace the placeholder values with the actual configuration keys from your Firebase Web App.

```typescript
// src/lib/firebase.ts

const firebaseConfig: FirebaseOptions = {
  apiKey: "YOUR_API_KEY", // Replace with your key
  authDomain: "YOUR_AUTH_DOMAIN", // Replace with your domain
  projectId: "YOUR_PROJECT_ID", // Replace with your ID
  storageBucket: "YOUR_STORAGE_BUCKET", // Replace with your bucket
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID", // Replace with your sender ID
  appId: "YOUR_APP_ID", // Replace with your App ID
};
```

**D. Configure Firebase Storage Rules**

For the contact form and resume download to work, you need to adjust your Firebase Storage security rules. Go to `Storage -> Rules` in your Firebase Console and update the rules to allow public reads (for assets) and writes to the `submissions/` path.

**WARNING:** The following rules are for development purposes and allow public access. For production, you may want to implement more secure rules.

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Allow public read access to all files except submissions
    match /{allPaths=**} {
      allow read;
    }
    // Allow anyone to write to the submissions folder
    match /submissions/{submissionId} {
      allow write;
    }
  }
}
```

### 4. Upload Your Assets

Manually upload your project images and resume PDF to your Firebase Storage bucket via the Firebase Console.

- **Project Images:** Note the path of each image. You will update the URLs in `src/components/projects-section.tsx`.
- **Resume:** Upload your resume (e.g., `resume.pdf`). Then, update the path in `src/lib/firebase.ts` inside the `getResumeDownloadURL` function.

### 5. Running the Development Server

To run the application locally, use the following command. This will start the Next.js development server.

```bash
npm run dev
```

Your portfolio will be available at `http://localhost:9002`.

## Deployment

You have two primary options for deploying your site.

### Option 1: Firebase App Hosting (Recommended for Full Features)

Firebase App Hosting is the easiest way to deploy the full application, including the AI Design Assistant.

1.  Follow the [Firebase App Hosting documentation](https://firebase.google.com/docs/app-hosting) to connect your GitHub repository.
2.  Firebase will automatically build and deploy your application whenever you push to your main branch.

This method ensures all features, including server-side AI functions, work correctly.

### Option 2: GitHub Pages (Static Site)

You can deploy a static version of your portfolio to GitHub Pages for free. **Note:** This method will not include the AI Design Assistant, as it requires a server.

**A. Enable Static Export**

In `next.config.ts`, add the `output: 'export'` line:

```typescript
// next.config.ts
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Add this line
  /* other config options */
};

export default nextConfig;
```

**B. Build the Static Site**

Run the build command:

```bash
npm run build
```

This will generate a static version of your site in the `out` folder.

**C. Deploy to GitHub Pages**

Follow the official [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) to deploy the contents of the `out` folder. Typically, you would set your publishing source to the `gh-pages` branch and push the `out` folder's contents to that branch.

---

Enjoy your new portfolio!
