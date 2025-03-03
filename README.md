# User Registration System

A full-stack user registration system built with React, Node.js, Express, and MongoDB.

## Live Demo 🌐  
- *Frontend (Vercel)*: [Click here](https://user-registration-hx21mclrs-raghavendralcs-projects.vercel.app/)
- *Backend (Render)*: [Click here](https://user-registration-backend-bu89.onrender.com)

## Backend Repository  
You can find the backend code [here](https://github.com/Raghavendralc/user-registration-backend).


![image](https://github.com/user-attachments/assets/c19011b2-d2f3-4e27-9247-76ae123eeaeb)


## API Requests and Responses

### 1. Get All Users (`GET /api/users`)
Example API request and response:
![Screenshot 2025-03-03 100240](https://github.com/user-attachments/assets/b3076f20-1a72-4dcc-8dc2-63967366f6e5)


### 2. Create a New User (`POST /api/users`)
Example API request and response:
![Screenshot 2025-03-03 100209](https://github.com/user-attachments/assets/688a492c-1be1-46e3-b800-8eb86e520606)


### 3. Update a Existing User (`PUT /api/users`)
Example API request and response:
![Screenshot 2025-03-03 100308](https://github.com/user-attachments/assets/605e771a-416f-4511-ae81-9170b16d390b)


### 3. DELETE a Existing User (`DELETE /api/users`)
Example API request and response:
![Screenshot 2025-03-03 100338](https://github.com/user-attachments/assets/14ebac69-0c75-433c-8269-c859c959cecb)



## Features

- User registration with form validation
- Password requirements (10+ characters, alphanumeric)
- Dynamic gender options from API
- UTC timestamp tracking
- User login tracking
- MongoDB database integration
- RESTful API endpoints

## Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB
- Styling: CSS3

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/user-registration.git
cd user-registration
```

2. Install dependencies:
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
```

3. Create a .env file in the root directory:
```env
PORT=5000
MONGODB_URI="mongodb url"/user-registration
```

4. Start the development servers:
```bash
# Start both frontend and backend
npm run dev
```

## API Endpoints

- `GET /api/genders` - Get available gender options
- `POST /api/users` - Create new user
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Project Structure

```
user-registration/
├── client/                 # Frontend directory
│   ├── public/            # Public assets
│   ├── src/               # Source files
│   │   ├── components/    # React components
│   │   ├── UserRegistrationForm.jsx       # Main App component
│   │   └── main.jsx      # Entry point
│   ├── package.json      # Frontend dependencies
│   └── vite.config.js    # Vite configuration
├── server/                # Backend directory
│   ├── controllers/      # Route controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   └── server.js        # Server entry point
├── package.json         # Backend dependencies
└── README.md           # Project documentation
```
## Deployment

The application can be deployed using platforms like:
- Frontend: Vercel, Netlify
- Backend: Render, Railway
- Database: MongoDB Atlas

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Raghavendralc
