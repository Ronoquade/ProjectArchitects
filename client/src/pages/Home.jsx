import { useState, useEffect } from 'react';
import Header from '../components/Header';
import UserList from '../components/UserList';
import { useAuth } from '../contexts/AuthContext';
import { healthCheck } from '../services/api';
import './Home.css';

function Home() {
  const { user, logout } = useAuth();
  const [serverStatus, setServerStatus] = useState('checking...');

  const checkServerHealth = async () => {
    try {
      const response = await healthCheck();
      setServerStatus(response.status === 'ok' ? '✓ Connected' : '✗ Error');
    } catch {
      setServerStatus('✗ Disconnected');
    }
  };

  useEffect(() => {
    // Check server health on component mount
    // eslint-disable-next-line react-hooks/set-state-in-effect
    checkServerHealth();
  }, []);

  return (
    <div className="home">
      <Header user={user} onLogout={logout} />
      
      <main className="main-content">
        <section className="hero">
          <h2>Welcome to Project Architects</h2>
          <p className="subtitle">A modern web application for small tech teams</p>
          <div className="status-badge">
            Server Status: <span className={serverStatus.includes('✓') ? 'status-ok' : 'status-error'}>
              {serverStatus}
            </span>
          </div>
        </section>

        <section className="features">
          <div className="feature-card">
            <div className="feature-icon">⚛️</div>
            <h3>React Frontend</h3>
            <p>Built with React 19 and Vite for fast development</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Express Backend</h3>
            <p>RESTful API powered by Node.js and Express</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔥</div>
            <h3>Firebase Integration</h3>
            <p>Authentication and Firestore database ready</p>
          </div>
        </section>

        <UserList />
      </main>
    </div>
  );
}

export default Home;
