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

    if (!db) {
      // If Firebase is not initialized, skip authentication for development only
      if (process.env.NODE_ENV === 'production') {
        return res.status(503).json({ error: 'Authentication service unavailable' });
      }
      console.warn('Firebase not initialized, skipping authentication (development only)');
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
