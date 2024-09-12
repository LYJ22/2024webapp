import React from "react";
import NavbarComp from "./layout/NavbarComp";
// import Navpractice from "./layout/Navpractice";
import VisualComp from "./components/home/VisualComp";
import SectionComp from "./components/home/SectionComp";

function App() {
  return (
    <>
      <NavbarComp />
      {/* <Navpractice /> */}
      <VisualComp />
      <SectionComp />
    </>
  );
}

export default App;
