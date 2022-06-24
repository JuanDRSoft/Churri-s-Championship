import { useState } from "react";
import Layout from "./Layout/Layout";
import fondo from "./img/estadio.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Historial from "./paginas/Historial";
import Inicio from "./Layout/Inicio";
import Partido from "./paginas/PartidoActual";
import Torneos from "./paginas/Torneos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}>
          <Route path="historial" />
          <Route path="torneo" />
          <Route path="partido" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
