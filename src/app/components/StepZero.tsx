import React, { useState } from "react";
import User from "./User";
import MultiStepForm from "./MultiStepForm";

interface StepZeroProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const StepZero: React.FC<StepZeroProps> = ({ user, setUser }) => {
  const [isClient, setIsClient] = useState(false);
  const [step, setStep] = useState(0);
  const handleNextClick = () => {
    setStep(step + 1);
  };
  const handleType = (value: string) => {
    setUser((prevData) => ({ ...prevData, type: value }));
    if (value === "client") {
      setIsClient(true);
    }
  };

  return (
    <>
    {step > 0 ? (<MultiStepForm user={user} setUser={setUser} step={step} setStep={setStep} isClient={isClient}/>) : <div className="w-full h-5/6 flex flex-row justify-evenly items-center">
        <div
          onClick={() => {
            handleNextClick();
            handleType("client");
          }}
          className="w-5/12 h-3/4 flex flex-col justify-evenly items-center border border-slate-400 rounded-lg cursor-pointer"
        >
          <p className="text-xl text-slate-600 text-center">Join as Client</p>
          <img
            className="w-full h-4/6 rounded-lg"
            src="Images/client.jpg"
            alt="A Client"
          />
        </div>
        <div
          onClick={() => {
            handleNextClick();
            handleType("seller");
          }}
          className="w-5/12 h-3/4 flex flex-col justify-evenly items-center border border-slate-400 rounded-lg cursor-pointer"
        >
          <p className="text-xl text-slate-600 text-center">Become a Seller</p>
          <img
            className="w-full h-4/6 rounded-lg"
            src="Images/seller.jpg"
            alt="A Seller"
          />
        </div>
      </div>}
    </>
  );
};

export default StepZero;
