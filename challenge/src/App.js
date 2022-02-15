import React from "react";
import { Routes, Route } from "react-router-dom";
import Toggle from "./pages/Toggle";
import ModalPage from "./pages/ModalPage";
import Main from "./pages/Main";
import { Link } from "react-router-dom";
import "./App.css"


function App() {
  return (
    <>
      <h1>challenge for oneboard</h1>
      <span style={{fontSize:"24px"}}>page router : </span>
      <Link to="/toggle" style={{ }}>
        <span>toggle</span>
      </Link> 
      <Link to="/modal" style={{ marginLeft: "10px" }}>
        <span>modal</span>
      </Link>

      <br /><br />

      <Routes>
        <Route path="/toggle" exact element={<Toggle />} />
        <Route path="/modal" exact element={<ModalPage />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}


export default App;