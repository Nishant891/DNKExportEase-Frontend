"use client";
import React, { useState } from "react";
import { CheckUser } from "../components/User";

const login = () => {
  const [checkUser, setCheckUser] = useState<CheckUser>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCheckUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(checkUser);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
      <form className="h-4/6 w-1/3 flex flex-col justify-between items-center border border-slate-400 rounded-lg ">
        <div className="w-full h-1/4 flex flex-col justify-evenly items-center">
          <button className="rounded-full h-10 w-10 bg-purple-400 flex items-center justify-center">
            <img className="h-7 w-7 pr-1" src="Images/login.svg" alt="Login" />
          </button>
          <h1 className="text-2xl text-slate-600 text-center">Login</h1>
        </div>
        <div className="w-full flex justify-center items-center">
          <input
            id="email"
            placeholder="Email"
            name="email"
            value={checkUser.email}
            onChange={handleInputChange}
            autoComplete="off"
            className="border border-slate-500 rounded-md w-4/5 h-10 p-2 focus:outline-blue-400 placeholder:text-slate-600"
          ></input>
        </div>
        <div className="w-full flex justify-center items-center">
          <input
            id="password"
            placeholder="Password"
            name="password"
            value={checkUser.password}
            onChange={handleInputChange}
            autoComplete="off"
            className="border border-slate-500 rounded-md w-4/5 h-10 p-2 focus:outline-blue-400 placeholder:text-slate-600"
          ></input>
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            onClick={handleSubmit}
            type="submit"
            className="h-10 bg-[#3bb07d] text-white text-center w-4/5 rounded-md disabled:opacity-50 disabled:pointer-events-none"
          >
            SUBMIT
          </button>
        </div>
        <div className="w-full flex justify-center text-center items-center mb-2 text-slate-600 underline text-sm hover:cursor-pointer hover:text-[#447fed]">
          <p>Don't have an account? Signup</p>
        </div>
      </form>
    </div>
  );
};

export default login;
