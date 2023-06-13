import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import WordLimit from "react-word-limit";
import {
  BriefcaseIcon,
  ClockIcon,
  AcademicCapIcon,
  StarIcon,
  ArrowLongRightIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { client, getModules, getTrandingModules } from "../lib/pocketbase";

import { Rings } from "react-loader-spinner";

export const ModulesSlider = () => {
  const [modules, setModules] = useState([]);
  const [trendingModules, setTrendingModules] = useState([]);

  useEffect(() => {
    try {
      getTrandingModules().then((res) =>{
        setModules(res.items);
   
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div className="px-20 py-10">
        <div className=" flex justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-800">
              Our Trending <br />
              Modules
            </h2>

            <div className="flex  rounded-full border border-slate-100 bg-slate-50 my-5 text-sm py-2">
              <div className="px-4 py-1 flex items-center justify-center border-r text-slate-500 ">
                
                <AcademicCapIcon className="h-6 w-6 stroke-green-500 mr-3" />
                Beginner - Intermediate
              </div>
              <div className="px-4 py-1 flex items-center justify-center border-r text-slate-500 ">
                
                <BriefcaseIcon className="h-6 w-6 stroke-amber-500 mr-3" /> Self
                Placed
              </div>
              <div className="px-4 py-1 flex items-center justify-center   text-slate-500 ">
                
                <ClockIcon className="h-6 w-6 stroke-purple-500 mr-3" /> ~ 6 to
                8 week to complete
              </div>
            </div>
          </div>
        </div>

        {/* grid */}
        <div className="grid grid-cols-3 gap-5 mt-8">
          {modules.map((item) => (
            <div key={item.id} className="  group px-3 pt-3 pb-5 rounded-lg  bg-slate-50 cursor-pointer border hover:border-slate-200 border-transparent">
              <Link to={`/modules/module/${item.id}`}>
                
                <img
                  src={
                    process.env.REACT_APP_FILES_URL +
                    "/" +
                    item.collectionId +
                    "/" +
                    item.id +
                    "/" +
                    item.banner
                  }
                  className="shadow-lg group-hover:shadow-xl duration-150  w-full rounded-lg"
                  alt=""
                />
             

              <div className="mt-5 px-3">
                <Link
                  to={`/modules?select=${item.expand.category.id}`}
                  className="text-xs px-3 py-1.5 bg-slate-200 rounded border text-slate-600 opacity-1 hover:bg-slate-300"
                >
                  {item.expand.category.name}
                </Link>
                <p className="text-xl font-medium text-slate-700 mt-3">
                  {item.name}
                </p>
                <p className="text-sm text-slate-500">
                  <WordLimit limit={150}>{item.short_description}</WordLimit>
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-center">
                    
                    <StarIcon className="fill-amber-500 stroke-transparent h-6 w-6" />
                    <span className="font-semibold ml-1.5">{item.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <EyeIcon className="stroke-slalte-300 h-5 w-5" />
                    <span className="font-semibold ml-1.5">{item.views}</span>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link  to={"/modules"}  className="px-6 py-3 border group hover:bg-slate-900 hover:shadow-lg hover:text-white border-slate-900 rounded-full font-medium text-slate-900 flex justify-center items-center">
            Explore all modules
            <ArrowLongRightIcon className="w-7 ml-3 stroke-slate-900 group-hover:stroke-white" />
          </Link>
        </div>
      </div>
    </>
  );
};
