// src/App.jsx

import React, { useState, useEffect } from "react";
// Assuming you will create a LoginPage component soon
// import LoginPage from './components/LoginPage';

// This is your current loading screen component (can be a sub-component or inline)
const LoadingScreen = () => {
  return (
    <div className="flex h-screen w-screen bg-black justify-center items-center">
      {/* Your X logo from the public folder */}
      <img src="/images/x_logo.png" alt="x_logo" className="w-24 h-24 animate-pulse" />
    </div>
  ); 
};

const App1 = () => {
  // State to control whether the loading screen is visible
  const [isLoading, setIsLoading] = useState(true);
  // State to determine if the user is authenticated (for later)
  const [isAuthenticated, setIsAuthenticated] = useState(false); // You'll manage this with Firebase later

  // Use useEffect to run a timer when the component first mounts
  useEffect(() => {
    // Set a timeout to change isLoading to false after 3 seconds (3000 milliseconds)
    const timer = setTimeout(() => {
      setIsLoading(false); // After 3 seconds, hide the loading screen
    }, 3000);

    // Cleanup the timer if the component unmounts before the timer finishes
    return () => clearTimeout(timer);
  }, []); // The empty dependency array ensures this effect runs only once on mount

  // Conditional rendering based on isLoading state
  if (isLoading) {
    return <LoadingScreen />;
  }

  // Once isLoading is false, you can then add logic for authentication
  if (!isAuthenticated) {
    // Render your LoginPage component here
    return (
      <div className="flex h-screen w-screen bg-gray-900 justify-center items-center">
        <h1 className="text-white text-3xl">This will be your Login Page</h1>
        {/* Replace the above h1 with your actual LoginPage component */}
        {/* <LoginPage onLoginSuccess={() => setIsAuthenticated(true)} /> */}
      </div>
    );
  }

  // If authenticated, render your HomePage (to be built later)
  return (
    <div className="flex h-screen w-screen bg-gray-800 justify-center items-center">
      <h1 className="text-white text-3xl">Welcome to your X Home Page!</h1>
    </div>
  );
};

export default App1;