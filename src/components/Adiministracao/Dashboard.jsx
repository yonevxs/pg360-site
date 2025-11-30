import { useState, useEffect } from "react";
import Table from "../Table.jsx";

export default function Dashboard() {
    const [selected, setSelected] = useState("eventos");
    const [data, setData] = useState([]);

    const endpoints = {
        eventos: "http://localhost:8080/eventos",
        locais: "http://localhost:8080/locais",
        categorias: "http://localhost:8080/categorias",
        usuarios: "http://localhost:8080/usuarios"
    };

    const tableColumns = {
        eventos: ["ID", "Nome", "Descrição", "Início", "Fim"],
        locais: ["ID", "Nome", "Endereço", "Horário"],
        categorias: ["ID", "Nome", "Descrição"],
        usuarios: ["ID", "Nome", "Email"]
    };

    useEffect(() => {
        fetch(endpoints[selected])
            .then(res => res.json())
            .then(dt => setData(dt))
            .catch(err => console.error("Erro:", err));
    }, [selected]);

    const parsedData = {
        eventos: data.map(e => ({
            id: e.cdEvento,
            nome: e.nmEvento,
            desc: e.dsEvento,
            inicio: e.dtInicioEvento,
            fim: e.dtFimEvento
        })),
        locais: data.map(l => ({
            id: l.cdLocal,
            nome: l.nmLocal,
            endereco: l.endereco,
            hr: l.hrFuncionamento
        })),
        categorias: data.map(c => ({
            id: c.cdCategoria,
            nome: c.nmCategoria,
            desc: c.dsCategoria
        })),
        usuarios: data.map(u => ({
            id: u.cdUsuario,
            nome: u.nmUsuario,
            email: u.emailUsuario
        }))
    };

    return (
        <div className="flex h-screen bg-gray-100">

            <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col gap-6">
                <h1 className="text-2xl font-bold mb-4">Dashboard PG360</h1>

                {["eventos", "locais", "categorias", "usuarios"].map(item => (
                    <button
                        key={item}
                        onClick={() => setSelected(item)}
                        className={`p-2 text-left rounded 
                        ${selected === item ? "bg-blue-600" : "hover:bg-gray-700"}`}
                    >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                ))}
            </aside>

            <main className="flex-1 p-6 overflow-y-auto">
                <h2 className="text-3xl font-bold mb-4 capitalize">{selected}</h2>

                <Table 
                    columns={tableColumns[selected]}
                    data={parsedData[selected]}
                />
            </main>
        </div>
    );
}
