import React from "react";
import "../layouts/Navbar.css";
import Workspace from "../workspace/Workspace";

import Navbar from "./Navbar";

const Container = () => {
  return (
    <>
      <Navbar />
      <Workspace />
    </>
  );
};

export default Container;
