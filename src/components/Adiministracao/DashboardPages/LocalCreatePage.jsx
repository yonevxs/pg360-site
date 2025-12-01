import React, { useEffect, useState } from "react";
import axios from "axios";
import BotaoVoltar from "./BotaoVoltar"; 

function LocalCreatePage({ onSelect }) {
  const [categorias, setCategorias] = useState([]);
  const [form, setForm] = useState({
    nmLocal: "",
    dsLocal: "",
    endereco: "",
    latitude: "",
    longitude: "",
    hrFuncionamento: "",
    categoria: { cdCategoria: "" },
    imagens: []
  });

  useEffect(() => {
    axios.get("http://localhost:8080/categorias")
      .then(res => setCategorias(res.data))
      .catch(err => console.error("Erro ao buscar categorias:", err));
  }, []);

  const handleSubmit = () => {
    axios.post("http://localhost:8080/locais", form)
      .then(() => {
        alert("Local cadastrado com sucesso!");
        setForm({
          nmLocal: "",
          dsLocal: "",
          endereco: "",
          latitude: "",
          longitude: "",
          hrFuncionamento: "",
          categoria: { cdCategoria: "" },
          imagens: []
        });
      })
      .catch(err => console.error("Erro ao cadastrar local:", err));
  };

  return (
    <div>
      <BotaoVoltar onSelect={onSelect} destino="locais-home" />
      <h2 className="text-2xl font-bold mb-4">Cadastrar Local</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input className="border p-2 rounded" placeholder="Nome" value={form.nmLocal} onChange={e => setForm({ ...form, nmLocal: e.target.value })}/>
        <input className="border p-2 rounded" placeholder="Descrição" value={form.dsLocal} onChange={e => setForm({ ...form, dsLocal: e.target.value })}/>
        <input className="border p-2 rounded" placeholder="Endereço" value={form.endereco} onChange={e => setForm({ ...form, endereco: e.target.value })}/>
        <input className="border p-2 rounded" placeholder="Latitude" value={form.latitude} onChange={e => setForm({ ...form, latitude: e.target.value })}/>
        <input className="border p-2 rounded" placeholder="Longitude" value={form.longitude} onChange={e => setForm({ ...form, longitude: e.target.value })}/>
        <input className="border p-2 rounded" placeholder="Horário de Funcionamento" value={form.hrFuncionamento} onChange={e => setForm({ ...form, hrFuncionamento: e.target.value })}/>

        <select className="border p-2 rounded" value={form.categoria.cdCategoria} onChange={e => setForm({ ...form, categoria: { cdCategoria: e.target.value } })}>
          <option value="">Selecione uma Categoria</option>
          {categorias.map(cat => (
            <option key={cat.cdCategoria} value={cat.cdCategoria}>{cat.nmCategoria}</option>
          ))}
        </select>

        <input className="border p-2 rounded col-span-2" placeholder="Imagem URL" onChange={e => setForm({ ...form, imagens: [e.target.value] })}/>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 col-span-2" onClick={handleSubmit}>Cadastrar</button>
      </div>
    </div>
  );
}

export default LocalCreatePage;
