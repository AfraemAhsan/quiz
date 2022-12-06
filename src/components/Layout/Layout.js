import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// internal components
import Header from "components/Header";
import Div from "elements/Div";

const Layout = () => {
  return (
    <>
      <Header />
      <Div className="mx-auto max-w-7xl p-10 sm:px-6">
        <Outlet />
        <Toaster />
      </Div>
    </>
  );
};

export default Layout;
