import React from "react";
import Logo from "./../assets/logo.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="bg-slate-900 py-8 px-20  justify-between items-center flex">
        <p className="text-xs text-slate-500">
          &copy; 2023 Copyrights All rights reserved www.aptimentor.com{" "}
        </p>
        <Link
          className="text-sm text-slate-400 hover:text-white"
          to={"/privacy-policy"}
        >
          Privacy Policy
        </Link>
      </div>
    </>
  );
};
