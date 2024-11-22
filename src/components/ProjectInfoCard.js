import React from "react";

export const ProjectInfoCard = ({ data, index }) => {
function getRandomColor(){
    const colors = ['#7e22ce', '#f7a01d', '#6466f1']
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex]
}
  return (
    <a href={`/project/${index}/upload`}>
    <div className="p-2  items-center flex gap-5 border border-1 border-[#999999] shadow-lg rounded-xl">
      <div className="text-white text-5xl py-6 px-10 rounded-[20px]"
       style={{ backgroundColor: getRandomColor() }}
      >
        {data.projectName.split("")[0]}
      </div>
      <div className="flex flex-col justify-between gap-6">
        <p className="flex flex-col">
        <p className="text-[#7e22ce] font-semibold text-xl">{data.projectName}</p>
        <p className="text-sm">{data.episodes?.length} Episodes</p>
        </p>
        
        <p className="text-sm text-[#969696]">Last edited a week ago</p>
      </div>
    </div>
    </a>
  );
};
