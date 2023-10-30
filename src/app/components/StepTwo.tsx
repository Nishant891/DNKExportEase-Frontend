import React from "react";
import User from "./User";

interface StepTwoProps {
  user: User;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setUser : React.Dispatch<React.SetStateAction<User>>;
}

const StepTwo: React.FC<StepTwoProps> = ({user, setUser, step, setStep }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePrevClick = () => {
    setStep(step - 1);
  };

  const handleNextClick = () => {
    setStep(step + 1);
  };

  return (
    <>
      <div className="w-full flex justify-center items-center">
      <input
          id="country"
          placeholder="Country"
          name="country"
          value={user.country}
          onChange={handleInputChange}
          autoComplete="off"
          className="border border-slate-500 rounded-md w-4/5 h-10 p-2 focus:outline-blue-400 placeholder:text-slate-600"
        ></input>
      </div>
      <div className="w-full flex justify-center items-center">
      <input
          id="state"
          placeholder="State"
          name="state"
          value={user.state}
          onChange={handleInputChange}
          autoComplete="off"
          className="border border-slate-500 rounded-md w-4/5 h-10 p-2 focus:outline-blue-400 placeholder:text-slate-600"
        ></input>
      </div>
      <div className="w-full flex justify-center items-center">
      <input
          id="district"
          placeholder="District"
          name="district"
          value={user.district}
          onChange={handleInputChange}
          autoComplete="off"
          className="border border-slate-500 rounded-md w-4/5 h-10 p-2 focus:outline-blue-400 placeholder:text-slate-600"
        ></input>
      </div>
      <div className="w-full flex justify-evenly items-center">
        <div className="w-4/5 flex justify-between items-center">
          <button
            onClick={handlePrevClick}
            type="submit"
            className="h-10 bg-[#3bb07d] text-white text-center w-2/5 rounded-md disabled:opacity-50 disabled:pointer-events-none"
          >
            PREV
          </button>
          <button
            onClick={handleNextClick}
            type="submit"
            className="h-10 bg-[#3bb07d] text-white text-center w-2/5 rounded-md disabled:opacity-50 disabled:pointer-events-none"
          >
            NEXT
          </button>
        </div>
      </div>
    </>
  );
};

export default StepTwo;
