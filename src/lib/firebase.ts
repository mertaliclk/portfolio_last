// IMPORTANT: Replace with your Firebase project's configuration
// For more information on how to get this, visit:
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp, type FirebaseOptions } from "firebase/app";
import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";

const firebaseConfig: FirebaseOptions = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

/**
 * Uploads contact form data as a JSON file to Firebase Storage.
 * @param data The contact form data.
 * @returns A promise that resolves when the upload is complete.
 */
export async function uploadContactForm(data: { name: string; email: string; message: string }) {
  const timestamp = new Date().toISOString();
  const fileName = `submissions/contact-${timestamp}.json`;
  const storageRef = ref(storage, fileName);

  const jsonData = JSON.stringify({ ...data, submittedAt: timestamp }, null, 2);

  try {
    await uploadString(storageRef, jsonData, 'raw', {
      contentType: 'application/json'
    });
    console.log("Successfully uploaded contact form submission.");
  } catch (error) {
    console.error("Error uploading contact form submission:", error);
    throw new Error("Failed to submit form. Please try again later.");
  }
}

/**
 * Gets the download URL for a file in Firebase Storage.
 * IMPORTANT: You need to upload your resume to Firebase Storage and update the path here.
 * For example, if you upload 'resume.pdf' to the root, the path is 'resume.pdf'.
 */
export async function getResumeDownloadURL() {
  // ** ACTION REQUIRED **
  // 1. Upload your resume (e.g., 'resume.pdf') to your Firebase Storage bucket.
  // 2. Update the path below to match the file name and path.
  const resumePath = "resume.pdf"; // <-- IMPORTANT: UPDATE THIS PATH
  try {
    const storageRef = ref(storage, resumePath);
    return await getDownloadURL(storageRef);
  } catch (error: any) {
    // Handle cases where the file might not exist yet
    if (error.code === 'storage/object-not-found') {
      console.warn(`Resume file not found at path: "${resumePath}". Please upload it to Firebase Storage.`);
      return "#"; // Return a dead link if not found
    }
    console.error("Error getting resume download URL:", error);
    return "#";
  }
}
