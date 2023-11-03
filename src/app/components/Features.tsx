import CardComponent from "./CardComponent";

function Features() {
  const ShowcaseItems = ({ item }: { item: string }) => {
    return (
      <div className="flex flex-col justify-evenly items-center cursor-pointer ">
        <div className="group w-[35vh] h-[35vh] rounded-2xl border border-black">
          {" "}
          {
            <img
              className="w-full h-full"
              src={`Images/${item}.jpg`}
              alt="Register"
            />
          }{" "}
        </div>
        <div className="mt-3 w-full h-full flex justify-center items-center text-black text-2xl">
          {item}
        </div>
      </div>
    );
  };
  return (
    <div className="w-full h-[200vh] flex justify-center relative">
      <div className="bg-white h-full w-full rounded-3xl absolute -top-12 z-30 border border-black">
        <div className="w-full h-[62vh] flex flex-col justify-evenly">
          <div className="mt-4 mb-2 flex justify-center items-center">
            <p className="text-4xl text-black">OUR PRODUCTS</p>
          </div>
          <div className="w-full h-[46vh] flex flex-row justify-evenly items-center">
            {["Furniture", "Jewelry", "Leather", "Spices"].map(
              (item: string, index: number) => (
                <ShowcaseItems key={item + index} item={item} />
              )
            )}
          </div>
        </div>
        <div className="w-full h-[138vh] flex flex-col justify-evenly rounded-3x py-8">
          <div className=" flex justify-center items-center h-[18vh] w-full">
            <p className="text-4xl text-black">View Sellers</p>
          </div>
          <div className="w-full h-[118vh] flex justify-center items-center overflow-y-scroll">
            <div className="w-11/12 h-[118vh] grid grid-cols-3 gap-y-8 mt-14">
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
              <CardComponent/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
