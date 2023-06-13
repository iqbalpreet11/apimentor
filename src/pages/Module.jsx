import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import {
  getBucketByModule,
  getModuleById,
  getModuleByType,
} from "../lib/pocketbase";
import {
  StarIcon,
  EyeIcon,
  ShareIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";
import { Toaster, toast } from "sonner";
import { Footer } from "../comp/Footer";
import { LoadingScreen } from "../comp/LoadingScreen";
import { RelatedModules } from "../comp/RelatedModules";

export const Module = () => {
  const { id } = useParams();

  const [module, setmodule] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getModuleById(id).then((res) => {
      setmodule(res);
      setLoading(false);
    });
  }, [id]);
  return (
    <>
      <Toaster position="bottom-center" />
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <div className=" grid grid-cols-3 min-h-screen pb-10   bg-gradient  relative">
            <div className="  pl-20   pt-10    sticky top-16  ">
              <div className="bg-white rounded-xl border  overflow-hidden ">
                <img
                  className="w-full mb-4"
                  src={
                    process.env.REACT_APP_FILES_URL +
                    "/" +
                    module.collectionId +
                    "/" +
                    module.id +
                    "/" +
                    module.banner
                  }
                  alt={module.name}
                />
                <div className="px-4 py-3">
                  <p className="bedge rounded border bg-electricViolet-100 text-electricViolet-500 border-electricViolet-300">
                    {module.expand.category.name}
                  </p>
                  <h1 className="text-4xl font-light mt-2">{module.name}</h1>
                  <p className="text-blue-500 hover:text-blue-300">
                    {module.expand.parent.name}
                  </p>
                  <p className="text-sm mt-3 text-slate-400  ">
                    {module.short_description}
                  </p>

                  <div className="flex  mt-4 items-center space-x-4">
                    <div className="flex space-x-2 items-center ">
                      <StarIcon className="h-5 w-5 fill-amber-500 stroke-amber-500" />{" "}
                      <p className=" ">{module.rating}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <EyeIcon className="h-5 w-5 stroke-slate-800" />{" "}
                      <p>{module.views}</p>
                    </div>

                    <div
                      className="flex items-center space-x-2 hover:bg-slate-200 px-3 py-1.5 rounded cursor-pointer"
                      onClick={() => toast.success("Copy link on clipboard")}
                    >
                      <ShareIcon className="h-5 w-5 stroke-slate-800 cursor-pointer" />
                      <p>Share</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="w-full pr-20 pt-5 pl-10 col-span-2 ">
              <div
                className="modules-description"
                dangerouslySetInnerHTML={{ __html: module.description }}
              />
              <div>
                <Buckets module={module} />
              </div>
            </div>
          </div>
          <div className="px-20 py-10">
            <p className="text-center text-xl font-light text-slate-600">Others modules related to <br /> <span className="font-bold text-slate-800 text-3xl"> {module.expand.parent.name}</span></p>
            <RelatedModules parent={module} />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

// level three mdoule

const Buckets = (parms) => {
  const module = parms.module;
  const [bucket, setBucket] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBucketByModule(module.id).then((res) => {
      setBucket(res);
      setLoading(false);
    });
  }, []);
  return (
    <>
      {!loading && (
        <>
          <div className="">
            <div className="  mt-5 grid grid-cols-2 gap-2">
              {bucket.items.map((item, index) => (
                <Link
                  key={index}
                  to={`/modules/questions/${item.id}`}
                  className="  group   duration-150 px-5 border bg-white hover:shadow  cursor-pointer  py-3 flex justify-between"
                >
                  <div className="flex items-center justify-start">
                    <div className="p-3 bg-slate-200 group-hover:bg-slate-900 rounded-full mr-5">
                      <FolderIcon className="h-4 w-4 stroke-slate-700 group-hover:stroke-white" />
                    </div>
                    <div>
                      <p className="text-lg text-slate-800">{item.name}</p>
                      <p className="text-xs mt-1 text-slate-400">
                        Last Updated : {item.updated}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

 