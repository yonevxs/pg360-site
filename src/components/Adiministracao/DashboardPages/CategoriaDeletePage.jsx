import React, { useEffect, useState } from "react";
import axios from "axios";
import BotaoVoltar from "./BotaoVoltar"; 

function CategoriaDeletePage({ onSelect }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/categorias")
      .then(res => setCategorias(res.data))
      .catch(err => console.error("Erro ao buscar categorias:", err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/categorias/${id}`);
      alert("Categoria excluída com sucesso!");
      setCategorias(prev => prev.filter(c => c.cdCategoria !== id));
    } catch (err) {
      if (err.response && err.response.status === 409) {
        alert("Esta categoria não pode ser excluída porque está vinculada a um evento ou local.");
      } else {
        alert("Erro ao excluir categoria. Verifique se ela está em uso.");
      }
      console.error("Erro ao excluir categoria:", err);
    }
  };

  return (
    <div>
      <BotaoVoltar onSelect={onSelect} destino="categorias-home" />
      <h2 className="text-2xl font-bold mb-4">Excluir Categoria</h2>
      <ul className="space-y-2">
        {categorias.map(cat => (
          <li key={cat.cdCategoria} className="bg-white p-3 rounded shadow flex justify-between items-center">
            <div>
              <strong>{cat.nmCategoria}</strong> — {cat.dsCategoria}
            </div>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={() => handleDelete(cat.cdCategoria)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriaDeletePage;
