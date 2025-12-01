import React, { useEffect, useState } from "react";
import axios from "axios";
import BotaoVoltar from "./BotaoVoltar";

function EventoDeletePage({ onSelect }) {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/eventos")
      .then(res => setEventos(res.data))
      .catch(err => console.error("Erro ao buscar eventos:", err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/eventos/${id}`)
      .then(() => {
        alert("Evento excluído com sucesso!");
        setEventos(eventos.filter(ev => ev.cdEvento !== id));
      })
      .catch(err => console.error("Erro ao excluir evento:", err));
  };

  return (
    <div>
      <BotaoVoltar onSelect={onSelect} destino="eventos-home" />
      <h2 className="text-2xl font-bold mb-4">Excluir Evento</h2>
      <ul className="space-y-2">
        {eventos.map(ev => (
          <li key={ev.cdEvento} className="bg-white p-3 rounded shadow flex justify-between items-center">
            <div>
              <strong>{ev.nmEvento}</strong> — {ev.dsEvento}
            </div>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={() => handleDelete(ev.cdEvento)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventoDeletePage;
