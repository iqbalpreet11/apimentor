import React from "react";
import { Route, Routes } from "react-router-dom";
import { Module } from "./Module";
import { Footer } from "../comp/Footer";
import { Bucket } from "./Bucket";

export const Modules = () => {
  return (
    <Routes>
      <Route path="/" element={<ModulesHome />} />
      <Route path="/module/:id" element={<Module />} />
      <Route path="/questions/:id" element={<Bucket />} />
    </Routes>
  );
};

export const ModulesHome = () => {
  return (
    <>
      <div className="px-20 py-10 min-h-screen"></div>
      <Footer />
    </>
  );
};
