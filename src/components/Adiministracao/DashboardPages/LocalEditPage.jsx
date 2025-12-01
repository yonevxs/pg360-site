import React, { useEffect, useState } from "react";
import axios from "axios";
import BotaoVoltar from "./BotaoVoltar"; 

function LocalEditPage({ onSelect }) {
  const [locais, setLocais] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/locais").then(res => setLocais(res.data));
    axios.get("http://localhost:8080/categorias").then(res => setCategorias(res.data));
  }, []);

  const handleUpdate = () => {
    axios.put(`http://localhost:8080/locais/${selected.cdLocal}`, selected)
      .then(() => {
        alert("Local atualizado com sucesso!");
      })
      .catch(err => console.error("Erro ao atualizar local:", err));
  };

  return (
    <div>
      <BotaoVoltar onSelect={onSelect} destino="locais-home" />
      <h2 className="text-2xl font-bold mb-4">Editar Local</h2>
      <select
        className="border p-2 rounded mb-4"
        onChange={e => {
          const loc = locais.find(l => l.cdLocal === parseInt(e.target.value));
          setSelected(loc);
        }}
      >
        <option value="">Selecione um local</option>
        {locais.map(loc => (
          <option key={loc.cdLocal} value={loc.cdLocal}>{loc.nmLocal}</option>
        ))}
      </select>

      {selected && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          <input className="border p-2 rounded" value={selected.nmLocal} onChange={e => setSelected({ ...selected, nmLocal: e.target.value })}/>
          <input className="border p-2 rounded" value={selected.dsLocal} onChange={e => setSelected({ ...selected, dsLocal: e.target.value })}/>
          <input className="border p-2 rounded" value={selected.endereco} onChange={e => setSelected({ ...selected, endereco: e.target.value })}/>
          <input className="border p-2 rounded" value={selected.latitude} onChange={e => setSelected({ ...selected, latitude: e.target.value })}/>
          <input className="border p-2 rounded" value={selected.longitude} onChange={e => setSelected({ ...selected, longitude: e.target.value })}/>
          <input className="border p-2 rounded" value={selected.hrFuncionamento} onChange={e => setSelected({ ...selected, hrFuncionamento: e.target.value })}/>

          <select className="border p-2 rounded" value={selected.categoria?.cdCategoria} onChange={e => setSelected({ ...selected, categoria: { cdCategoria: e.target.value } })}>
            <option value="">Selecione uma Categoria</option>
            {categorias.map(cat => <option key={cat.cdCategoria} value={cat.cdCategoria}>{cat.nmCategoria}</option>)}
          </select>

          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 col-span-2" onClick={handleUpdate}>
            Atualizar Local
          </button>
        </div>
      )}
    </div>
  );
}

export default LocalEditPage;
