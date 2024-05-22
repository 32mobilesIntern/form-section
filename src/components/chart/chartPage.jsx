import React from "react";
import ChartData from "./subcomponents/chartDetails";
import ArticleChartBox from "./subcomponents/articlesChartBox";
import NewsChartBox from "./subcomponents/newsChartBox";

export default function Chart() {
    const assigned=88;
    const pending=88;
    const completed=52;
    const approved=88;
    const rejected=55;
    const live=50;
    return (
        <div className=" p-5 lg:p-10">
            <div className="flex gap-2 lg:gap-4">
                <div className="w-full h-[76px] flex items-center rounded-xl bg-sky-100">
                    <h1 className="mx-5 font-bold text-2xl leading-7 text-[#007DE3]">RONAK’S DASHBOARD</h1>
                </div>
                <div className="flex items-center justify-center rounded-xl bg-[#007DE3] h-[76px] w-[70px]">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.7128 9.99982H13.9998C12.8952 9.99982 11.9998 9.10436 11.9998 7.9998V3.27382C12.0026 2.34147 11.5716 1.46079 10.8338 0.890833C10.1346 0.337146 9.2178 0.139802 8.35277 0.356833C2.47324 1.81633 -1.10993 7.76585 0.349619 13.6454C1.37792 17.7879 4.71579 20.9577 8.9058 21.7708C14.6297 22.8664 20.2147 19.3077 21.6398 13.6568C21.8576 12.7907 21.6607 11.8725 21.1068 11.1718C20.5303 10.4353 19.6481 10.0034 18.7128 9.99982Z" fill="white" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap gap-5 mt-10">
                <div className="w-full lg:w-1/2"><ArticleChartBox assigned={assigned} pending={pending} completed={completed} approved={approved} rejected={rejected} live={live}/></div>                
                <div className="w-full lg:w-1/2"><NewsChartBox assigned={assigned} pending={pending} completed={completed} approved={approved} rejected={rejected} live={live}/></div>                
            </div>
            <div className="flex gap-3 lg:gap-24 items-center justify-center mt-10">
                <ChartData title={"Assigned"} value={assigned} colour="#007DE3" />
                <ChartData title={"Pending"} value={pending} colour="#F6CF00" />
                <ChartData title={"Completed"} value={completed} colour="#84CAFF" />
                <ChartData title={"Approved"} value={approved} colour="#1AA628" />
                <ChartData title={"Rejected"} value={rejected} colour="#FF4F4F" />
                <ChartData title={"Live"} value={live} colour="#C5002F" />
            </div>
        </div>
    );
}