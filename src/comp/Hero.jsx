import React, { useState, useEffect } from "react";
import { getHero } from "../lib/pocketbase";
import { Link } from "react-router-dom";

function Hero(props) {
  const [herodata, setHerodata] = useState("");

  useEffect(() => {
    try {
      getHero().then((res) => setHerodata(res));
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className=" bg-gradient-to-b from-white to-indigo-50 ">
      <div className="h-full grid grid-cols-2  pl-20 ">
        <div className="h-full flex flex-col justify-center    ">
          <h1 className="text-5xl ">{herodata.title}</h1>

          <p className="text-slate-500 mt-4">{herodata.description}</p>
          <Link
            className="btn btn-secondary rounded-none mt-6 flex items-center w-max text-lg   "
            target="blank"
            to={herodata.action}
          >
            Get Started
          </Link>
        </div>

        {/* image section */}
        <div className="h-full flex overflow-hidden  flex-wrap justify-end content-center bg-center bg-no-repeat  ">
          <img
            className="  "
            src={
              process.env.REACT_APP_FILES_URL +
              "/" +
              herodata.collectionId +
              "/" +
              herodata.id +
              "/" +
              herodata.image
            }
          />
          {/* <img src={Banner} className='w-full' alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
