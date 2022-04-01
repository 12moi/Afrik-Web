import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-pri hover:bg-red-400 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
};

export default Button;
