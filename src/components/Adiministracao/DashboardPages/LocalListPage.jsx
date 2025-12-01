import React, { useEffect, useState } from "react";
import axios from "axios";
import BotaoVoltar from "./BotaoVoltar"; 

function LocalListPage({ onSelect }) {
  const [locais, setLocais] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/locais")
      .then(res => setLocais(res.data))
      .catch(err => console.error("Erro ao buscar locais:", err));
  }, []);

  return (
    <div>
      <BotaoVoltar onSelect={onSelect} destino="locais-home" />
      <h2 className="text-2xl font-bold mb-4">Lista de Locais</h2>
      <ul className="space-y-2">
        {locais.map(loc => (
          <li key={loc.cdLocal} className="bg-white p-3 rounded shadow">
            <strong>{loc.nmLocal}</strong> — {loc.dsLocal}
            <br />
            <span>{loc.endereco}</span>
            <br />
            <span>Categoria: {loc.categoria?.nmCategoria}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LocalListPage;
