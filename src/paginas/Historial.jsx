import React, { useState } from "react";
import { useEffect } from "react";

const Historial = () => {
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    const obtenerHistorialAPI = async () => {
      try {
        const url = "http://localhost:4000/historial";

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setHistorial(resultado);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerHistorialAPI();
  }, []);

  return (
    <div>
      <h1 className="font-medium text-5xl uppercase p-10">historial</h1>
      <div>
        {historial.map((historia) => (
          <div
            className="bg-gray-700 mb-0.5 ml-5 mr-5 border-b-4 border-l-8 p-2 border-black 
                         flex items-center border-l-yellow-400 hover:bg-gray-600 duration-700
                         font-medium text-xl text-white rounded-sm justify-center"
          >
            <p className="mr-5">{historia.nombreLocal}</p>
            <img src={historia.logoLocal} width={40} />
            <p className="ml-10 text-3xl">{historia.local}</p>

            <p className="ml-10 mr-10">VS</p>

            <p className="mr-10 text-3xl">{historia.visitante}</p>
            <img src={historia.logoVisitante} width={40} />
            <p className="ml-5">{historia.nombreVisitante}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Historial;
