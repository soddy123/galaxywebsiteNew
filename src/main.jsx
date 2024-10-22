import React from 'react';  // Import React
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from './component/Hero.jsx';
import Technology from './component/Technology/Technology.jsx';
import AboutUs from './component/AboutUs/AboutUs.jsx';
import Galaxy from './component/Galaxy/Galaxy.jsx';
import SignUp from './component/Signup/Signup.jsx';
import Login from './component/Login/Login.jsx';
import Satellite from './component/Satellite/Satellite.jsx';
import ForgotPassword from './component/ForgotPassword/ForgotPasswprd.jsx'
import { ToastContainer } from 'react-toastify';
// Define the routes
const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />, 
    children: [
      {
        path: '', 
        element: <Hero /> 
      },
      {
        path: 'Technology', 
        element: <Technology /> 
      },
      {
        path: 'AboutUs',  // Ensure it matches Link exactly
        element: <AboutUs /> 
      },
      {
        path: 'Galaxy', 
        element: <Galaxy /> 
      },
      {
        path: 'Signup', 
        element: <SignUp /> 
      },
      {
        path: 'Login', 
        element: <Login /> 
      },
      {
        path: 'Satellite', 
        element: <Satellite /> 
      },
      {
        path: 'forgot-password', 
        element: <ForgotPassword /> 
      },


    ]
  }
]);

// Render the app
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
