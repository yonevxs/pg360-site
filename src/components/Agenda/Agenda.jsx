import { useNavigate } from "react-router-dom";
import location from "../../assets/location.png";
import arrow from "../../assets/arrow.png";

export default function Agenda() {

    const dias = [
        {
            data: "15/11/2025 - SEXTA FEIRA",
            eventos: [
                { hora: "18:00", titulo: "Título de Exemplo", descricao: "Texto Descritivo de Exemplo" },
                { hora: "19:00", titulo: "Título de Exemplo", descricao: "Texto Descritivo de Exemplo" },
                { hora: "20:00", titulo: "Título de Exemplo", descricao: "Texto Descritivo de Exemplo" },
                { hora: "20:00", titulo: "Título de Exemplo", descricao: "Texto Descritivo de Exemplo" },
            ]
        },
        {
            data: "22/11/2025 - SÁBADO",
            eventos: [
                { hora: "14:30", titulo: "Título de Exemplo", descricao: "Texto Descritivo de Exemplo" },
                { hora: "16:30", titulo: "Título de Exemplo", descricao: "Texto Descritivo de Exemplo" },
                { hora: "17:00", titulo: "Título de Exemplo", descricao: "Texto Descritivo de Exemplo" },
            ]
        }
    ];

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


function AgendaCard({ hora, titulo, descricao }) {

    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-100 transition">
            <div className="flex gap-4">
                <div className="bg-blue-600 text-white font-bold px-4 py-2 rounded-md w-20 text-center flex items-center justify-center">
                    {hora}
                </div>

                <div>
                    <h3 className="font-bold">{titulo}</h3>
                    <p className="text-sm text-gray-600">
                        {descricao}
                    </p>

                    <div className="flex items-center mt-2">
                        <button
                            onClick={() => navigate("/")}
                            className="focus:outline-none cursor-pointer">
                            <img
                                src={location}
                                alt="Localização"
                                className="w-5 h-5"
                            />
                        </button>
                    </div>
                </div>
            </div>

            <button
                onClick={() => navigate("/")}
                className="focus:outline-none cursor-pointer flex items-center justify-center">
                <img
                    src={arrow}
                    alt="Abrir"
                    className="w-6 h-6"
                />
            </button>
        </div>
    );
}
