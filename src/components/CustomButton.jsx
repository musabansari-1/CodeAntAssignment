import React from "react";



const CustomButton = ({ icon, text, onClick, customStyles }) => {
  return (
    <button
      onClick={onClick}
      className= {`flex items-center gap-2 px-4 py-2  text-sm font-medium rounded-lg shadow  ${customStyles}`}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {text}
    </button>
  );
};

export default CustomButton;
