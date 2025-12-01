import React, { useEffect, useState } from "react";
import axios from "axios";
import BotaoVoltar from "./BotaoVoltar";

function EventoEditPage({ onSelect }) {
  const [eventos, setEventos] = useState([]);
  const [locais, setLocais] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/eventos").then(res => setEventos(res.data));
    axios.get("http://localhost:8080/locais").then(res => setLocais(res.data));
    axios.get("http://localhost:8080/categorias").then(res => setCategorias(res.data));
  }, []);

  const handleUpdate = () => {
    axios.put(`http://localhost:8080/eventos/${selected.cdEvento}`, selected)
      .then(() => {
        alert("Evento atualizado com sucesso!");
      })
      .catch(err => console.error("Erro ao atualizar evento:", err));
  };

  return (
    <div>
      <BotaoVoltar onSelect={onSelect} destino="eventos-home" />
      <h2 className="text-2xl font-bold mb-4">Editar Evento</h2>
      <select
        className="border p-2 rounded mb-4"
        onChange={e => {
          const ev = eventos.find(ev => ev.cdEvento === parseInt(e.target.value));
          setSelected(ev);
        }}
      >
        <option value="">Selecione um evento</option>
        {eventos.map(ev => (
          <option key={ev.cdEvento} value={ev.cdEvento}>{ev.nmEvento}</option>
        ))}
      </select>

      {selected && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          <input className="border p-2 rounded" value={selected.nmEvento} onChange={e => setSelected({ ...selected, nmEvento: e.target.value })}/>
          <input className="border p-2 rounded" value={selected.dsEvento} onChange={e => setSelected({ ...selected, dsEvento: e.target.value })}/>
          <input className="border p-2 rounded" type="date" value={selected.dtInicioEvento} onChange={e => setSelected({ ...selected, dtInicioEvento: e.target.value })}/>
          <input className="border p-2 rounded" type="date" value={selected.dtFimEvento} onChange={e => setSelected({ ...selected, dtFimEvento: e.target.value })}/>

          <select className="border p-2 rounded" value={selected.local?.cdLocal} onChange={e => setSelected({ ...selected, local: { cdLocal: e.target.value } })}>
            <option value="">Selecione um Local</option>
            {locais.map(loc => <option key={loc.cdLocal} value={loc.cdLocal}>{loc.nmLocal}</option>)}
          </select>

          <select className="border p-2 rounded" value={selected.categoria?.cdCategoria} onChange={e => setSelected({ ...selected, categoria: { cdCategoria: e.target.value } })}>
            <option value="">Selecione uma Categoria</option>
            {categorias.map(cat => <option key={cat.cdCategoria} value={cat.cdCategoria}>{cat.nmCategoria}</option>)}
          </select>

          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 col-span-2" onClick={handleUpdate}>
            Atualizar Evento
          </button>
        </div>
      )}
    </div>
  );
}

export default EventoEditPage;
