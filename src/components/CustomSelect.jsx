import React, { useState } from "react";

const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = useState("UtkarshDhairyaPa");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-[90%] ml-auto mr-auto">
      <div className="relative">
        <select
          value={selectedOption}
          onChange={handleChange}
          className="block w-full truncate appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-3 pr-8 text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="UtkarshDhairyaPa">UtkarshDhairyaPa</option>
          <option value="AnotherOption1">AnotherOption1</option>
          <option value="AnotherOption2">AnotherOption2</option>
        </select>
        {/* Dropdown Icon */}
        <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;
