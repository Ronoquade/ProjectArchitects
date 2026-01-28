import { useState, useEffect } from 'react';
import { userService } from '../services/api';
import './UserList.css';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await userService.getAll();
      setUsers(data.users || []);
      setError(null);
    } catch (err) {
      setError('Failed to fetch users: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!newUser.name || !newUser.email) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await userService.create(newUser);
      setNewUser({ name: '', email: '' });
      fetchUsers();
    } catch (err) {
      setError('Failed to create user: ' + err.message);
    }
  };

  if (loading) return <div className="loading">Loading users...</div>;

  return (
    <div className="user-list">
      <h2>Team Members</h2>
      
      {error && <div className="error">{error}</div>}

      <form onSubmit={handleSubmit} className="user-form">
        <h3>Add New Member</h3>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="input"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="input"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Member
        </button>
      </form>

      <div className="users-grid">
        {users.length === 0 ? (
          <p className="no-users">No team members yet. Add one above!</p>
        ) : (
          users.map((user) => (
            <div key={user.id} className="user-card">
              <div className="user-avatar">
                {user.name ? user.name.charAt(0).toUpperCase() : '?'}
              </div>
              <div className="user-info">
                <h4>{user.name}</h4>
                <p>{user.email}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default UserList;
