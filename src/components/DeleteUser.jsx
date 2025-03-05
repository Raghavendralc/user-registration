import axios from 'axios';
import { getApiBaseUrl } from '../config';
import './DeleteUser.css';

const DeleteUser = ({ userId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`${getApiBaseUrl()}/users/${userId}`);
      onDelete();
    } catch (error) {
      console.error('Failed to delete user', error);
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteUser;