# ProjectArichtects

A modern web application designed for small tech teams, built with React, Express, Node.js, and Firebase.

## 🚀 Tech Stack

- **Frontend**: React 19 + Vite
- **Backend**: Express + Node.js
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Styling**: CSS3 with custom styles

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase account (optional for development)

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone <repository-url>
cd ProjectArichtects
```

### 2. Install dependencies

```bash
# Install all dependencies (root, client, and server)
npm run install:all
```

Or install individually:

```bash
# Root dependencies
npm install

# Client dependencies
cd client && npm install

# Server dependencies
cd ../server && npm install
```

### 3. Configure Environment Variables

#### Server Configuration

```bash
cd server
cp .env.example .env
```

Edit `server/.env` with your Firebase credentials (optional for development):

```env
PORT=5000
NODE_ENV=development
FIREBASE_PROJECT_ID=your-project-id
```

#### Client Configuration

```bash
cd client
cp .env.example .env
```

Edit `client/.env` with your Firebase and API configuration:

```env
VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

### 4. Firebase Setup (Optional)

The application works without Firebase in development mode with mock data. To enable full Firebase features:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication and Firestore Database
3. Download service account key for backend (Settings > Service Accounts)
4. Copy web app configuration for frontend (Project Settings > General)
5. Update environment variables with your Firebase credentials

## 🎯 Running the Application

### Development Mode

Run both client and server concurrently:

```bash
npm run dev
```

Or run separately:

```bash
# Terminal 1 - Run server
npm run dev:server

# Terminal 2 - Run client
npm run dev:client
```

The application will be available at:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/health

### Production Build

```bash
# Build both client and server
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
ProjectArichtects/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── contexts/      # React contexts (Auth, etc.)
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── config/        # Configuration files
│   │   ├── App.jsx        # Main App component
│   │   └── main.jsx       # Entry point
│   ├── public/            # Static assets
│   └── package.json
├── server/                # Express backend
│   ├── src/
│   │   ├── config/       # Server configuration
│   │   ├── middleware/   # Express middleware
│   │   ├── routes/       # API routes
│   │   └── index.js      # Server entry point
│   └── package.json
├── package.json           # Root package.json
└── README.md
```

## 🔌 API Endpoints

### Health Check
- `GET /health` - Server health check

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user

## 🎨 Features

- **Modern UI**: Clean and responsive design
- **Authentication Ready**: Firebase Auth integration
- **Real-time Database**: Firestore integration for data persistence
- **RESTful API**: Express backend with organized routes
- **Development Mode**: Works without Firebase using mock data
- **Hot Reload**: Fast development with Vite HMR

## 🔒 Security

- Firebase Admin SDK for secure backend operations
- Token-based authentication middleware
- Environment variables for sensitive data
- CORS configuration

## 🧪 Development

The application is configured for easy development:

- **Hot Module Replacement** on the frontend (Vite)
- **Auto-restart** on backend changes (Nodemon)
- **Mock data** support for offline development
- **Environment-based** configuration

## 📝 Environment Variables

### Server (.env)
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment mode
- `FIREBASE_PROJECT_ID` - Firebase project ID
- `FIREBASE_SERVICE_ACCOUNT` - Firebase service account JSON

### Client (.env)
- `VITE_API_URL` - Backend API URL
- `VITE_FIREBASE_*` - Firebase configuration values

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

ISC

## 🆘 Troubleshooting

### Port already in use
If port 5000 or 5173 is already in use, update the PORT in `.env` files.

### Firebase initialization error
The app will work in development mode without Firebase. Check your Firebase credentials if you need full Firebase features.

### Dependencies installation failed
Try removing `node_modules` and `package-lock.json`, then run `npm run install:all` again.

