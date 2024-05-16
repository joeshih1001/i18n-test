import { FC } from "react";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const AppLayout: FC = () => {
  return (
    <div className="flex flex-col h-lvh">
      <Navbar />
      <div className="grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
