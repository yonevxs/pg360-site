import React, { useEffect, useState } from "react";
import axios from "axios";
import BotaoVoltar from "./BotaoVoltar"; 

function CategoriaListPage({ onSelect }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/categorias")
      .then(res => setCategorias(res.data))
      .catch(err => console.error("Erro ao buscar categorias:", err));
  }, []);

  return (
    <div>
      <BotaoVoltar onSelect={onSelect} destino="categorias-home" />
      <h2 className="text-2xl font-bold mb-4">Lista de Categorias</h2>
      <ul className="space-y-2">
        {categorias.map(cat => (
          <li key={cat.cdCategoria} className="bg-white p-3 rounded shadow">
            <strong>{cat.nmCategoria}</strong> — {cat.dsCategoria}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriaListPage;
