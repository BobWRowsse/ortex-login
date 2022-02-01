import React from "react";
import Footer from "../nav/Footer";
import NavBar from "../nav/NavBar";

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col w-full min-h-screen justify-between bg-slate-900/95'>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
