import React, { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import { getTestimonials } from "../lib/pocketbase";

export const Testimonials = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTestimonials().then((res) => setData(res));
  }, []);
  return (
    <>
      <div className="px-20 py-10  bg-gradient ">
        <h2 className="header">Testimonials</h2>
        <p className="subheader">What our students say About us</p>

        <div className="columns-1 md:columns-3 max-w-7xl mx-auto space-y-4  mt-10">
          {data.map((item, index) => (
            <div
              key={item.id}
              className=" card-white break-inside-avoid-column"
            >
              <h2 className="text-lg font-medium text-slate-700">
                {item.name}
              </h2>
              <p className="text-sm text-slate-500">{item.designation}</p>
              <p className="mt-3 text-sm text-slate-500 ">{item.description}</p>

              <p className="text-sm text-slate-400 mt-4">{item.created}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
