import React from "react"
import {useForm} from 'react-hook-form'


function FormsAvaliacoes(){

    
    const API_URL = 'http://localhost:8080/avaliacoes'; 
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (formData) => {
        // Mapeando os dados do formulário (React) para o objeto Avaliacao (Spring Boot)
        const payload = {
            // Assumimos que a 'mensagem' do formulário é o 'dsAvaliacao' na API
            dsAvaliacao: formData.mensagem,
            
            // Adicionando um valor de 'nota'. Seu formulário precisa deste campo.
            // Para testar, estamos definindo uma nota padrão, mas você deve
            // adicionar um campo de input/select para nota no seu JSX.
            nota: 5, // Exemplo: Nota 5/5
            
            // Se o usuário/local/evento forem obrigatórios, você deve obtê-los
            // no formulário. Para esta demonstração, vamos ignorar os objetos FK 
            // e confiar na lógica de 'null check' do seu Controller.
            // Para passar os IDs, seria algo como:
            // usuario: { cdUsuario: 1 }, 
            // local: { cdLocal: 1 } 
            
            // Você pode querer salvar nome/email em uma lógica separada para Usuario,
            // ou incluí-los no dsAvaliacao se não quiser mapear a FK por agora.
        };
        
        console.log("Payload enviado para API:", payload);

        // 1. **Verificação de CORS:** Se o seu React estiver rodando em http://localhost:3030,
        // o @CrossOrigin(origins = "http://localhost:3030") no seu Controller funcionará.
        
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload), // Usamos o objeto 'payload' mapeado
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log("Avaliação criada com sucesso:", responseData);
                alert(`Obrigado pelo feedback, ${formData.nome}! Sua avaliação (ID: ${responseData.id || 'sem ID'} ) foi enviada.`);
                reset();
            } else {
                const errorText = await response.text();
                console.error("Erro na resposta da API:", response.status, errorText);
                alert(`Erro ao enviar feedback (${response.status}): ${errorText}`);
            }

        } catch (error) {
            console.error("Erro ao conectar com a API:", error);
            alert("Erro de rede: Não foi possível conectar com o servidor. Verifique se o Spring Boot está rodando.");
        }
    
    }
   
    return(
        <div className='flex justify-center items-center min-h-screen bg-gray-100 p-4'>'
            <form onSubmit={handleSubmit(onSubmit)} className="bg p-8 rounded-xl shadow-2xl w-full max-w-md space-y-6 border border-gray-200">

                <h2 className="text-3xl font-bold text-center text-gray-800">Envie seu Feedback</h2>

                <div>
                    <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-1">Digite seu Nome</label><br />
                    <input type="text" placeholder="Exemplo nome" className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out `}{...register('nome',{required : true})}/><br/><br />
                </div>

                <div>
                    <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-1">Digite seu Email</label><br/>
                    <input type="email" placeholder="Email@exemplo.com"className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out `}{...register("email",{required : true})}/>
                    <br /><br /> 
                </div>
                  
                <div>
                    <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-1">Informe seu FeedBack</label><br />
                    <textarea name="mensagem" placeholder="Digite seu FeedBack" rows="4"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out resize-none  'border-gray-300'}`} {...register("mensagem", {required: true})}/><br></br>
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Enviar</button>


            </form>
        
        </div>
    )
   
}
export default FormsAvaliacoes