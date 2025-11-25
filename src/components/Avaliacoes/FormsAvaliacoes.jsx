
import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';

function Notification({ message, type, onClose }) {
    const baseStyles = "fixed top-5 right-5 p-4 rounded-lg shadow-lg text-white transition-all duration-300 ease-in-out z-50";
    const typeStyles = type === 'success' 
        ? 'bg-green-500' 
        : 'bg-red-500';

    return (
        <div className={`${baseStyles} ${typeStyles}`} role="alert">
            <span>{message}</span>
            <button 
                onClick={onClose}
                className="ml-4 font-bold text-lg leading-none hover:opacity-75"
                aria-label="Fechar"
            >
                &times;
            </button>
        </div>
    );
}

function FormsAvaliacoes() {
    const API_URL = 'http://localhost:8080/feedback';
    const { register, handleSubmit, reset } = useForm();
    
    const [notification, setNotification] = useState({
        show: false,
        message: '',
        type: 'success', 
    });

    useEffect(() => {
        if (notification.show) {
            const timer = setTimeout(() => {
                setNotification(prev => ({ ...prev, show: false }));
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [notification]);

    const onSubmit = async (formData) => {
        const payload = {
            nmPessoa: formData.nome,
            emailPessoa: formData.email,
            dsAvaliacao: formData.mensagem,
        };

        console.log("Payload enviado para API:", payload);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log("Avaliação criada com sucesso:", responseData);
                
                setNotification({
                    show: true,
                    message: `Obrigado pelo feedback, ${formData.nome}! Sua avaliação foi enviada.`,
                    type: 'success',
                });
                
                reset();
            } else {
                const errorText = await response.text();
                console.error("Erro na resposta da API:", response.status, errorText);
                
                setNotification({
                    show: true,
                    message: `Erro ao enviar feedback (${response.status}). Tente novamente.`,
                    type: 'error',
                });
            }

        } catch (error) {
            console.error("Erro ao conectar com a API:", error);
            
            setNotification({
                show: true,
                message: "Erro de rede: Não foi possível conectar ao servidor.",
                type: 'error',
            });
        }
    }

    return (
        <div className='relative flex justify-center items-center min-h-screen bg-gray-100 p-4'>
            
            {notification.show && (
                <Notification 
                    message={notification.message} 
                    type={notification.type} 
                    onClose={() => setNotification(prev => ({ ...prev, show: false }))} 
                />
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md space-y-6 border border-gray-200">

                <h3 className="text-center text-2xl md:text-3xl font-bold text-blue-800 mb-8">Deixe sua Avaliação</h3>

                <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Digite seu Nome</label><br />
                    <input 
                        id="nome"
                        type="text" 
                        placeholder="Exemplo nome" 
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out`}
                        {...register('nome', { required: true })}
                    /><br /><br />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Digite seu Email</label><br />
                    <input 
                        id="email"
                        type="email" 
                        placeholder="Email@exemplo.com" 
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out`}
                        {...register("email", { required: true })}
                    />
                    <br /><br />
                </div>

                <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">Informe seu FeedBack</label><br />
                    <textarea 
                        id="mensagem"
                        name="mensagem" 
                        placeholder="Digite seu FeedBack" 
                        rows="4"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out resize-none 'border-gray-300'`} 
                        {...register("mensagem", { required: true })}
                    /><br />
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Enviar</button>

            </form>

        </div>
    )
}

export default FormsAvaliacoes;