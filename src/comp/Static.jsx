import React, { useEffect, useState } from "react";
import { getStatics } from "../lib/pocketbase";

export const Static = () => {
  const [staticData, setStaticData] = useState([]);

  useEffect(() => {
    getStatics().then((res) => setStaticData(res));
  }, []);
  return (
    <div className="px-20 py-12">
      <div className={`grid grid-cols-4`}>
        {/*  */}
        {staticData.map((item) => (
          <div
            key={item.id}
            className="text-center px-4 py-14 border-r last:border-none"
          >
            <h1 className="text-3xl ">{item.title}</h1>
            <p className="text-slate-500 mt-2 text-sm">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
