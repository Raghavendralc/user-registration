const API_BASE_URL = {
  development: 'http://localhost:5000/api',
  production: 'https://user-registration-backend-bu89.onrender.com/api'
};

export const getApiBaseUrl = () => {
  return process.env.NODE_ENV === 'production' ? API_BASE_URL.production : API_BASE_URL.development;
};
