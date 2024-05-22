import React from "react";
import {SelectDemo1,SelectDemo2} from "@/components/chart/subcomponents/Selectdemo";
import RadialBarChart from "./radialBarCharts";

export default async function NewsChartBox({assigned, pending, completed, approved, rejected, live}){
    // const total=assigned+pending+completed+approved+rejected+live;
    return(
        <div className=" rounded-xl border-2 border-[#7F56D9] p-5">
            <div className="flex justify-between">
                <div className="text-[#7F56D9] font-bold italic text-2xl leading-10">News</div>
                <div className="flex gap-3">
                    <div className="w-1/2"><SelectDemo1/></div>
                    <div className="w-1/2"><SelectDemo2/></div>
                </div>
            </div>
            <div className="h-[28rem] flex items-center justify-center my-10">
                <RadialBarChart assigned={assigned} pending={pending} completed={completed} approved={approved} rejected={rejected} live={live}/>
            </div>
        </div>
    );
}
