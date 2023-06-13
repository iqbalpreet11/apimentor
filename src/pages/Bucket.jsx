import React, { useEffect, useState } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import { LoadingScreen } from "../comp/LoadingScreen";
import { Disclosure } from "@headlessui/react";
import {
  StarIcon,
  EyeIcon,
  ShareIcon,
  FolderIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";
import {
  client,
  getBucketByParent,
  getModuleById,
  getQuestionByBucketID,
} from "../lib/pocketbase";
import { Footer } from "../comp/Footer";

export const Bucket = () => {
  const { id } = useParams();
  const [bucket, setBucket] = useState({});
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setLoading(true)
    getQuestionByBucketID(id).then((res) => {
      setBucket(res.items[0].expand.bucket);
      setQuestions(res.items);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <div className=" px-20 py-10 bg-gradient">
            <div>
              <p className="text-4xl text-slate-800 font-light">
                {bucket.name}
              </p>
              <div>
                <p className="text-slate-500">{questions.length} Questions</p>
              </div>

              <p
                dangerouslySetInnerHTML={{ __html: bucket.description }}
                className="  mt-3 w-2/3 text-slate-500"
              ></p>
            </div>
          </div>

          <div className="grid grid-cols-3 px-20 mt-5">
            <div className=" col-span-2 px-5">
              <ol className=" list-decimal ">
                {questions.map((question, index) => (
                  <li
                    className="ml-3 px-3 py-10 border-b last:border-none "
                    key={index}
                  >
                    <p
                      className="text-slate-700"
                      dangerouslySetInnerHTML={{ __html: question.question }}
                    />
                    {question.note && (
                      <div
                        className="mt-2 border-l-4 border-l-slate-200 px-2 text-sm bg-slate-100 py-2"
                        dangerouslySetInnerHTML={{ __html: question.note }}
                      />
                    )}

                    <div className="  py-3 mt-2 grid grid-cols-2 gap-3 text-sm">
                      <div className="flex py-2 px-3 border      ">
                        <p className="mr-4 font-bold">A.</p>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: question.option_a,
                          }}
                        />
                      </div>
                      <div className="flex py-2 px-3 border      ">
                        <p className="mr-4 font-bold">B.</p>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: question.option_b,
                          }}
                        />
                      </div>
                      <div className="flex py-2 px-3 border      ">
                        <p className="mr-4 font-bold">C.</p>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: question.option_c,
                          }}
                        />
                      </div>
                      <div className="flex py-2 px-3 border      ">
                        <p className="mr-4 font-bold">D.</p>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: question.option_d,
                          }}
                        />
                      </div>
                    </div>

                    {/* accordians */}
                    <div className="  mt-2  ">
                      <div>
                        <Disclosure>
                          <Disclosure.Button className=" w-full flex items-center justify-between">
                            <p className="text-slare text-sm px-3 py-1 bg-slate-100 rounded border flex border-slate-200">View Answer   </p>
                            <div className="pointer-events-none">
                              <p
                                className={`px-2 text-sm rounded border ${
                                  question.dificulty == "Easy"
                                    ? `bg-green-100 text-green-500 border-green-300`
                                    : question.dificulty == "Medium"
                                    ? `bg-amber-100 text-amber-500 border-amber-300`
                                    : question.dificulty == "Difficult"
                                    ? `bg-red-100 text-red-500 border-red-300`
                                    : null
                                }`}
                              >
                                {question.dificulty}
                              </p>
                            </div>
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-3 px-3  py-2   w-full bg-green-50 border border-green-300 rounded text-green-700">
                            <p className="font-semibold mb-3">
                              {question.currect == "option_a"
                                ? "Option A"
                                : question.currect == "option_b"
                                ? "Option B"
                                : question.currect == "option_c"
                                ? "Option C"
                                : question.currect == "option_d"
                                ? "Option D"
                                : null}
                            </p>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: question.explain,
                              }}
                            />
                          </Disclosure.Panel>
                        </Disclosure>
                      </div>
                      {/* <div>
                      <p
                        className={`px-2 text-sm rounded border ${
                          question.dificulty == "Easy"
                            ? `bg-green-100 text-green-500 border-green-300`
                            : question.dificulty == "Medium"
                            ? `bg-amber-100 text-amber-500 border-amber-300`
                            : question.dificulty == "Difficult"
                            ? `bg-red-100 text-red-500 border-red-300`
                            : null
                        }`}
                      >
                        {question.dificulty}
                      </p>
                      </div> */}
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* related */}
            <div className="px-5 pt-10">
              <div className="  py-4 px-6  bg-slate-50 border shadow">
                <p className="text-xl text-slate-700">Related</p>
                <hr />
                <Related bucket={bucket} />
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

const Related = (parms) => {
  const bucket = parms.bucket;
  const [buckets, setBuckets] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    client
      .collection("bucket")
      .getList(1, 200, {
        filter: 'module = "' + bucket.module + '" && active = true',
      })
      .then((res) => {
        setBuckets(res);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? null : (
        <>
          {buckets.items.map((item, index) => (
            <NavLink
              key={index}
              to={`/modules/questions/${item.id}`}
              className={({ isActive }) =>
                isActive
                  ? "hidden"
                  : " group   duration-150 mb-2       cursor-pointer  py-3 flex justify-between"
              }
            >
              <div className="flex items-center justify-start">
                <div className="p-3 bg-slate-200 group-hover:bg-slate-900 rounded-full mr-5">
                  <FolderIcon className="h-4 w-4 stroke-slate-700 group-hover:stroke-white" />
                </div>
                <div>
                  <p className=" text-slate-800">{item.name}</p>
                  <p className="text-xs mt-1 text-slate-400">
                    Last Updated : {item.updated}
                  </p>
                </div>
              </div>
            </NavLink>
          ))}
        </>
      )}
    </>
  );
};
