import React from "react";
import Navbar from "../navigation/Navbar";
import Footer from "./Footer";

function Layout({ children, withNavbarOffset = true }) {
  return (
    <div>
      <Navbar />
      <main className={withNavbarOffset ? "pt-28" : ""}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
