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
    <div className="flex h-screen w-screen bg-black justify-center items-center">
      {/* Blue circular spinner with a moving line effect */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  );
};

const App = () => {

  const [isLoading, setisLoading] = useState(true);
  const [isLoadcircle, setCirle] = useState(false);

  useEffect(() => {
    const loadingtimer = setTimeout(() => {
      setisLoading(false);
      setCirle(true);

      const circletimer = setTimeout(() => {
        setCirle(false);
      }, 1000);

      return () => clearTimeout(circletimer);
    }, 3000);

    return () => clearTimeout(loadingtimer);
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setCirle(false);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isLoadcircle) {
    return <Loadcircle />;
  }
  return (
    <div className="flex h-screen w-screen bg-black">
      <div className="flex w-[60%] h-screen justify-center items-center">
          <img src="/images/x_logo.png" alt="x_logo" className="w-[400px], h-[400px]" />
      </div>
      <div className="flex w-[40%] h-screen" >
        <h1 className="text-white">hello</h1>
      </div>
    </div>
  );
};

export default App;