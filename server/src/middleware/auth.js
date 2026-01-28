import { auth } from '../config/firebase.js';

/**
 * Middleware to verify Firebase ID token
 */
export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split('Bearer ')[1];
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    if (!auth) {
      // If Firebase is not initialized, skip authentication for development
      console.warn('Firebase not initialized, skipping authentication');
      req.user = { uid: 'dev-user' };
      return next();
    }

    const decodedToken = await auth.verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
};
