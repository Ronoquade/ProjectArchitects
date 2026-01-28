import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Firebase Admin SDK
// In production, use a service account key file
// For development, you can use the Firebase emulator
let firebaseApp;

try {
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    // Initialize with service account
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: process.env.FIREBASE_PROJECT_ID
    });
  } else {
    // Initialize with default credentials (for local development)
    firebaseApp = admin.initializeApp({
      projectId: process.env.FIREBASE_PROJECT_ID || 'demo-project'
    });
  }
  console.log('Firebase Admin initialized successfully');
} catch (error) {
  console.warn('Firebase Admin initialization skipped:', error.message);
  console.warn('Set FIREBASE_SERVICE_ACCOUNT or FIREBASE_PROJECT_ID in .env to enable Firebase features');
}

export const db = firebaseApp ? admin.firestore() : null;
export const auth = firebaseApp ? admin.auth() : null;

export default admin;
