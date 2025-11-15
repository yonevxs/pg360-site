import Navbar from "./Navbar";
import React from "react";
import {APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const MAP_ID = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID;

const touristSpots = [
  { id: 1, name: "Estátua de Netuno", position: { lat: -24.0088, lng: -46.4111 } },
  { id: 2, name: "Palácio das Artes", position: { lat: -24.0041, lng: -46.4323 } },
  { id: 3, name: "Fortaleza de Itaipu", position: { lat: -24.0150, lng: -46.4020 } },
];

const centerPosition = { lat: -24.0054, lng: -46.4036 };

function AtracoesPasseios() {
  if (!API_KEY || !MAP_ID) {
    return (
      <div className="p-8 text-center text-red-600">
        <h1 className="text-2xl font-bold">Erro de Configuração</h1>
        <p>A chave de API ou o Map ID do Google Maps não foram encontrados.</p>
        <p>Verifique seu arquivo .env e reinicie o servidor.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cover bg-center relative scroll-smooth">
        <Navbar/>
      <h1 className="text-3xl font-bold font-sans mb-6">
        Principais Pontos Turísticos
      </h1>

      <APIProvider apiKey={API_KEY}>
        <div className="w-full max-w-5xl h-[600px] rounded-lg shadow-lg overflow-hidden">
          
          <Map
            defaultCenter={centerPosition}
            defaultZoom={13}
            mapId={MAP_ID} 
            gestureHandling={'greedy'}
            disableDefaultUI={true} 
          >
            
            {touristSpots.map(spot => (
              <Marker 
                key={spot.id} 
                position={spot.position} 
              />
            ))}

          </Map>
        </div>
      </APIProvider>
    </div>
  );
}

export default AtracoesPasseios;