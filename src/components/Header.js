import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const user = auth.currentUser;
  const Navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        Navigate("/");
      })
      .catch((error) => {
        console.log("An error happened.");
      });
  };

  //   bg-[#F9D791]
  return (
    <div className="py-6 px-8 mb-4  shadow-sm shadow-[#F9D791] bg-[#121212] flex w-full justify-between">
      <Link to="/movies">
        <img
          className="w-14 h-14 bg-white p-2 rounded-3xl"
          alt="logo"
          src="https://internshala-uploads.internshala.com/logo%2F61e53da647aee1642413478.png.webp"
        />
      </Link>
      {user && (
        <button
          onClick={handleSignOut}
          className="px-3 py-1 my-2 rounded-md text-sm bg-[#F9D791] text-black font-semibold"
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
