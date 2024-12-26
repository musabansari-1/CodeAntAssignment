import React from "react";
import { FiSearch } from "react-icons/fi"; // Importing a search icon from react-icons

const SearchField = () => {
  return (
    <div className="w-[45%] flex items-center gap-2 px-4 py-2 border border-[#D5D7DA] text-[#414651] rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
      <FiSearch className="text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search Repositories"
        className="bg-transparent flex-1 text-sm text-gray-700 focus:outline-none"
      />
    </div>
  );
};

export default SearchField;
