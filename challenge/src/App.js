import React from "react";
import { Routes, Route } from "react-router-dom";
import TogglePage from "./pages/TogglePage";
import ModalPage from "./pages/ModalPage";
import MainPamge from "./pages/MainPage";
import { Link } from "react-router-dom";


function App() {
  return (
    <>
      <Link to="/toggle">
        <span>toggle</span> 
      </Link>
      &nbsp;&nbsp;
      <Link to="/modal">
        <span>modal</span>
      </Link>

      <br />

      <Routes>
        <Route path="/toggle" exact element={<TogglePage />} />
        <Route path="/modal" exact element={<ModalPage />} />
        <Route path="/" element={<MainPamge />} />
      </Routes>
    </>
  );
}


export default App;