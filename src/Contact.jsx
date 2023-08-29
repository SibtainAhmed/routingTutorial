// import React from 'react'

import { Link, Outlet } from "react-router-dom";

function Contact() {
  return (
    <div>
      <Outlet />q<h1>Welcome to Contact Page </h1>
      <p>Here you can find Nested Routing </p>
      <Link to="Marketing">Marketing</Link>
      <br />
      <Link to="Production">Production</Link>
      <br />
      <Link to="Company">Companyx</Link>
    </div>
  );
}

export default Contact;
