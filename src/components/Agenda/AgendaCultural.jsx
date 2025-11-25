import React from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import Agenda from "./Agenda";

function AgendaCultural() {
	return (
		<div className="min-h-screen bg-white relative scroll-smooth flex flex-col">
			<Navbar />
			<main className="flex-grow">
				<div className="bg-[#1D91CE] py-4 shadow-md">
					<h3 className="text-white text-center text-2xl font-bold uppercase tracking-wider">
						Agenda Cultural
					</h3>
				</div>
				<Agenda />
			</main>

			<Footer />
		</div>
	);
}

export default AgendaCultural;
