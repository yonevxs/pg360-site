import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const atracoes = [
  {
    id: 1,
    titulo: 'Estátua de Netuno',
    descricao: 'Um ícone da cidade na praia do Boqueirão.',
    imgUrl: 'https://placehold.co/600x400/1D91CE/FAEDCD?text=Estátua+de+Netuno'
  },
  {
    id: 2,
    titulo: 'Palácio das Artes',
    descricao: 'O principal centro cultural e de exposições.',
    imgUrl: 'https://placehold.co/600x400/FFA303/FAEDCD?text=Palácio+das+Artes'
  },
  {
    id: 3,
    titulo: 'Portinho',
    descricao: 'Área de lazer e contato com a natureza.',
    imgUrl: 'https://placehold.co/600x400/8ECAE6/1D91CE?text=Portinho'
  },
  {
    id: 4,
    titulo: 'Feirinha de Artesanato',
    descricao: 'Compre lembranças e aproveite a culinária local.',
    imgUrl: 'https://placehold.co/600x400/FFB703/FAEDCD?text=Feirinha'
  }
];

function Carrossel() {
  return (
    <div className="bg-white p-8 md:p-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Principais Atrações
      </h2>

      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          
          slidesPerView={1}
          
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          className="mySwiper"
        >
          {atracoes.map((atracao) => (
            <SwiperSlide key={atracao.id}>
              <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden h-full mx-3">
                <img 
                  src={atracao.imgUrl} 
                  alt={atracao.titulo} 
                  className="w-full h-85 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 text-center">{atracao.titulo}</h3>
                  <p className="text-gray-600 mt-2 text-lg text-center">{atracao.descricao}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Carrossel;