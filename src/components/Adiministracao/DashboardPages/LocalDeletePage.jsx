import React, { useEffect, useState } from "react";
import axios from "axios";
import BotaoVoltar from "./BotaoVoltar"; 

function LocalDeletePage({ onSelect }) {
  const [locais, setLocais] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/locais")
      .then(res => setLocais(res.data))
      .catch(err => console.error("Erro ao buscar locais:", err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/locais/${id}`);
      alert("Local excluído com sucesso!");
      setLocais(prev => prev.filter(l => l.cdLocal !== id));
    } catch (err) {
      if (err.response && err.response.status === 409) {
        alert("Este local não pode ser excluído porque está vinculado a um evento.");
      } else {
        alert("Erro ao excluir local. Verifique se ele está em uso.");
      }
      console.error("Erro ao excluir local:", err);
    }
  };

  return (
    <div>
      <BotaoVoltar onSelect={onSelect} destino="locais-home" />
      <h2 className="text-2xl font-bold mb-4">Excluir Local</h2>
      <ul className="space-y-2">
        {locais.map(loc => (
          <li key={loc.cdLocal} className="bg-white p-3 rounded shadow flex justify-between items-center">
            <div>
              <strong>{loc.nmLocal}</strong> — {loc.dsLocal}
              <br />
              <span>{loc.endereco}</span>
              <br />
              <span>Categoria: {loc.categoria?.nmCategoria}</span>
            </div>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={() => handleDelete(loc.cdLocal)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LocalDeletePage;
