import React from "react";
import User from "./User";
import { useRouter } from "next/navigation";
import Axios from "axios";
import { v4 as uuidv4 } from 'uuid';

interface ClientSignUpProps {
  user: User;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const ClientSignUp: React.FC<ClientSignUpProps> = ({
  user,
  setUser,
  step,
  setStep,
}) => {
  Axios.defaults.withCredentials = true;

  const router = useRouter();

  const id = uuidv4();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(user);
    await new Promise((resolve) => {
      Axios.post("http://localhost:8000/signup", {
        id: id,
        type: user.type,
        username: user.username,
        email: user.email,
        password: user.password,
        country: user.country,
        state: user.state,
        district: user.district,
        IEC: user.IEC,
        GST: user.GST,
      })
      .then((response) => {
        console.log(response);
        router.push("/");
      })
      .catch((error) =>{
        console.log(error);
      });
      setTimeout(resolve, 1000);
    })
  };

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <input
          id="username"
          placeholder="Username"
          name="username"
          value={user.username}
          onChange={handleInputChange}
          autoComplete="off"
          className="border border-slate-500 rounded-md w-4/5 h-10 p-2 focus:outline-blue-400 placeholder:text-slate-600"
        ></input>
      </div>
      <div className="w-full flex justify-center items-center">
        <input
          id="email"
          placeholder="Email"
          name="email"
          value={user.email}
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
          value={user.password}
          onChange={handleInputChange}
          autoComplete="off"
          className="border border-slate-500 rounded-md w-4/5 h-10 p-2 focus:outline-blue-400 placeholder:text-slate-600"
        ></input>
      </div>
      <div className="w-full flex justify-center items-center">
        <input
          id="confirmPassword"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleInputChange}
          autoComplete="off"
          className="border border-slate-500 rounded-md w-4/5 h-10 p-2 focus:outline-blue-400  placeholder:text-slate-600"
        ></input>
      </div>
      <div className="w-full flex justify-evenly items-center">
        <div className="w-4/5 flex justify-between items-center">
          <button
            onClick={handleSubmit}
            type="submit"
            className="h-10 bg-[#447fed] text-white text-center w-full rounded-md disabled:opacity-50 disabled:pointer-events-none"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};

export default ClientSignUp;
