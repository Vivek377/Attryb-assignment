import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import AddCar from "../pages/AddCar";
import OEM from "../pages/OEM";
import CarDetalis from "../pages/CarDetalis";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CarDetalis />} />
        <Route path="/addCar" element={<AddCar />} />
        <Route path="/oem" element={<OEM />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
