import { useEffect, useState } from "react";

const LoadingScreen = () => {
  return (
    <div className="flex h-screen w-screen bg-black justify-center items-center">
      <img src="/images/x_logo.png" alt="x_logo" className="w-24 h-24" />
    </div>
  );
};

const Loadcircle = () => {
  return (
    <div>
      <div></div>
    </div>
  );
};

const App = () => {

  const [isLoading, setisLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
      <div className="flex ">
        <div className="flex h-screen w-screen bg-black justify-center items-center">
            <h1 className="text-white text-3xl">Welcome to out twitter</h1>
        </div>
      </div>
    );
};

export default App;