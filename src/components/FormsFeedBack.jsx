import React from "react"
import {useForm} from 'react-hook-form'


function FormsFeedBack(){

    const{register,handleSubmit} = useForm();

    const onSubmit = (data) =>{
        console.log("Dados enviados",data)
        alert(`Obrigado pelo feedback,${data.nome}!`)
    }
    
    return(
        
        <>
           <form onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="">Digite seu Nome</label><br />
                <input type="text" placeholder="Exemplo nome"{...register('nome',{required: true})}/><br/><br />

                <label htmlFor="">Digite seu Email</label><br/>
                <input type="email" placeholder="Email@exemplo.com"{...register("email",{required: true})}/>
                <br /><br />

                <label htmlFor="">Informe seu FeedBack</label><br />
                <textarea name="mensagem" id="mensagem" placeholder="Digite seu FeedBack" {...register("mensagem",{required: true})} ></textarea>

                <button type="submit">Enviar</button>
           </form>

        </>
    )
}
export default FormsFeedBack