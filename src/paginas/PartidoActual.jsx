import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PartidoActual = () => {
  const [equipos, setEquipos] = useState([]);
  const [historial, setHistorial] = useState([]);
  const [estadoEquipo, setEstadoEquipo] = useState();
  const [estadoEquipo2, setEstadoEquipo2] = useState();
  const [resultado1, setResultado1] = useState();
  const [resultado2, setResultado2] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const obtenerEquiposAPI = async () => {
      try {
        const url = "http://localhost:4000/equipos";

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setEquipos(resultado);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerEquiposAPI();
  }, []);

  const onChangeSelect = (e) => {
    const selectedId = e.target.value;
    const selectedEstadoEquipo = equipos.filter(
      (equipo) => equipo.id == selectedId
    )[0];
    console.log(selectedEstadoEquipo);
    setEstadoEquipo(selectedEstadoEquipo);
  };

  useEffect(() => {
    setEstadoEquipo(equipos);
  }, []);

  const onChangeSelect2 = (e) => {
    const selectedId = e.target.value;
    const selectedEstadoEquipo2 = equipos.filter(
      (equipo) => equipo.id == selectedId
    )[0];
    console.log(selectedEstadoEquipo2);
    setEstadoEquipo2(selectedEstadoEquipo2);
  };

  useEffect(() => {
    setEstadoEquipo2(equipos);
  }, []);

  const handleSubmit = async () => {
    console.log(resultado1);
    console.log(resultado2);
    const aleatorio = parseInt(Math.random() * (10000 - 1) + 1);

    try {
      let respuesta;
      const url = "http://localhost:4000/historial";

      respuesta = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          id: aleatorio,
          local: resultado1,
          visitante: resultado2,
          nombreLocal: estadoEquipo.nombre,
          logoLocal: estadoEquipo.logo,
          nombreVisitante: estadoEquipo2.nombre,
          logoVisitante: estadoEquipo2.logo,
        }),
        headers: { "Content-Type": "application/json" },
      });
      console.log(respuesta);
      const resultado = await respuesta.json();
      setHistorial(resultado);
      navigate("/historial");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="font-medium text-5xl uppercase p-10">partido actual</h1>
      <div className="flex justify-between items-center">
        <div className="">
          <select
            className="ml-10 bg-gray-700 text-white font-medium border-2 
                     border-black text-2xl rounded-sm shadow-xl p-0.5
                       cursor-pointer"
            onChange={(e) => {
              onChangeSelect(e);
            }}
          >
            {equipos.map((equipo) => (
              <option
                key={equipo.id}
                equipo={equipo}
                value={equipo.id}
                id="local"
                name="local"
              >
                {equipo.nombre}
              </option>
            ))}
          </select>
          <div className="mt-5 ml-10 ">
            {estadoEquipo ? <img src={estadoEquipo?.logo} width={200} /> : ""}
          </div>
          <label className="font-medium text-xl uppercase ml-10 ">
            Goles Anotados:
          </label>
          <input
            className="w-10 bg-gray-700 text-yellow-400 font-medium text-xl text-center border-2 border-black"
            type="number"
            name="golesLocal"
            value={resultado1}
            onChange={(e) => setResultado1(e.target.value)}
          />
        </div>
        <div>
          <p className="font-medium text-5xl ml-10">VS</p>
          <button
            className="bg-gray-700 text-white font-medium p-2 uppercase mt-3 rounded-lg
                       hover:bg-yellow-400 cursor-pointer duration-500 hover:shadow-xl
                       border-b-4 border-l-4 border-black hover:border-yellow-600 hover:text-black"
            onClick={handleSubmit}
          >
            Fin del partido
          </button>
        </div>

        <div className="mr-10">
          <select
            className=" bg-gray-700 text-white font-medium text-2xl border-2 
                        border-black rounded-sm shadow-xl p-0.5 cursor-pointer"
            onChange={(e) => {
              onChangeSelect2(e);
            }}
          >
            {equipos.map((equipo2) => (
              <option
                key={equipo2.id}
                equipo2={equipo2}
                value={equipo2.id}
                id="visitante"
                name="visitante"
              >
                {equipo2.nombre}
              </option>
            ))}
          </select>
          <div className="mt-5 ml-10 ">
            {estadoEquipo2 ? <img src={estadoEquipo2?.logo} width={200} /> : ""}
          </div>
          <label className="font-medium text-xl uppercase">
            Goles Anotados:
          </label>
          <input
            className="w-10 bg-gray-700 text-yellow-400 font-medium border-2 border-black text-xl text-center"
            type="number"
            name="golesVisitante"
            value={resultado2}
            onChange={(e) => setResultado2(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default PartidoActual;
