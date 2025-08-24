import React, { useEffect, useState } from "react";

const LoadingScreen = () => {
  return (
    <div className="flex h-screen w-screen bg-black justify-center items-center">
      <img src="/images/x_logo.png" alt="x_logo" className="w-24 h-24 animate-pulse" />
    </div>
  );
};

const Loadcircle = () => {
  return (
    <div className="flex h-screen w-screen bg-black justify-center items-center">
      {/* Blue circular spinner with a moving line effect */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  );
};

const App = () => {
  const [isLoadingXLogo, setIsLoadingXLogo] = useState(true); // Renamed for clarity
  const [showCircularLoader, setShowCircularLoader] = useState(false); // Renamed for clarity

  // This useEffect will manage both timers sequentially
  useEffect(() => {
    // Timer for the initial X logo splash screen (3 seconds)
    const xLogoTimer = setTimeout(() => {
      setIsLoadingXLogo(false);     // Hide X logo
      setShowCircularLoader(true);  // Show circular loader

      // Timer for the circular loading spinner (1 second)
      const circularLoaderTimer = setTimeout(() => {
        setShowCircularLoader(false); // Hide circular loader
        // At this point, you'd then transition to your LoginPage component
      }, 1000); // 1000 milliseconds = 1 second

      // Cleanup for the circular loader timer
      return () => clearTimeout(circularLoaderTimer);
    }, 3000); // 3000 milliseconds = 3 seconds

    // Cleanup for the X logo timer
    return () => clearTimeout(xLogoTimer);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // --- Conditional Rendering Logic ---
  if (isLoadingXLogo) {
    return <LoadingScreen />; 
  }

  if (showCircularLoader) {
    return <Loadcircle />;
  }

  // Once both loading phases are complete, show the main content (your login page)
  return (
    <div className="flex h-screen w-screen bg-black">
      <div>
          <img src="/images/x_logo_png" alt="x_logo" />
      </div>
      <div>

      </div>
    </div>
  );
};

export default App;