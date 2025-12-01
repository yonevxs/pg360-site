import React, { useState } from "react";
import axios from "axios";
import BotaoVoltar from "./BotaoVoltar"; 

function CategoriaCreatePage({ onSelect }) {
  const [form, setForm] = useState({
    nmCategoria: "",
    dsCategoria: ""
  });

  const handleSubmit = () => {
    axios.post("http://localhost:8080/categorias", form)
      .then(() => {
        alert("Categoria cadastrada com sucesso!");
        setForm({ nmCategoria: "", dsCategoria: "" });
      })
      .catch(err => console.error("Erro ao cadastrar categoria:", err));
  };

  return (
    <div>
      <BotaoVoltar onSelect={onSelect} destino="categorias-home" />
      <h2 className="text-2xl font-bold mb-4">Cadastrar Categoria</h2>
      <div className="flex gap-4 mb-6">
        <input
          className="border p-2 rounded w-1/2"
          placeholder="Nome da Categoria"
          value={form.nmCategoria}
          onChange={e => setForm({ ...form, nmCategoria: e.target.value })}
        />
        <input
          className="border p-2 rounded w-1/2"
          placeholder="Descrição"
          value={form.dsCategoria}
          onChange={e => setForm({ ...form, dsCategoria: e.target.value })}
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={handleSubmit}
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default CategoriaCreatePage;
