import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-[#001219] h-20 flex justify-between px-20 text-white text-center">
      <img className="w-20 h-20" src={require("../Assets/PLAN.png")} alt="" />
      <div className="flex -ml-60 justify-evenly w-1/3 mt-8">
        <p>Features</p>
        <p>Company</p>
        <p>About</p>
        <p>DGFGHFHG</p>
      </div>
      <div className="flex w-1/4 justify-evenly">
        <Link to="/">
          <button className="border-powerblue border-2 px-4 h-1/2 mt-4 rounded-md">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="border-powerblue border-2 px-4 h-1/2 mt-4 rounded-md">
            Register
          </button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
