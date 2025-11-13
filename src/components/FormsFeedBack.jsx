import React from "react"
import {useForm} from 'react-hook-form'


function FormsFeedBack(){

    const{register,handleSubmit,reset} = useForm();

    const onSubmit = (data) =>{
        console.log("Dados enviados",data)
        alert(`Obrigado pelo feedback,${data.nome}!`)
        reset();
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
export default FormsFeedBack