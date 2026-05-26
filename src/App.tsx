import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { AboutMe } from "./screens/AboutMe";
import { Projects } from "./screens/Projects";
import { Resume } from "./screens/Resume";
import "./styles/globals.css";

function Layout() {
  return (
    <div className="min-h-screen bg-[#fffef3]">
      <Header />
      <Outlet />
    </div>
  );
}

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <AboutMe /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Resume /> },
    ],
  },
];
