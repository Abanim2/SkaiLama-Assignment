import React, { useState } from "react";

export const Input = ({ className, label, placeholder, type="text", onChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("")

  const handleChange = (event) => {

    setInputValue(event.target.value);
    if(event.target.value === ""){
        setError("Input cannot be empty")
    } else {
        setError("")
    }
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={` ${className} flex flex-col`}>
      {label && <label className="text-gray-600 text-md">{label}</label>}
      <input
        value={inputValue}
        className="w-[90%] pl-4 border border-gray-400 mt-2  rounded rounded-r-lg rounded-l-lg p-1 py-2"
        placeholder={placeholder}
        type="text"
        onChange={handleChange}
      />
      {error && <div className="text-red-500"> {error} </div>}
    </div>
  );
};
