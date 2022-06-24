import { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Historial from "./Historial";
import PartidoActual from "./PartidoActual";
import Torneos from "./Torneos";

const Dashboard = () => {
  const location = useLocation();
  const urlActual = location.pathname;
  return (
    <div className="bg-white shadow-md ml-2 bg-opacity-80 w-full">
      {urlActual === "/partido" ? (
        <PartidoActual />
      ) : "" || urlActual === "/historial" ? (
        <Historial />
      ) : "" || urlActual === "/torneo" ? (
        <Torneos />
      ) : (
        ""
      )}
      <h1 className="font-medium text-5xl uppercase p-10">
        {urlActual === "/" ? "inicio" : ""}
      </h1>
    </div>
  );
};

export default Dashboard;
