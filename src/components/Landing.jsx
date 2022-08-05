import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="overflow-hidden h-full">
      <Navbar />
      <div className="h-[500px] flex overflow-hidden mt-7">
        <div className="w-2/4 mt-24 p-8 ml-20">
          <h1 className="font-bold"> Plan it, Make it work</h1>
          <p className="mt-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>{" "}
          <Link to="/register">
            <button className="bg-yellow text-slate-700 px-6 py-2 rounded-md mt-6">
              Learn more
            </button>
          </Link>
        </div>
        <div className="w-2/4 bg-white ml-10">
          <img
            className="w-max h-full ml-28"
            src={require("../Assets/image-hero-desktop.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
