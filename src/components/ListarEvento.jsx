import React, { useState, useEffect } from 'react';
import { set } from 'react-hook-form';
import { Await } from 'react-router-dom';

import { Loader2 } from 'lucide-react';

const apiEventos = "http://localhost:8080/eventos"


function CardEvento({ evento }) {
    const { 
        nmEvento,           
        dsEvento,           
        dtInicioEvento,     
        dtFimEvento,
        imagens,
        local 
    } = evento;

    const dataInicio = new Date(dtInicioEvento).toLocaleDateString('pt-BR');
    const dataFim = new Date(dtFimEvento).toLocaleDateString('pt-BR');
    const imageUrl = imagens && imagens.length > 0 ? imagens[0] : null;

    const nomeLocal = local ? local.nmLocal : "Local não informado";
    const enderecoCompleto = local ? local.endereco : "Endereço não informado";

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl w-full max-w-sm mx-auto my-4">
            
            {imageUrl ? (
                <img 
                    src={imageUrl} 
                    alt={`Imagem do evento ${nmEvento}`} 
                    className="w-full h-48 object-cover"
                />
            ) : (
                <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
                    FOTO DO EVENTO
                </div>
            )}

           <div className="p-4 flex flex-col items-center text-center">
                
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2 leading-tight">
                    {nmEvento}
                </h3>
                
                <p className="text-gray-700 text-sm mb-4 px-2 line-clamp-3">
                    {dsEvento}
                </p> 

                {(nomeLocal !== "Local não informado" || enderecoCompleto !== "Endereço não informado") && (
                    <div className="mt-2">
                        
                        <div className="flex items-center justify-center text-gray-900 mb-1">
                            <svg className="w-5 h-5 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span className="text-base font-bold">{nomeLocal}</span>
                        </div>
                        
                        <p className="text-gray-600 text-sm italic px-2">
                            {enderecoCompleto}
                        </p>
                    </div>
                )}
            </div>

            <div className="p-4 bg-blue-600 text-white text-center">
                <p className="font-semibold text-lg">Início: {dataInicio}</p>
                <p className="font-semibold text-lg">Fim: {dataFim}</p>
            </div>
        </div>
    );
}

function ListarEvento() {
    const [eventos, setEventos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const response = await fetch(apiEventos);
                
                if (!response.ok) {
                    throw new Error(`Erro HTTP: Status ${response.status}`);
                }

                const data = await response.json(); 
                setEventos(data); 
            } catch (err) {
                console.error("Erro ao buscar eventos:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEventos();
    }, []); 

    if (loading) return (
        <div className="w-full">
            <header className="w-full bg-[#1D91CE] border-b-4 border-yellow-400 shadow-md py-4 mb-8">
                <h1 className="text-center text-white text-2xl md:text-3xl font-bold uppercase tracking-wide">
                    Acompanhe os próximos eventos
                </h1>
            </header>
            <div className="flex justify-center items-center py-20">
                <Loader2 className="animate-spin text-blue-500" size={48} />
                <span className="ml-2 text-xl text-gray-600">Carregando atrações...</span>
            </div>
        </div>
    );

    if (error) return (
        <div className="w-full">
            <header className="w-full bg-[#1D91CE] border-b-4 border-yellow-400 shadow-md py-4 mb-8">
                <h1 className="text-center text-white text-2xl md:text-3xl font-bold uppercase tracking-wide">
                    Acompanhe os próximos eventos
                </h1>
            </header>
            <div className="container mx-auto p-4">
                <div className="text-center text-red-500 py-10 bg-red-50 rounded-lg">
                    <p>Erro ao carregar os eventos: {error}</p>
                </div>
            </div>
        </div>
    );
    
    if (eventos.length === 0) return (
        <div className="w-full">
            <header className="w-full bg-[#1D91CE] border-b-4 border-yellow-400 shadow-md py-4 mb-8">
                <h1 className="text-center text-white text-2xl md:text-3xl font-bold uppercase tracking-wide">
                    Acompanhe os próximos eventos
                </h1>
            </header>
            <div className="text-center p-8 text-lg text-gray-700">Nenhum evento encontrado no momento.</div>
        </div>
    );

    const containerClasses = eventos.length === 1 
        ? "flex justify-center" 
        : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6";
        
    return (
        <div className="w-full"> 
            
            <header className="w-full bg-[#1D91CE] border-b-4 border-yellow-400 shadow-md py-4 mb-8">
                <h1 className="text-center text-white text-2xl md:text-3xl font-bold uppercase tracking-wide">
                    Acompanhe os próximos eventos
                </h1>
            </header>
            
            <div className="container mx-auto p-4">
                <div className={containerClasses}>
                    {eventos.map(evento => (
                        <CardEvento key={evento.cdEvento} evento={evento} />
                    ))}
                </div>
            </div>
            
        </div>
    );
}
export default ListarEvento