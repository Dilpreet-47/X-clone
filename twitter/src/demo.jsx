<div className="flex h-screen w-screen bg-black box-border font-sans">

    <div className="flex w-[55%] h-screen justify-center items-center">

        <img src="/images/x_logo.png" alt="x_logo" className="w-[390px] h-[300px]" />
    </div>


    <div className="flex flex-col w-[40%] h-screen justify-center items-center text-white">
        {/* This inner div now correctly applies flex-col and gap-5 to its h1 and h2 children */}
        <div className="flex flex-col gap-5"> {/* Use gap-5 or gap-y-5 for vertical spacing */}
            <h1 className="text-6xl font-bold">Happening now</h1>
            <h2 className="font-bold text-4xl">Join today.</h2>
            <button className="bg-white text-black font-bold py-3 px-6 rounded-full w-full max-w-xs transition-colors duration-200 hover:bg-gray-200">
                Create account
            </button>
        </div>
    </div>
</div>