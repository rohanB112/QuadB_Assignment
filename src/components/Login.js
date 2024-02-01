import React from "react";
import { useState, useRef } from "react";
import { auth } from "../utils/firebase";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Header from "./Header";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const Navigate = useNavigate();

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleToggle = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleAuth = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //Sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullName.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              Navigate("/movies");
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          Navigate("/movies");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <>
      <Header />
      <div className="p-5 bg-green-400 w-1/3 mx-auto rounded-md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {isSignInForm ? (
            <h1 className="font-bold text-2xl text-center my-5">Sign In</h1>
          ) : (
            <h1 className="font-bold text-2xl text-center my-5">Sign Up</h1>
          )}
          {!isSignInForm && (
            <input
              ref={fullName}
              className="py-3 px-4 my-3 w-full rounded-md bg-[#EFEFEF] text-black placeholder-[#4a4747]"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            className="py-3 px-4 my-3 w-full rounded-md bg-[#EFEFEF] text-black placeholder-[#4a4747]"
            type="text"
            defaultValue="admin@gmail.com"
            placeholder="Email Address"
          />
          <input
            ref={password}
            className="py-3 px-4 my-2 w-full rounded-md bg-[#EFEFEF] text-black placeholder-[#4a4747]"
            type="password"
            defaultValue="Admin@123"
            placeholder="Password"
          />
          <p className="text-red-600">{errorMessage}</p>
          <button
            onClick={handleAuth}
            className="py-3 px-4 my-5 w-full rounded-md bg-black text-white"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            onClick={handleToggle}
            className="text-black text-sm cursor-pointer hover:underline"
          >
            {isSignInForm
              ? "Don't have an account? Sign up here."
              : "Already have an account? Sign in."}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
