import React from "react";

function BotaoVoltar({ onSelect, destino }) {
  return (
    <button
      onClick={() => onSelect(destino)}
      className="mb-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
    >
      ← Voltar
    </button>
  );
}

export default BotaoVoltar;
