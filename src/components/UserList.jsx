import { useState, useEffect } from 'react';
import axios from 'axios';
import { getApiBaseUrl } from '../config';
import './UserList.css';

const UserList = ({ onSelect }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${getApiBaseUrl()}/users`);
        setUsers(response.data);
      } catch (error) {
        setError('Failed to fetch users');
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className='user-list'>
      <h2>User-List</h2>
      {error && <div className="error-message">{error}</div>}
      <ul>
        {users.map(user => (
          <li key={user._id} onClick={() => onSelect(user)}>
            {user.name} - {user.age} - {user.gender}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;