import React from "react";
export default function ProductComponent() {
  return (
    <div className="relative flex flex-col items-center rounded-[10px] border-[1px] border-black w-[350px] h-[60vh] mx-auto bg-white bg-clip-border shadow-md shadow-[#F3F3F3]">
      <div className="relative flex h-full w-full justify-center rounded-xl bg-cover">
        <img
          src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
          className="absolute flex h-full w-full justify-center rounded-xl bg-cover"
        />
      </div>
    </div>
  );
}