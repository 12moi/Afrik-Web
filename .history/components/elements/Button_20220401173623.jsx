import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-primary text-white font-bold  rounded-lg px-9 py-3">
      {children}
    </button>
  );
};

export default Button;
