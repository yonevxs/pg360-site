import React, { useEffect, useState } from "react";
import axios from "axios";
import BotaoVoltar from "./BotaoVoltar";

function EventoListPage({ onSelect }) {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/eventos")
      .then(res => setEventos(res.data))
      .catch(err => console.error("Erro ao buscar eventos:", err));
  }, []);

  return (
    <div>
      <BotaoVoltar onSelect={onSelect} destino="eventos-home" />
      <h2 className="text-2xl font-bold mb-4">Lista de Eventos</h2>
      <ul className="space-y-2">
        {eventos.map(ev => (
          <li key={ev.cdEvento} className="bg-white p-3 rounded shadow">
            <strong>{ev.nmEvento}</strong> — {ev.dsEvento}
            <br />
            <span>Início: {ev.dtInicioEvento} | Fim: {ev.dtFimEvento}</span>
            <br />
            <span>Local: {ev.local?.nmLocal} | Categoria: {ev.categoria?.nmCategoria}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventoListPage;
