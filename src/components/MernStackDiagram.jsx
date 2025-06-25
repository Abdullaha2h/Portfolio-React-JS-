import React from "react";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

const MernStackDiagram = () => {
  return (
    <div className="relative flex bg-gray-800 rounded-full justify-center items-center h-90 w-90 hover:w-96 hover:h-96 transition-all duration-300 mx-auto shadow-lg">
      {/* Center Circle */}
      <div className="absolute w-16 h-16 bg-gray-900 transition-all duration-300 p-12 hover:p-14 rounded-full flex justify-center items-center shadow-md">
        <p className="text-white font-bold">MERN</p>
      </div>

      {/* MongoDB */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
      <style>
        {`
          @keyframes leafSway {
            0%   { transform: rotate(0deg); }
            25%  { transform: rotate(5deg); }
            50%  { transform: rotate(-6deg); }
            75%  { transform: rotate(4deg); }
            100% { transform: rotate(0deg); }
          }
        `}
      </style>
        <SiMongodb className="text-green-500 text-4xl transition-transform duration-300 transform hover:scale-125 hover:drop-shadow-lg animate-[leafSway_3s_ease-in-out_infinite] " style={{ transformOrigin: "bottom center" }} />
        <p className="text-white mt-1 text-sm">MongoDB</p>
      </div>

      {/* Express.js */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <SiExpress className="text-white text-4xl transition-transform duration-300 transform hover:scale-125 hover:drop-shadow-lg animate-bounce translate-y-4" />
        <p className="text-white mt-1 text-sm">Express.js</p>
      </div>

      {/* React.js */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
        <SiReact className="text-blue-500 animate-spin text-4xl transition-transform duration-300 transform hover:scale-125 hover:drop-shadow-lg"  style={{ animationDuration: "4s" }} />
        <p className="text-white mt-1 text-sm">React.js</p>
      </div>

      {/* Node.js */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
        <SiNodedotjs
  className="text-green-600 text-4xl transition duration-500 transform hover:scale-110 drop-shadow-[0_0_10px_#22c55e] animate-pulse"
/>

        <p className="text-white mt-1 text-sm">Node.js</p>
      </div>
    </div>
  );
};

export default MernStackDiagram;
