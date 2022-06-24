import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import campo from "../img/campo.png";
import torneo from "../img/campeonato.png";
import historial from "../img/historial.png";

const Layout = () => {
  return (
    <div className="md:w-2/2 lg:w-2/2 ">
      <div className="shadow-2xl">
        <nav>
          <Link
            className="bg-gray-700 shadow-md py-10 px-5 opacity-95 
                       border-black rounded-none hover:bg-yellow-400 
                         cursor-pointer duration-700 text-white flex justify-between"
            to="/partido"
          >
            <h2 className="font-medium text-2xl uppercase">Partido actual</h2>

            <img width={100} src={campo} />
            <p className="absolute my-24">Marcador</p>
          </Link>

          <Link
            className="bg-gray-700 shadow-md py-10 px-5 opacity-95 border-t-2
                       border-black rounded-none hover:bg-yellow-400 
                         cursor-pointer duration-700 text-white flex justify-between"
            to="/historial"
          >
            <h2 className="font-medium text-2xl uppercase">Historial</h2>
            <img width={100} src={historial} />
            <p className="absolute my-24">conteo de partidos</p>
          </Link>

          <Link
            className="bg-gray-700 shadow-md py-10 px-5 opacity-95 border-t-2
                       border-black rounded-none hover:bg-yellow-400 
                         cursor-pointer duration-700 text-white flex justify-between"
            to="torneo"
          >
            <h2 className="font-medium text-2xl uppercase ">Torneos jugados</h2>
            <img width={100} src={torneo} />
            <p className="absolute my-24">conteo de torneos</p>
          </Link>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
