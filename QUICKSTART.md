# Quick Start Guide

This guide will help you get Project Architects up and running in minutes.

## Prerequisites

- Node.js v18 or higher
- npm (comes with Node.js)

## Installation

```bash
# 1. Clone the repository
git clone <repository-url>
cd ProjectArichtects

# 2. Install all dependencies
npm run install:all
```

## Running the Application

### Development Mode (Recommended)

Run both frontend and backend together:

```bash
npm run dev
```

This starts:
- Frontend at http://localhost:5173
- Backend at http://localhost:5000

### Alternative: Run Separately

```bash
# Terminal 1 - Backend
npm run dev:server

# Terminal 2 - Frontend
npm run dev:client
```

## What You Can Do

### Without Firebase Setup (Mock Mode)

The app works immediately without any Firebase configuration:

- ✅ View the beautiful UI
- ✅ See demo team members
- ✅ Add new members (mock mode)
- ✅ Test all API endpoints
- ✅ Explore the codebase

### With Firebase Setup (Full Features)

To enable authentication and persistent database:

1. Create a Firebase project at https://console.firebase.google.com/
2. Enable Authentication and Firestore
3. Copy environment variables from `.env.example` files
4. Create `.env` files and add your Firebase credentials

See the main README.md for detailed Firebase setup instructions.

## Project Structure at a Glance

```
ProjectArichtects/
├── client/           # React frontend (Vite + React)
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page-level components
│   │   ├── services/     # API communication
│   │   └── contexts/     # React contexts (Auth, etc.)
│   └── package.json
│
├── server/           # Express backend (Node.js)
│   ├── src/
│   │   ├── routes/       # API endpoints
│   │   ├── middleware/   # Auth, etc.
│   │   └── config/       # Firebase setup
│   └── package.json
│
└── package.json      # Root scripts
```

## Common Commands

```bash
# Development
npm run dev              # Run both client and server
npm run dev:client       # Run only frontend
npm run dev:server       # Run only backend

# Building
npm run build           # Build both client and server
npm run build:client    # Build only frontend
npm run build:server    # Build only backend (no-op for Node.js)

# Production
npm start               # Start production server

# Dependencies
npm run install:all     # Install all dependencies
```

## Testing Your Setup

1. Open http://localhost:5173
2. You should see:
   - "Project Architects" header
   - "Server Status: ✓ Connected" (green)
   - Three feature cards
   - Team Members section with Demo User
   - Add New Member form

3. Try adding a member:
   - Fill in Name and Email
   - Click "Add Member"
   - Form clears (mock mode confirmation)

## Next Steps

1. **Explore the Code**: Check out the components and API routes
2. **Customize the UI**: Edit styles in `.css` files
3. **Add Features**: Create new components and routes
4. **Set Up Firebase**: Enable full authentication and database
5. **Deploy**: Build and deploy to your hosting platform

## Need Help?

- 📖 Check the main README.md for detailed documentation
- 🔥 Firebase setup guide in README.md
- 🐛 Open an issue if you encounter problems
- 💬 Review the code comments for implementation details

## API Endpoints

Once running, your API will be available at http://localhost:5000:

- `GET /health` - Server health check
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get specific user
- `POST /api/users` - Create new user

Happy coding! 🚀
