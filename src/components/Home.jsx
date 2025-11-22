import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'; 
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollArrow from './ScrollArrow';
import FormsAvaliacoes from './FormsAvaliacoes';
import Carrossel from './Carrossel';
import imgNetuno from '../assets/Netuno_foto.jpg'
import imgCultura from '../assets/culturapg.jpg'

import imagemDeFundo from '../assets/por_do_sol_pg.jpg';

const imgPontosTuristicos = ""; 
const imgAgendaCultural = "";   

function Home() {

    return (
        <div className="flex flex-col w-full font-sans">
            
            <div 
                style={{ backgroundImage: `url(${imagemDeFundo})` }} 
                className="min-h-screen bg-cover bg-center relative scroll-smooth"
            >
                <div className='absolute inset-0 bg-black opacity-60'></div>

                <Navbar/>

                <div className="relative z-10 flex flex-col items-center justify-center text-white text-center p-4 h-[calc(100vh-80px)]">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 shadow-sm">
                        Descubra Praia Grande: <br/> Seu Guia Completo 360°
                    </h2>

                    <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
                        O melhor do litoral paulista espera por você: praias, eventos e cultura vibrante.
                    </p>

                    <a href="#eventos" className='bg-[#FFA303] hover:bg-[#e09203] transition-colors text-white font-bold py-3 px-8 rounded-full mt-12 shadow-lg flex items-center gap-2'>
                        EXPLORE AS ATRAÇÕES
                    </a>
                    
                    <div className="mt-16">
                        <ScrollArrow/>
                    </div>
                </div>
            </div>

            <section id="eventos" className="">
                <div className="bg-[#1D91CE] py-4 mb-10 shadow-md">
                    <h3 className="text-white text-center text-2xl font-bold uppercase tracking-wider">
                        Eventos Atuais
                    </h3>
                </div>

                <div className="container mx-auto px-4">
                    
                    <div className="mb-10">
                        <Carrossel />
                    </div>

                    <div className="flex justify-center p-10">
                        <Link to="/eventos" className="bg-[#00509d] hover:bg-[#003f7d] text-white font-bold py-3 px-10 rounded shadow-md flex items-center gap-2 transition-all">
                            VER TODOS OS EVENTOS <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="flex flex-col md:flex-row w-full min-h-[500px]">
                <div className="w-full md:w-1/2 bg-gray-900 relative min-h-[400px]">
                     {imgPontosTuristicos ? (
                        <img 
                            src={imgPontosTuristicos} 
                            alt="Pontos Turísticos" 
                            className="w-full h-full object-cover" 
                        />
                    ) : (
                        <div className="w-full h-full" style={{ backgroundImage: `url(${imgNetuno})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    )}
                </div>

                <div className="w-full md:w-1/2 bg-[#00509d] p-12 flex flex-col justify-center items-start text-white">
                    <h3 className="text-3xl font-bold mb-6 uppercase border-b-4 border-[#FFA303] pb-2">
                        Pontos Turísticos
                    </h3>
                    <p className="text-lg leading-relaxed mb-8 text-justify opacity-90">
                        Descubra as maravilhas de Praia Grande. Da grandiosidade da Fortaleza de Itaipu à beleza serena da orla, 
                        temos roteiros para todos os gostos.
                    </p>
                    <Link to="/atracoes" className="bg-white text-[#00509d] font-bold py-3 px-8 rounded hover:bg-gray-100 transition-colors flex items-center gap-2 self-end md:self-start">
                        SAIBA MAIS <ArrowRight className="text-[#FFA303]" />
                    </Link>
                </div>
            </section>

            <section className="flex flex-col md:flex-row-reverse w-full min-h-[500px]">
                <div className="w-full md:w-1/2 bg-gray-900 relative">
                    {imgAgendaCultural ? (
                        <img src={imgAgendaCultural} alt="Agenda Cultural" className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full" style={{ backgroundImage: `url(${imgCultura})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    )}
                </div>

                <div className="w-full md:w-1/2 bg-[#003566] p-12 flex flex-col justify-center items-end text-right text-white">
                    <h3 className="text-3xl font-bold mb-6 uppercase border-b-4 border-[#FFA303] pb-2">
                        Agenda Cultural
                    </h3>
                    <p className="text-lg leading-relaxed mb-8 opacity-90">
                        O Palácio das Artes e os teatros da cidade oferecem uma programação rica e diversificada. 
                        Fique por dentro das exposições e peças de teatro.
                    </p>
                    <Link to="/agendaCultural" className="bg-white text-[#003566] font-bold py-3 px-8 rounded hover:bg-gray-100 transition-colors flex items-center gap-2">
                        SAIBA MAIS <ArrowRight className="text-[#FFA303]" />
                    </Link>
                </div>
            </section>

            <section id="secao-formulario" className="w-full bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                   
                    <FormsAvaliacoes/>
                </div>
            </section>

            <Footer/>
        </div>
    );
}

export default Home;