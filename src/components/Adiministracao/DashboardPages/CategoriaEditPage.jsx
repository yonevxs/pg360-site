import React, { useEffect, useState } from "react";
import axios from "axios";
import BotaoVoltar from "./BotaoVoltar"; 

function CategoriaEditPage({ onSelect }) {
  const [categorias, setCategorias] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/categorias")
      .then(res => setCategorias(res.data))
      .catch(err => console.error("Erro ao buscar categorias:", err));
  }, []);

  const handleUpdate = () => {
    axios.put(`http://localhost:8080/categorias/${selected.cdCategoria}`, selected)
      .then(() => {
        alert("Categoria atualizada com sucesso!");
      })
      .catch(err => console.error("Erro ao atualizar categoria:", err));
  };

  return (
    <div>
      <BotaoVoltar onSelect={onSelect} destino="categorias-home" />
      <h2 className="text-2xl font-bold mb-4">Editar Categoria</h2>
      <select
        className="border p-2 rounded mb-4"
        onChange={e => {
          const cat = categorias.find(c => c.cdCategoria === parseInt(e.target.value));
          setSelected(cat);
        }}
      >
        <option value="">Selecione uma categoria</option>
        {categorias.map(cat => (
          <option key={cat.cdCategoria} value={cat.cdCategoria}>{cat.nmCategoria}</option>
        ))}
      </select>

      {selected && (
        <div className="flex gap-4 mb-6">
          <input
            className="border p-2 rounded w-1/2"
            value={selected.nmCategoria}
            onChange={e => setSelected({ ...selected, nmCategoria: e.target.value })}
          />
          <input
            className="border p-2 rounded w-1/2"
            value={selected.dsCategoria}
            onChange={e => setSelected({ ...selected, dsCategoria: e.target.value })}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleUpdate}
          >
            Atualizar
          </button>
        </div>
      )}
    </div>
  );
}

export default CategoriaEditPage;
