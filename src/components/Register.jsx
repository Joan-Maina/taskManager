import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex">
      <div className="w-2/4">
        <img
          className="w-full h-screen"
          src="https://images.unsplash.com/photo-1603804449564-2ad32f24d17e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
      </div>
      <div className="w-2/4 h-screen justify-around bg-[#c6cacd] align-middle">
        <form
          action=""
          className="m-12 mt-12 bg-[#001219] text-white pl-40 pb-4"
        >
          <img
            className="w-40 h-40"
            src={require("../Assets/PLAN.png")}
            alt=""
          />
          <p className="-mt-10">Fill the details to register</p>
          <div className="p-2">
            <input
              type="text"
              required
              placeholder=" Enter your firstname"
              className="p-2 rounded-sm"
            />
          </div>
          <div className="p-2">
            <input
              type="text"
              required
              placeholder=" Enter your last name"
              className="p-2 rounded-sm"
            />
          </div>
          <div className="p-2">
            <input
              type="email"
              required
              placeholder=" Enter your email"
              className="p-2 rounded-sm"
            />
          </div>
          <div className="p-2">
            <input
              type="password"
              required
              placeholder=" Enter your password"
              className="p-2 rounded-sm"
            />
          </div>
          <div className="p-2">
            <input
              type="password"
              required
              placeholder=" Confirm your password"
              className="p-2 rounded-sm"
            />
          </div>
          <button className="bg-[#00afef] text-slate-700 px-6 py-2 rounded-md ml-10">
            Sign up{" "}
          </button>
          <Link to="/">
            <p className="ml-6">Already have an account?</p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
