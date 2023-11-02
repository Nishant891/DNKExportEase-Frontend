import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import User from "./User";


interface MultiStepFormProps {
    user: User;
    setUser : React.Dispatch<React.SetStateAction<User>>;
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    isClient : boolean;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ user, setUser, step, setStep, isClient })=> {
  return (
    isClient ? null : (<>{step === 1 ? (<StepOne user={user} setUser={setUser} step={step} setStep={setStep}/>) : null}
      {step === 2 ? (<StepTwo user={user} setUser={setUser} step={step} setStep={setStep}/>) : null}
      {step === 3 ? (<StepThree user={user} setUser={setUser} step={step} setStep={setStep}/>) : null}</>)
  );
};

export default MultiStepForm;
