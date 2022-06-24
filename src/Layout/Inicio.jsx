import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../paginas/Dashboard";
import Layout from "./Layout";

const Inicio = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="bg-gray-700">
        <Link to="/">
          <h2
            className="font-medium text-3xl text-center uppercase 
                    text-yellow-400 border-b-4 border-yellow-400"
          >
            Control Campeonato de fifa
          </h2>
        </Link>
      </div>
      <div className="mt-5 flex">
        <Layout />
        <Dashboard />
      </div>
    </div>
  );
};

export default Inicio;
