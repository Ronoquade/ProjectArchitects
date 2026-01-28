import './Header.css';

function Header({ user, onLogout }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">🏗️ Project Architects</h1>
        <nav className="nav">
          {user ? (
            <div className="user-section">
              <span className="user-email">{user.email || 'Guest'}</span>
              <button onClick={onLogout} className="btn btn-secondary">
                Logout
              </button>
            </div>
          ) : (
            <span className="user-email">Not logged in</span>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
