import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Login from "./Login";

function LoginPage() {
  return (
    <>
      <NavBar />
      <Login />
      <Footer logo="fleet.jpg" />
    </>
  );
}

export default LoginPage;
