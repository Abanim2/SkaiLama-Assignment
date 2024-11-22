
import React from "react";


const QuickUpload = ({ img }) => {
  
  return (
    <div className="flex hover:bg-gray-100 cursor-pointer border border-2 border-gray shadow-lg p-4 justify-start gap-8 rounded-r-lg rounded-l-lg"
    >
      <img src={img} className="h-[50px]" />
      <div className="flex flex-col text-black font-bold">
        <div>Upload</div>
        <div>Youtube Video</div>
      </div>
     
    </div>
  );
}

export default QuickUpload