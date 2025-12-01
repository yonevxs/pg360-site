import React, { useEffect, useState } from "react";
import axios from "axios";
import BotaoVoltar from "./BotaoVoltar"; 

function EventoCreatePage({ onSelect }) {
  const [locais, setLocais] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [form, setForm] = useState({
    nmEvento: "",
    dsEvento: "",
    dtInicioEvento: "",
    dtFimEvento: "",
    local: { cdLocal: "" },
    categoria: { cdCategoria: "" },
    imagens: []
  });

  useEffect(() => {
    axios.get("http://localhost:8080/locais").then(res => setLocais(res.data));
    axios.get("http://localhost:8080/categorias").then(res => setCategorias(res.data));
  }, []);

  const handleSubmit = () => {
    axios.post("http://localhost:8080/eventos", form)
      .then(() => {
        alert("Evento cadastrado com sucesso!");
        setForm({
          nmEvento: "",
          dsEvento: "",
          dtInicioEvento: "",
          dtFimEvento: "",
          local: { cdLocal: "" },
          categoria: { cdCategoria: "" },
          imagens: []
        });
      })
      .catch(err => console.error("Erro ao cadastrar evento:", err));
  };

  return (
    <div>
      <BotaoVoltar onSelect={onSelect} destino="eventos-home" />
      <h2 className="text-2xl font-bold mb-4">Cadastrar Evento</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input
          className="border p-2 rounded"
          placeholder="Nome"
          value={form.nmEvento}
          onChange={e => setForm({ ...form, nmEvento: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Descrição"
          value={form.dsEvento}
          onChange={e => setForm({ ...form, dsEvento: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          type="date"
          value={form.dtInicioEvento}
          onChange={e => setForm({ ...form, dtInicioEvento: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          type="date"
          value={form.dtFimEvento}
          onChange={e => setForm({ ...form, dtFimEvento: e.target.value })}
        />
        <select
          className="border p-2 rounded"
          value={form.local.cdLocal}
          onChange={e => setForm({ ...form, local: { cdLocal: e.target.value } })}
        >
          <option value="">Selecione um Local</option>
          {locais.map(loc => (
            <option key={loc.cdLocal} value={loc.cdLocal}>
              {loc.nmLocal}
            </option>
          ))}
        </select>
        <select
          className="border p-2 rounded"
          value={form.categoria.cdCategoria}
          onChange={e => setForm({ ...form, categoria: { cdCategoria: e.target.value } })}
        >
          <option value="">Selecione uma Categoria</option>
          {categorias.map(cat => (
            <option key={cat.cdCategoria} value={cat.cdCategoria}>
              {cat.nmCategoria}
            </option>
          ))}
        </select>
        <input
          className="border p-2 rounded col-span-2"
          placeholder="Imagem URL"
          onChange={e => setForm({ ...form, imagens: [e.target.value] })}
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 col-span-2"
          onClick={handleSubmit}
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
}

export default EventoCreatePage;
