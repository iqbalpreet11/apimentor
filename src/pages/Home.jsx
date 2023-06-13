import React, { useEffect, useState } from "react";
import Hero from "../comp/Hero";
import CompaniesSlider from "../comp/home/CompaniesSlider";
import { Static } from "../comp/Static";
import { ModulesSlider } from "../comp/ModulesSlider";
import { Testimonials } from "../comp/Testimonials";
import { Footer } from "../comp/Footer";

function Home(props) {
  // const [loading, setLoading] = useState(true);

  // document.onreadystatechange = () =>{
  //   console.log(document.readyState);
  //   if(document.readyState == 'complete'){
  //     setLoading(false);
  //   }

  // }

  return (
    <>
      <Hero />
      <Static />
      <ModulesSlider />

      <Testimonials />
      <CompaniesSlider />
      <div className="px-44 py-10">
        <div className="bg-slate-900 justify-between rounded-xl px-20 py-16 flex items-center">
          <div className="w-2/4 text-white fomt-bold text-4xl">
            <p>Start your learning journey with the top experts, Today!</p>
          </div>
          <button className="px-4 py-2 text-white rounded-full border hover:bg-white hover:text-slate-900 duration-150 border-white">
            Explore our modules
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
