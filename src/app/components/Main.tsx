function Main() {
    const myStyles = {
      height: "80vh",
    };
    return (
      <div className="w-full relative bg-[#E5D4CC]" style={myStyles}>
        <div className="w-full h-full flex justify-center z-10 absolute inset-0 text-white">
            <div className="h-full w-2/5 flex justify-center items-center">
              <div className="w-4/5 flex flex-col justify-center items-center">
              <p className="text-6xl text-white">Explore the Varieties!</p>
              <p className="text-xl text-white ml-1">Shop Authentic products from Artisians and Craftsmans of India.</p>
              </div>
            </div>
            <div className="h-full w-3/5 flex justify-center items-center">
            <img
              className="absolute h-[5/6] w-1/2 object-contain"
              src="Images/bg.jpg"
              alt="Register"
            />
            </div>
        </div>
      </div>
    );
  }
  
  export default Main;