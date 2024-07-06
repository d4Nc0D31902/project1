import React from "react";
import FormStepper from "../../components/Stepper/FormStepper";
import { GoChevronLeft } from "react-icons/go";

const Settings = () => {
  return (
    <div className="flex-1 bg-white">
      <div className="flex flex-row items-center justify-between p-4 border-b border-neutral-900">
        <div className="flex flex-row items-center gap-1">
          <GoChevronLeft size={38}/>
          <p className="text-3xl">Create</p>
        </div>

        <div>
          <FormStepper />
        </div>

        <div className="flex items-center bg-neutral-400 px-10 py-2 rounded-full">
          <p className="">Next</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
