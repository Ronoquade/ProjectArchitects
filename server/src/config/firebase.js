import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Firebase Admin SDK
// In production, use a service account key file
// For development, you can use the Firebase emulator
let firebaseApp;
let isFirebaseEnabled = false;

try {
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    // Initialize with service account
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: process.env.FIREBASE_PROJECT_ID
    });
    isFirebaseEnabled = true;
    console.log('Firebase Admin initialized successfully with service account');
  } else if (process.env.FIREBASE_PROJECT_ID) {
    // Try to initialize with default credentials
    firebaseApp = admin.initializeApp({
      projectId: process.env.FIREBASE_PROJECT_ID
    });
    isFirebaseEnabled = true;
    console.log('Firebase Admin initialized successfully with project ID');
  } else {
    console.warn('Firebase not configured. Set FIREBASE_SERVICE_ACCOUNT or FIREBASE_PROJECT_ID in .env to enable Firebase features');
    console.warn('Running in mock mode with sample data');
  }
} catch (error) {
  console.warn('Firebase Admin initialization failed:', error.message);
  console.warn('Running in mock mode with sample data');
  isFirebaseEnabled = false;
}

export const db = isFirebaseEnabled && firebaseApp ? admin.firestore() : null;
export const auth = isFirebaseEnabled && firebaseApp ? admin.auth() : null;

export default admin;
