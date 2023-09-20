import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import AddCar from "../pages/AddCar";
import OEM from "../pages/OEM";
import CarDetails from "../pages/CarDetails";
import CarDetailsMod from "../pages/CarDetailsMod";
import YourCars from "../pages/YourCars";
import OEMDetails from "../pages/OEMDetails";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CarDetails />} />
        <Route path="/details/:id" element={<CarDetailsMod />} />
        <Route path="/addCar" element={<AddCar />} />
        <Route path="/yourCars" element={<YourCars />} />
        <Route path="/oem" element={<OEM />} />
        <Route path="/oem/:id" element={<OEMDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
