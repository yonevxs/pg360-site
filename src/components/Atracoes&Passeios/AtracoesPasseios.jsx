import Navbar from "../NavBar/Navbar";
import React, { useState, useEffect, useRef, use } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import Footer from "../Footer/Footer";
import { MapPin, Loader2 } from "lucide-react";



import imagemNetuno from "../../assets/Netuno_foto.jpg";
import imagemPda from "../../assets/pda_pg.jpg";
import imagemFortalezaItaipu from "../../assets/fortalezaItaipu.jpg";
import { set } from "react-hook-form";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const MAP_ID = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID;

const initialCenter = { lat: -24.0054, lng: -46.4036 };

function AtracoesPasseios() {
	const [touristSpots, setTouristSpots] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const [mapCenter, setMapCenter] = useState(initialCenter);
	const [mapZoom, setMapZoom] = useState(13);
	const mapRef = useRef(null);

	useEffect(() => {
		const fetchLocais = async () => {
			try {
				const response = await fetch("http://localhost:8080/locais");

				if (!response.ok) {
					throw new Error("Erro ao buscar os pontos turísticos.");
				}

				const data = await response.json();

				const formattedSpots = data.map((item) => ({
					// Nome no react : nome no Java
					id: item.id,
					nome: item.nmLocal,
					descricao: item.dsLocal,

					// LEIA PARA ENTENDER
					// 1. Verifica se "imagens" existe
					// 2. Se existir, pega a primeira imagem da lista (posição 0)
					// 3. Se não tiver imagem, usa uma das importadas (ex: imagemNetuno) como padrão
					imagem:
						item.imagens && item.imagens.length > 0
							? item.imagens[0]
							: imagemNetuno,

					position: {
						lat: parseFloat(item.latitude),
						lng: parseFloat(item.longitude),
					},
					categoria: item.categoria,
					hrFuncionamento: item.hrFuncionamento,
				}));

				setTouristSpots(formattedSpots);
			} catch (err) {
				console.error("Erro de conexão:", err);
				setError("Não foi possível carregar os pontos turísticos.");
			} finally {
				setIsLoading(false);
			}
		};

		fetchLocais();
	}, []);

	const handleLocationClick = (position) => {
		setMapCenter(position);
		setMapZoom(16);
		if (mapRef.current) {
			mapRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	if (!API_KEY || !MAP_ID) {
		return (
			<div className="p-8 text-center text-red-600">
				<h1 className="text-2xl font-bold">Erro de Configuração</h1>
				<p>A chave de API ou o Map ID do Google Maps não foram encontrados.</p>
			</div>
		);
	}

	return (
		<div className="min-h-screen flex flex-col bg-gray-200 font-sans">
			<Navbar />

			<header className="w-full bg-[#1D91CE] border-b-4 border-yellow-400 shadow-md py-4 mb-8">
				<h1 className="text-center text-white text-2xl md:text-3xl font-bold uppercase tracking-wide">
					Pontos Turísticos
				</h1>
			</header>

			<main className="flex-grow container mx-auto px-4 pb-12">
				{isLoading && (
					<div className="flex justify-center items-center py-20">
						<Loader2 className="animate-spin text-blue-500" size={48} />
						<span className="ml-2 text-xl text-gray-600">
							Carregando atrações...
						</span>
					</div>
				)}

				{error && (
					<div className="text-center text-red-500 py-10 bg-red-50 rounded-lg mb-8">
						<p>{error}</p>
					</div>
				)}

				{!isLoading && !error && (
					<div className="space-y-10 mb-16">
						{touristSpots.map((spot) => (
							<div
								key={spot.id}
								className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
							>
								<div className="md:w-1/2 h-64 md:h-auto bg-gray-300 relative">
									<img
										src={spot.imagem}
										alt={spot.nome}
										// Adicionei um onError para caso a url da imagem quebre
										onError={(e) => {
											e.target.src = imagem;
										}}
										className="w-full h-full object-cover"
									/>
								</div>

								<div className="p-6 md:w-1/2 flex flex-col justify-center">
									<h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-100 pb-2">
										{spot.nome}
									</h2>

									<p className="text-gray-600 mb-6 text-justify leading-relaxed">
										{spot.descricao}
									</p>

									<button
										onClick={() => handleLocationClick(spot.position)}
										className="self-start bg-[#029AEA] hover:bg-[#1D91CE] text-white font-semibold py-2 px-6 rounded shadow transition-colors duration-200 flex items-center gap-2"
									>
										<MapPin size={20} />
										LOCALIZAÇÃO
									</button>
								</div>
							</div>
						))}
					</div>
				)}

				{/* Mapa só aparece se tivermos dados carregados */}
				{!isLoading && touristSpots.length > 0 && (
					<div ref={mapRef} className="bg-white p-4 rounded-lg shadow-lg">
						<h3 className="text-xl font-bold text-blue-800 mb-4 pl-2 border-l-4 border-yellow-400">
							Mapa Interativo
						</h3>

						<APIProvider apiKey={API_KEY}>
							<div className="w-full h-[500px] rounded-lg overflow-hidden border border-gray-300">
								<Map
									center={mapCenter}
									zoom={mapZoom}
									onCameraChanged={(ev) => {
										setMapCenter(ev.detail.center);
										setMapZoom(ev.detail.zoom);
									}}
									mapId={MAP_ID}
									gestureHandling={"greedy"}
									disableDefaultUI={false}
								>
									{touristSpots.map((spot) => (
										<Marker
											key={spot.id}
											position={spot.position}
											title={spot.nome}
											onClick={() => handleLocationClick(spot.position)}
										/>
									))}
								</Map>
							</div>
						</APIProvider>
					</div>
				)}
			</main>

			<Footer />
		</div>
	);
}

export default AtracoesPasseios;
