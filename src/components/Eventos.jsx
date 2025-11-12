import Navbar from "./Navbar";
function Eventos(){
    return(
        <div className="flex flex-col items-center justify-center text-white text-center p-4">
            <Navbar/>
            <h1 className="text-3xl font-bold font-sans mb-4">Acompanhe os eventos que irão acontecer em breve na Praia Grande!</h1>
        </div>
    )
}

export default Eventos;