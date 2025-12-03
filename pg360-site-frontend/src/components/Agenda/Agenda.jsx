import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import location from "../../assets/location.png";
import arrow from "../../assets/arrow.png";

const API_EVENTOS = "http://localhost:8080/eventos";

export default function Agenda() {
    const [dias, setDias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const response = await fetch(API_EVENTOS);
                if (!response.ok) throw new Error("Erro ao buscar eventos");

                const eventos = await response.json();

                // Agrupar eventos por data (dtInicioEvento)
                const mapaDias = {};

                eventos.forEach(ev => {
                    const data = new Date(ev.dtInicioEvento).toLocaleDateString("pt-BR");

                    if (!mapaDias[data]) {
                        mapaDias[data] = [];
                    }

                    mapaDias[data].push({
                        hora: new Date(ev.dtInicioEvento).toLocaleTimeString("pt-BR", {
                            hour: "2-digit",
                            minute: "2-digit"
                        }),
                        titulo: ev.nmEvento,
                        descricao: ev.dsEvento || "",
                        cdEvento: ev.cdEvento
                    });
                });

                // Converter em array no formato original da agenda
                const diasFormatados = Object.entries(mapaDias).map(([data, eventos]) => ({
                    data: `${data}`,
                    eventos
                }));

                setDias(diasFormatados);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEventos();
    }, []);

    if (loading) return <p className="text-center py-10">Carregando agenda...</p>;
    if (error) return <p className="text-center py-10 text-red-600">{error}</p>;

    if (dias.length === 0)
        return <p className="text-center py-10 text-gray-600">Nenhum evento encontrado.</p>;

    return (
        <div className="bg-gray-200 flex justify-center pt-6 pb-10 px-6">
            <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-4xl">

                {dias.map((dia, index) => (
                    <div key={index}>
                        <h2 className="text-lg font-semibold mb-4">{dia.data}</h2>

                        {dia.eventos.map((evento, idx) => (
                            <AgendaCard
                                key={idx}
                                hora={evento.hora}
                                titulo={evento.titulo}
                                descricao={evento.descricao}
                                id={evento.cdEvento}
                            />
                        ))}

                        {index < dias.length - 1 && (
                            <hr className="my-6 border-black" />
                        )}
                    </div>
                ))}

            </div>
        </div>
    );
}

function AgendaCard({ hora, titulo, descricao, id }) {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 transition">
            <div className="flex gap-4">
                <div className="bg-[#1D91CE] text-white font-bold px-4 py-2 rounded-md w-20 text-center flex items-center justify-center">
                    {hora}
                </div>

                <div>
                    <h3 className="font-bold">{titulo}</h3>
                    <p className="text-sm text-gray-600">{descricao}</p>

                    <div className="flex items-center mt-2">
                        <button
                            onClick={() => navigate(`/evento/${id}`)}
                            className="focus:outline-none cursor-pointer"
                        >
                        </button>
                    </div>
                </div>
            </div>

            <button
                onClick={() => navigate(`/evento/${id}`)}
                className="focus:outline-none cursor-pointer flex items-center justify-center"
            >
            </button>
        </div>
    );
}
