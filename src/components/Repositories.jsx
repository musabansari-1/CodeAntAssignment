import React from "react";
import RepositoryItem from "./RepsoitoryItem";
import { LuRefreshCw } from "react-icons/lu";
import { IoAddSharp } from "react-icons/io5";

import CustomButton from './CustomButton';
import SearchField from './SearchField';




const Repository = () => {
  const repositories = [
    {
      name: "design-system",
      type: "Public",
      language: "React",
      size: "7320 KB",
      updated: "1 day ago",
    },
    {
      name: "codeant-ci-app",
      type: "Private",
      language: "Javascript",
      size: "5871 KB",
      updated: "2 days ago",
    },
    {
      name: "analytics-dashboard",
      type: "Private",
      language: "Python",
      size: "4521 KB",
      updated: "5 days ago",
    },
    {
      name: "mobile-app",
      type: "Public",
      language: "Swift",
      size: "3096 KB",
      updated: "3 days ago",
    },
  ];

  return (
    <div className="bg-white border border-[#E9EAEB]  min-h-screen rounded-xl shadow-xs p-4">
      <div className="border-b p-4">
      <div className="flex mb-2">
      <div className="flex-col flex-1">
      <h2 className="text-2xl font-bold">Repositories</h2>
      <h5>33 total Repositories</h5>
      </div> 
      <div className="flex w-[40%] justify-evenly items-center">
      <CustomButton icon={<LuRefreshCw />} text={'Refresh All'} onClick={() => {}} customStyles = 'bg-white text-black hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 h-[70%]'  />
      <CustomButton icon={<IoAddSharp />} text={'Add Repository'} onClick={() => {}} customStyles = 'bg-[#1570EF] text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 h-[70%]'  />
      </div>
      </div>
      <SearchField />
      </div>


      <div className="">
        {repositories.map((repo, index) => (
          <RepositoryItem key={index} {...repo} />
        ))}
      </div>
    </div>
  );
};

export default Repository;
