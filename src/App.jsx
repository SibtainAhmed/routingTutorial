// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Page404 from "./Page404";
import User from "./User";
import Contact from "./Contact";
import Marketing from "./Marketing";
import Company from "./Company";
import Production from "./Production";

function App() {
  console.log("Welcome to App.jsx");

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/User/:id/:name" element={<User />} />
          <Route path="/User/:name" element={<User />} />
          <Route path="/*" element={<Page404 />} />
          <Route path="/Contact" element={<Contact />}>
            <Route path="Marketing" element={<Marketing />} />
            <Route path="Company" element={<Company />} />
            <Route path="Production" element={<Production />} />
          </Route>
          {/* <Route path="/*" element={<Navigate to="/" />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
