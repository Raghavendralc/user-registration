const API_BASE_URL = {
    development: 'http://localhost:5000/api',
    production: 'https://user-registration-backend-bu89.onrender.com/api'
  };
  
const getApiBaseUrl = () => {
    return import.meta.env.MODE === 'production' ? API_BASE_URL.production : API_BASE_URL.development;
  };

export default getApiBaseUrl;
