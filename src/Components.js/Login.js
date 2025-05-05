import React, { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils.js/firebase";
import Header from "./Header.js";
import { validateData } from "../Utils.js/validateLoginForm";
const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  ///const name = useRef();
  const handleClickOfLogin = () => {
    //validate form fields and return the error.
    const message = validateData(
      email.current.value,
      password.current.value,
      //name.current.value
    );
    setErrorMessage(message);
    if (message) return;
    //else signin/signup
    if (!isSignInForm) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      //signin logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-4 bg-black my-44 mx-auto right-0 left-0 text-white bg-opacity-70 rounded-sm"
      >
        <h1 className=" p-4 my-2  text-2xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            //ref={name}
            className="p-4 my-3 w-full rounded-sm bg-black bg-opacity-30 border border-white"
            type="text"
            placeholder="Full Name"
          ></input>
        )}
        <input
          ref={email}
          className="p-4 my-3 w-full rounded-sm bg-black bg-opacity-30 border border-white"
          type="text"
          placeholder="Email Address"
        ></input>

        <input
          ref={password}
          className="p-4 my-3 w-full rounded-sm bg-black bg-opacity-30 border border-white"
          type="text"
          placeholder="Password"
        ></input>

        <p className="text-red-500 text-sm py-2">{errorMessage}</p>

        <button
          className="p-4 my-6 bg-red-600 w-full rounded-sm"
          onClick={handleClickOfLogin}
        >
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
