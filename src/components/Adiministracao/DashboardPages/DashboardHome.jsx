import React from "react";

function DashboardHome({ onSelect }) {
  const modulos = [
    { chave: "eventos-home", label: "Eventos" },
    { chave: "locais-home", label: "Locais" },
    { chave: "categorias-home", label: "Categorias" },
  ];

  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {modulos.map(mod => (
        <button
          key={mod.chave}
          onClick={() => onSelect(mod.chave)}
          className="bg-blue-600 text-white font-bold py-6 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          {mod.label}
        </button>
      ))}
    </div>
  );
}

export default DashboardHome;
