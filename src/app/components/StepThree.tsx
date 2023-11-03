import React from "react";
import { useRouter } from "next/navigation";
import User from "./User";
import Axios from "axios";
import { v4 as uuidv4 } from 'uuid';

interface StepThreeProps {
  user: User;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const StepThree: React.FC<StepThreeProps> = ({
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

  const handlePrevClick = () => {
    setStep(step - 1);
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
      <div className="w-4/5 flex justify-center items-center">
        <p className="text-slate-600 text-2xl hover:cursor-pointer">
          Join us as a Seller
        </p>
        <img className="h-7 w-7 pl-2" src="Images/seller.svg" alt="A seller" />
      </div>
      <div className="w-full flex flex-col justify-center items-center text-left">
        <input
          id="IEC"
          placeholder="IEC"
          name="IEC"
          value={user.IEC}
          onChange={handleInputChange}
          autoComplete="off"
          className="border border-slate-500 rounded-md w-4/5 h-10 p-2 focus:outline-blue-400 placeholder:text-slate-600"
        ></input>
        <div className="w-4/5 flex justify-start py-4 px-2">
          <p className="text-slate-600 text-md hover:cursor-pointer hover:text-[#447fed]">
            What is IEC (Import Export Code)?
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center text-left">
        <input
          id="GST"
          placeholder="GST No."
          name="GST"
          value={user.GST}
          onChange={handleInputChange}
          autoComplete="off"
          className="border border-slate-500 rounded-md w-4/5 h-10 p-2 focus:outline-blue-400 placeholder:text-slate-600"
        ></input>
        <div className="w-4/5 flex justify-start py-4 px-2">
          <p className="text-slate-600 text-md hover:cursor-pointer hover:text-[#447fed]">
            How do I get my GST No.?
          </p>
        </div>
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
            onClick={handleSubmit}
            className="h-10 bg-[#447fed] text-white text-center w-2/5 rounded-md disabled:opacity-50 disabled:pointer-events-none"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};

export default StepThree;
