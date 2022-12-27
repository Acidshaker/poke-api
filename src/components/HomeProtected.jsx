import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const HomeProtected = () => {
  const nameTrainer = useSelector((state) => state.nameTrainer);
  const genderTrainer = useSelector((state) => state.genderTrainer);

  if (nameTrainer && genderTrainer) {
    return <Navigate to="/trainer-menu" />;
  } else {
    return <Outlet />;
  }
};

export default HomeProtected;
