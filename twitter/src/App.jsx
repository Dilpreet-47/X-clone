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

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isLoadcircle) {
    return <Loadcircle />;
  }
  return (

    <div className="flex h-screen w-screen bg-black box-border">
      {/* left section logo of x */}
      <div className="flex w-[55%] h-screen justify-center items-center">
        <img src="/images/x_logo.png" alt="x_logo" className="w-[400px], h-[400px]" />
      </div>
      {/* right section */}
      <div className="flex flex-col w-[45%] h-screen font-sans text-white">
        {/* upper right section */}
        <div className="flex flex-col h-[35%] gap-14 justify-center items-start">
          <h1 className="text-6xl font-bold ">Happening now</h1>
          <h2 className="font-bold text-4xl ">Join today.</h2>
        </div>
        {/* sign up section */}
        <div className="flex flex-col h-[30%] w-full gap-5">

          <button className="flex justify-center items-center gap-3 bg-white text-black py-3 px-6 w-[45%] transition-colors duration-300 hover:bg-gray-200 rounded-full font-bold ">
            <img src="/images/google_g.png" alt="grok image" className="w-8, h-8" />
            <p>
              Sign up with Google
            </p>
          </button>

          <button className="flex justify-center items-center gap-3 bg-white text-black py-3 px-6 w-[45%] transition-colors duration-300 hover:bg-gray-200 rounded-full font-bold">
            <img src="/images/Apple_logo_black.svg" alt="grok image" className="w-8, h-8" />
            <p>

            Sign up with Apple
            </p>
          </button>

          <div className="flex items-center my-4 w-[43.5%]"> {/* Container for the separator */}

            <div className="flex-grow border-t border-gray-700"></div> {/* Left line */}
            <span className="flex-shrink mx-4 text-gray-400 font-semibold text-sm">OR</span> {/* Text "OR" */}
            <div className="flex-grow border-t border-gray-700"></div> {/* Right line */}

          </div>

          <button className="bg-white text-black py-3 px-6 w-[45%] transition-colors duration-300 hover:bg-gray-200 rounded-full font-bold">
            Create account
          </button>
          <div>
            <h1 className="text-sm">By signing up, you agree to the Terms of Service<br /> and Privacy Policy, including Cookie Use.</h1>
          </div>
        </div>
        {/* right lower section */}
        <div className="flex flex-col h-[20%] items-start justify-center gap-5">
          <h1 className="text-gray-300 ">Already have an account?</h1>
          <button className="bg-black text-white border py-3 px-6 w-[45%] transition-colors duration-300 hover:bg-gray-900 rounded-full font-bold">
            Sign in
          </button>
          <button className="flex gap-3 justify-center items-center bg-black text-white border py-3 px-6 w-[45%] transition-colors duration-300 hover:bg-gray-900 rounded-full font-bold">
            <img src="/images/grok.png" alt="grok image" className="w-8, h-8" />
            <p>Get Grok</p>
          </button>
        </div>
      </div>

    </div>
  );
};

export default App;