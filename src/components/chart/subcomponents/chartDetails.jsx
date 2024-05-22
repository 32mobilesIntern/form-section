import React from "react";

export default async function ChartData({colour, title, value}){
    return(
        <div className="gap-0.5 lg:gap-3 flex items-center justify-evenly">
            <span className="h-2 w-2 lg:h-4 lg:w-4 rounded-full" style={{ backgroundColor: colour }}></span>
            <div className="flex flex-col items-start">
                <h2 className="text-[#8A92A6] font-normal text-xs lg:text-base leading-7">{title}</h2>
                <h2 className="text-[#232D42] font-medium text-xs lg:text-base leading-7">{value}</h2>
            </div>
        </div>
    );
}