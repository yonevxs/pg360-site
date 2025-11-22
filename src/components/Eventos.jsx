import Navbar from "./Navbar";
import React from "react";
import Footer from "./Footer";  
import ListarEvento from "./ListarEvento";
function Eventos(){
    return(
        <div className="min-h-screen bg-white relative scroll-smooth flex flex-col">
            <Navbar/>
            <main className="flex-grow">
                <ListarEvento/>
            </main>

            <Footer/>
        </div>
    )
}

export default Eventos;