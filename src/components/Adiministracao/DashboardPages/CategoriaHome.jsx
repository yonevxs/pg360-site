import React from "react";
import BotaoVoltar from "./BotaoVoltar"; 

function CategoriaHome({ onSelect }) {
  const botoes = [
    { chave: "categorias-create", label: "Cadastrar Categoria" },
    { chave: "categorias-list", label: "Listar Categorias" },
    { chave: "categorias-edit", label: "Editar Categoria" },
    { chave: "categorias-delete", label: "Excluir Categoria" },
  ];

  return (
    <div>
      <BotaoVoltar onSelect={onSelect} destino="home" />
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Gerenciar Categorias</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {botoes.map(btn => (
          <button
            key={btn.chave}
            onClick={() => onSelect(btn.chave)}
            className="bg-blue-500 text-white font-semibold py-4 px-2 rounded-lg shadow hover:bg-blue-600 transition"
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoriaHome;
