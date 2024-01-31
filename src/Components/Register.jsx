import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import image from "../Asserts/image1.png";
import { useNavigate } from "react-router-dom";

export default function Register({ auth }) {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [isBlur, setIsBlur] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const history = useNavigate();

  const navigatetoLogin = () => {
    history("/");
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsBlur(true);
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      navigatetoLogin();
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsBlur(false);
    }
  };

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      history("/");
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      className={`container-fluid h-screen bg-[#EEDEF6] flex flex-col justify-center items-center sm:flex-row ${
        isBlur ? "filter blur" : ""
      }`}
    >
      <div className="p-12 sm:mx-8 max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <img
          src={image}
          className="object-contain w-full h-auto"
          alt="description"
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#2F2F2F] rounded-lg p-12 sm:mx-8">
        <div className="mb-4">
          <h1 className="text-4xl text-white tracking-wider font-semibold p-4">
            Register User
          </h1>
        </div>
        <div className="flex flex-col w-full justify-center items-stretch">
          <input
            type="text"
            placeholder="Register E-mail"
            className="mb-4 px-4  text-center py-2 border-2 border-black rounded-md"
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Register Password"
            className="mb-4 px-4 text-center py-2 border-2 border-black rounded-md"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full justify-center items-stretch">
          <button
            className="bg-blue-500 mb-4 text-white p-3 rounded-md w-full"
            onClick={register}
          >
            Create User
          </button>
          <button
            className="bg-blue-500 text-white p-3 rounded-md w-full"
            onClick={handleGoogleSignIn}
          >
            Sign in with Google
          </button>
        </div>
        <div className="mt-4">
          <p className="text-white">
            Already have an account?{" "}
            <span
              onClick={navigatetoLogin}
              className="text-blue-500 cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
