import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignUpForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg"
          alt="bglogo"
        />
      </div>
      <form className="w-3/12 absolute p-4 bg-black my-44 mx-auto right-0 left-0 text-white bg-opacity-70 rounded-md">
        <h1 className=" p-4 my-2  text-2xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-4 my-3 w-full rounded-sm bg-black bg-opacity-30 border border-white"
            type="text"
            placeholder="Full Name"
          ></input>
        )}
        <input
          className="p-4 my-3 w-full rounded-sm bg-black bg-opacity-30 border border-white"
          type="text"
          placeholder="Email Address"
        ></input>
        <input
          className="p-4 my-3 w-full rounded-sm bg-black bg-opacity-30 border border-white"
          type="text"
          placeholder="Password"
        ></input>
        <button className="p-4 my-6 bg-red-600 w-full rounded-sm">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className=" py-4 text-m cursor-pointer" onClick={toggleSignUpForm}>
          {isSignInForm
            ? "New to Heckflix? Sign Up Now"
            : "Already Registered? Sign In Here"}
        </p>
      </form>
    </div>
  );
};

export default Login;
