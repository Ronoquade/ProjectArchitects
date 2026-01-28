import express from 'express';
import { db } from '../config/firebase.js';

const router = express.Router();

/**
 * GET /api/users - Get all users
 */
router.get('/', async (req, res) => {
  try {
    if (!db) {
      return res.json({
        message: 'Firebase not configured. Using mock data.',
        users: [
          { id: '1', name: 'Demo User', email: 'demo@example.com' }
        ]
      });
    }

    const usersRef = db.collection('users');
    const snapshot = await usersRef.get();
    
    const users = [];
    snapshot.forEach(doc => {
      users.push({ id: doc.id, ...doc.data() });
    });
    
    res.json({ users });
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

/**
 * GET /api/users/:id - Get a specific user
 */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!db) {
      return res.json({
        message: 'Firebase not configured. Using mock data.',
        user: { id, name: 'Demo User', email: 'demo@example.com' }
      });
    }

    const userDoc = await db.collection('users').doc(id).get();
    
    if (!userDoc.exists) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({ user: { id: userDoc.id, ...userDoc.data() } });
  } catch (error) {
    console.error('Error getting user:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

/**
 * POST /api/users - Create a new user
 */
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    
    if (!db) {
      return res.json({
        message: 'Firebase not configured. Mock user created.',
        user: { id: 'mock-' + Date.now(), name, email }
      });
    }

    const userRef = await db.collection('users').add({
      name,
      email,
      createdAt: new Date().toISOString()
    });
    
    res.status(201).json({ 
      user: { id: userRef.id, name, email } 
    });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

export default router;
