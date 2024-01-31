import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import image from "../Asserts/image1.png";
import { useNavigate } from "react-router-dom";

export default function Login({ auth }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isBlur, setIsBlur] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const history = useNavigate();

  const navigatetoRegister = () => {
    history("/Register");
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsBlur(true);
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      history("/Home");
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsBlur(false);
    }
  };

  const login = async () => {
    try {
      const userData = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(userData.user);
      setUser(userData.user);
      history("/Home");
    } catch (error) {
      window.alert("Incorrect Credentials");
      console.log(error.message);
    }
  };

  return (
    <div className="container-fluid h-screen bg-[#EEDEF6] flex flex-col justify-center items-center sm:flex-row">
      <div className="p-8 sm:mx-4 max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <img
          src={image}
          className="object-contain rounded-lg w-full h-auto"
          alt="description"
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#2F2F2F] rounded-lg p-12 sm:mx-8">
        <div className="mb-4">
          <h1 className="text-4xl p-4 text-white tracking-wider font-semibold">
            Login User
          </h1>
        </div>
        <div className="flex flex-col w-full justify-center items-stretch">
          <input
            type="text"
            placeholder="Login E-mail"
            className="mb-4 text-center border-2 border-black p-3 rounded-md"
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Login Password"
            className="mb-4 text-center border-2 border-black p-3 rounded-md"
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />
          <div className="mx-2 mb-4 flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-white">Remember me</span>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-stretch">
          <button
            className="bg-blue-500 mb-4 text-white p-3 rounded-md w-full"
            onClick={login}
          >
            Login
          </button>
          <button
            className="bg-blue-500 text-white p-3 rounded-md w-full"
            onClick={handleGoogleSignIn}
          >
            Login with Google
          </button>
        </div>
        <div className="mt-4">
          <p className="text-white">
            Don't have an account?{" "}
            <span
              onClick={navigatetoRegister}
              className="text-blue-500 cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
