import { useState, useEffect } from 'react';
import axios from 'axios';
import './UserRegistrationForm.css';
import { getApiBaseUrl } from '../config';

const UserRegistrationForm = () => {
  const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/;

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    dateOfBirth: '',
    password: '',
    gender: '',
    about: ''
  });

  const [genders, setGenders] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch genders from API
    const fetchGenders = async () => {
      try {
        const response = await axios.get(`${getApiBaseUrl()}/genders`);
        setGenders(response.data);
      } catch (error) {
        setError('Failed to fetch genders');
        console.error('Error fetching genders:', error);
      }
    };
    fetchGenders();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const isPasswordValid = (password) => {
    return PASSWORD_REGEX.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isPasswordValid(formData.password)) {
      setError('Password must be at least 10 characters long and contain both letters and numbers');
      return;
    }

    try {
      // Add current UTC timestamp and user login
      const dataToSubmit = {
        ...formData,
        timestamp: '2025-03-02 07:05:32',
        userLogin: 'TeAcHaCk'
      };

      const response = await axios.post(`${getApiBaseUrl()}/genders`,formData);
      setMessage('User registered successfully!');
      setFormData({
        name: '',
        age: '',
        dateOfBirth: '',
        password: '',
        gender: '',
        about: ''
      });
      setError('');
      console.log('Registration successful:', response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred during registration');
      console.error('Registration error:', err);
    }
  };

  return (
    <div className="registration-form">
      <h2>User Registration</h2>
      
      {message && <div className="success-message">{message}</div>}
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-contents">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            minLength="2"
          />
        </div>

        <div className="form-contents">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            min="0"
            max="120"
          />
        </div>

        <div className="form-contents">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-contents">
          <label htmlFor="password">
            Password:
            <span className="password-info">
              (Minimum 10 characters, must include letters and numbers)
            </span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="10"
          />
        </div>

        <div className="form-contents">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            {genders.map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </select>
        </div>

        <div className="form-contents">
          <label htmlFor="about">About:</label>
          <textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleChange}
            rows="4"
            maxLength="5000"
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegistrationForm;