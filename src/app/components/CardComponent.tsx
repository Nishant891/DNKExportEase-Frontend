import React from "react";
export default function CardComponent() {
  return (
    <div className="relative flex flex-col items-center rounded-[10px] border-[1px] border-black w-[350px] h-[60vh] mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3]">
      <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
        <img
          src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
          className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
        />
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-yellow-400 ">
          <img className="h-full w-full rounded-full" src="" alt="" />
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 ">Adela Parkson</h4>
        <p className="text-base font-normal text-gray-600">Id: 764537662</p>
      </div>
      <div className="mt-2 mb-1 w-full flex flex-col justify-center items-center text-base font-normal text-gray-600">
        <div>
          <p>Deals In:</p>
        </div>
        <div>
          <p>Leather Goods</p>
        </div>
      </div>
      <div className="mt-2 mb-1 w-full flex flex-row justify-evenly items-center font-normal">
        <div>
          <button className="text-white flex flex-row justify-evenly items-center bg-green-600 w-[16vh] h-[7vh] active:opacity-80 text-lg rounded-lg border border-black">
            CHAT
          </button>
        </div>
        <div>
          <button className="flex flex-row justify-evenly items-center bg-blue-400 w-[16vh] h-[7vh] active:opacity-80 text-white text-lg rounded-lg border border-black">
            PROFILE
          </button>
        </div>
      </div>
    </div>
  );
}
