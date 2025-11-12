import imagemDeFundo from '../assets/por_do_sol_pg.jpg';
import ScrollArrow from './ScrollArrow';
import Navbar from './Navbar';
import Carrossel from './Carrossel';

function Home(){
    return(
        <>
            <div 
            style={{ backgroundImage: `url(${imagemDeFundo})` }} 
            className="min-h-screen bg-cover bg-center relative scroll-smooth"
            >
                <div className='absolute inset-0 bg-black opacity-65'></div>

                <Navbar/>
                <div className="relative z-10 flex flex-col items-center justify-center text-white text-center p-4" style={{ minHeight: 'calc(100vh - 80px)'}}>

                <h2 className="text-5xl font-bold mb-4 font-sans">
                Descubra Praia Grande: Seu Guia Completo 360°
                </h2>

                <p className="text-xl">
                    O melhor do litoral paulista espera por você: praias, eventos e cultura.
                </p>

                <a href="#secao-carrossel" className='bg-[#FFA303] p-3 flex shadow-lg items-center relative rounded-3xl mt-20'>
                    <p className='text-xl'> Explore Atrações </p>
                </a>
                <ScrollArrow/>
            </div>
            </div>

            <div id="secao-carrossel">
                <Carrossel/>
            </div>
        </>
        
    );
}

export default Home