import React from "react";
import Sidebar from "./components/Sidebar";
import Repository from "./components/Repositories";
// import Content from "./components/Content";

const App = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-4">
        <Repository />
        {/* <Content /> */}
      </div>
    </div>
  );
};

export default App;
