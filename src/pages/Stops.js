import React from "react";
import Navbar from "../components/Navbar";
import Map from "../components/Map";
const Stops = ({ setIsLogged }) => {
  return (
    <>
      <Navbar setIsLogged={setIsLogged} />
      <Map />
    </>
  );
};

export default Stops;
