import { useState } from 'react';
import UserRegistrationForm from './components/UserRegistrationForm';
import UserList from './components/UserList';
import EditUserForm from './components/EditUserForm';
import DeleteUser from './components/DeleteUser';
import './App.css';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [currentPage, setCurrentPage] = useState('list'); // 'list' or 'register'

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleUpdate = () => {
    setRefresh(!refresh);
    setSelectedUser(null);
  };

  const handleDelete = () => {
    setRefresh(!refresh);
    setSelectedUser(null);
  };

  return (
    <div className="App">
      <nav className="app-nav">
        <button 
          className={currentPage === 'list' ? 'active' : ''} 
          onClick={() => setCurrentPage('list')}
        >
          View Users
        </button>
        <button 
          className={currentPage === 'register' ? 'active' : ''} 
          onClick={() => setCurrentPage('register')}
        >
          Register New User
        </button>
      </nav>

      <div className="app-content">
        {currentPage === 'register' && (
          <UserRegistrationForm onSuccess={() => setCurrentPage('list')} />
        )}
        
        {currentPage === 'list' && (
          <>
            <UserList key={refresh} onSelect={handleUserSelect} />
            {selectedUser && (
              <div className="edit-section">
                <EditUserForm userId={selectedUser._id} onUpdate={handleUpdate} />
                <DeleteUser userId={selectedUser._id} onDelete={handleDelete} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;