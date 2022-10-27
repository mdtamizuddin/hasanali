import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Pages/Footer";
import Header from "../components/Pages/Header";
import SideBar from "../components/Pages/SideBar";

const Main = () => {
  const language = useLoaderData();
  return (
    <div>
      <Header></Header>
      <div className="flex justify-between my-5">
          <div className="w-fit">
            <SideBar language={language}></SideBar>
          </div>
          <div className="w-full">
            <Outlet></Outlet>
          </div>
        </div>
        <Footer></Footer>
    </div>
  );
};

export default Main;
