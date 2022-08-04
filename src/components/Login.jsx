import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex">
      <div className="w-2/4">
        <img
          className="w-full h-screen"
          src="https://images.unsplash.com/photo-1603804449564-2ad32f24d17e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
      </div>
      <div className="w-2/4 h-screen justify-around bg-[#c6cacd] align-middle pt-16">
        <form
          action=""
          className="m-12 mt-4 bg-[#001219] text-white p-10 pl-40"
        >
          <img
            className="w-40 h-40"
            src={require("../Assets/PLAN.png")}
            alt=""
          />
          <div className="p-2">
            <input
              type="email"
              placeholder=" Enter your email"
              className="p-2 rounded-sm"
            />
          </div>
          <div className="p-2">
            <input
              type="password"
              placeholder=" Enter your email"
              className="p-2 rounded-sm"
            />
          </div>
          <button className="bg-[#00afef] text-slate-700 px-6 py-2 rounded-md ml-10">
            Log In
          </button>
          <Link to="/register">
            <p className="ml-6">Don't have an account?</p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
