import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";
import { auth } from "../firebase.config";

export default function () {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login auth={auth} />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Register auth={auth} 
          />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
