"use client";
import React, { useState } from "react";
import MultiStepForm from "../components/MultiStepForm";
import User from "../components/User";

const signup = () => {

  const [user, setUser] = useState<User>({
    username : "",
    email : "",
    password : "",
    confirmPassword: "",
    country : "",
    state : "",
    district : "",
    IEC : "",
    GST : ""
  }); 

  const [step, setStep] = useState(1);

  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
      <form className="h-5/6 w-1/3 flex flex-col justify-between items-center border border-slate-400 rounded-lg ">
        <div className="w-full h-1/4 flex flex-col justify-evenly items-center">
          <button className="rounded-full h-10 w-10 bg-purple-400 flex items-center justify-center">
            <img
              className="h-7 w-7 pl-1"
              src="Images/register.svg"
              alt="Register"
            />
          </button>
          <h1 className="text-2xl text-slate-600 text-center">SIGN UP</h1>
          <p className="text-xl text-slate-600 text-center">{`Step ${step} of 3`}</p>
        </div>
        <MultiStepForm user={user} setUser={setUser} step={step} setStep={setStep}/>
        <div className="w-full flex justify-center text-center items-center mb-2 text-slate-600 underline text-sm hover:cursor-pointer hover:text-[#447fed]">
          <p>Already have an account? Login</p>
        </div>
      </form>
    </div>
  );
};

export default signup;
