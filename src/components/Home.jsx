import imagemDeFundo from '../assets/por_do_sol_pg.jpg';

function Home(){
    return(
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white text-center p-4">
        <h2 className="text-5xl font-bold mb-4">
        Descubra Praia Grande: Seu Guia Completo 360°
        </h2>
        <p className="text-xl">
            O melhor do litoral paulista espera por você: praias, eventos e cultura.
        </p>
    </div>
    );
}

export default Home