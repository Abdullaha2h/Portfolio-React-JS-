import React from "react";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

const MernStackDiagram = () => {
  return (
    <div className="relative flex bg-gray-800 rounded-full justify-center items-center h-90 w-90 mx-auto shadow-lg">
      {/* Center Circle */}
      <div className="absolute w-16 h-16 bg-gray-900 p-12 rounded-full flex justify-center items-center shadow-md">
        <p className="text-white font-bold">MERN</p>
      </div>

      {/* MongoDB */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <SiMongodb className="text-green-500 text-4xl transition-transform duration-300 transform hover:scale-125 hover:drop-shadow-lg" />
        <p className="text-white mt-1 text-sm">MongoDB</p>
      </div>

      {/* Express.js */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <SiExpress className="text-white text-4xl transition-transform duration-300 transform hover:scale-125 hover:drop-shadow-lg" />
        <p className="text-white mt-1 text-sm">Express.js</p>
      </div>

      {/* React.js */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
        <SiReact className="text-blue-500 text-4xl transition-transform duration-300 transform hover:scale-125 hover:drop-shadow-lg" />
        <p className="text-white mt-1 text-sm">React.js</p>
      </div>

      {/* Node.js */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
        <SiNodedotjs className="text-green-600 text-4xl transition-transform duration-300 transform hover:scale-125 hover:drop-shadow-lg" />
        <p className="text-white mt-1 text-sm">Node.js</p>
      </div>
    </div>
  );
};

export default MernStackDiagram;
