# Full Stack Application

This project is a full-stack application with a React frontend and an Express backend. It allows users to sign up with their name, email, and resume. The application includes file upload functionality with Multer and utilizes CORS for cross-origin requests. It also demonstrates the use of `react-router-dom` for routing in the frontend and `express.Router` for routing in the backend.

## Project Structure

### Backend
```
backend
│
├── src
│   ├── db
│   │   └── db.js
│   ├── middlewares
│   │   └── multerConfig.js
│   ├── routes
│   │   └── signuproutes.js
│   └── server.js
├── uploads
├── .gitignore
├── package-lock.json
└── package.json
```
### Frontend
```
frontend
│
└── src
    ├── components
    │   ├── Signup.jsx
    │   └── ThankYou.jsx
    ├── App.jsx
    └── main.jsx
```
## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2. **Backend Setup:**

    - Navigate to the `backend` directory:

      ```bash
      cd backend
      ```

    - Install the backend dependencies:

      ```bash
      npm install
      ```

    - Start the backend server:

      ```bash
      npm start
      ```

3. **Frontend Setup:**

    - Navigate to the `frontend` directory:

      ```bash
      cd frontend
      ```

    - Install the frontend dependencies:

      ```bash
      npm install
      ```

    - Build the Tailwind CSS styles:

      ```bash
      npx tailwindcss -o ./src/index.css
      ```

    - Start the frontend development server:

      ```bash
      npm run dev
      ```

## Using `react-router-dom` in the Frontend

The frontend uses `react-router-dom` for routing. Here's a basic setup:

1. **Install `react-router-dom`:**

    ```bash
    npm install react-router-dom
    ```

2. **Add routing in `src/App.jsx`:**

    ```jsx
    import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Signup from './components/Signup';
    import ThankYou from './components/ThankYou';

    const App = () => {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Signup />} />
                    <Route path="/thank-you" element={<ThankYou />} />
                </Routes>
            </Router>
        );
    };

    export default App;
    ```

## Using `axios` for HTTP Requests

The frontend uses `axios` for making HTTP requests. Here's an example:

1. **Install `axios`:**

    ```bash
    npm install axios
    ```

2. **Example usage in `src/components/Signup.jsx`:**

    ```jsx
    import React, { useState } from 'react';
    import axios from 'axios';

    const Signup = () => {
        // ...state definitions

        const handleSubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('resume', resume);

            try {
                const response = await axios.post('http://localhost:5000/signup', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                setMessage(response.data.message);
                // Redirect to thank you page
                window.location.href = '/thank-you';
            } catch (error) {
                // Handle errors
            }
        };

        // ...return JSX
    };

    export default Signup;
    ```

## Using `express.Router` in the Backend

The backend uses `express.Router` for routing:

1. **Example routing setup in `src/routes/signuproutes.js`:**

    ```js
    const express = require('express');
    const router = express.Router();
    const multer = require('multer');
    const { signup } = require('../controllers/signupController');
    const multerConfig = require('../middlewares/multerConfig');

    router.post('/signup', multerConfig.single('resume'), signup);

    module.exports = router;
    ```

2. **Use the router in `src/server.js`:**

    ```js
    const express = require('express');
    const cors = require('cors');
    const app = express();
    const signupRoutes = require('./routes/signuproutes');

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/api', signupRoutes);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
    ```

## Styling with Tailwind CSS

1. **Install Tailwind CSS and its dependencies:**

    ```bash
    npm install tailwindcss postcss autoprefixer
    npx tailwindcss init
    ```

2. **Configure Tailwind in `tailwind.config.js`:**

    ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

3. **Add Tailwind directives to your `src/index.css`:**

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## Deployment

### Deploying the Backend on Render

1. **Create a Render account** and log in to your dashboard.
2. **Create a new Web Service** on Render.
3. **Connect your GitHub repository**.
4. **Select the branch** where your backend code is located.
5. **Specify the build and start commands**:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. **Set environment variables** for your backend, if any.
7. **Deploy** your service.

### Deploying the Frontend on Vercel

1. **Create a Vercel account** and log in to your dashboard.
2. **Import your project** from GitHub.
3. **Configure your project settings**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. **Deploy** your project.
