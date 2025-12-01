// src/components/Administracao/Dashboard.jsx
import React, { useState } from "react";
import Sidebar from "../Sidebar";

// Homes
import DashboardHome from "./DashboardPages/DashboardHome";
import EventoHome from "./DashboardPages/EventoHome";
import LocalHome from "./DashboardPages/LocalHome";
import CategoriaHome from "./DashboardPages/CategoriaHome";

// Eventos CRUD
import EventoCreatePage from "./DashboardPages/EventoCreatePage";
import EventoListPage from "./DashboardPages/EventoListPage";
import EventoEditPage from "./DashboardPages/EventoEditPage";
import EventoDeletePage from "./DashboardPages/EventoDeletePage";

// Locais CRUD
import LocalCreatePage from "./DashboardPages/LocalCreatePage";
import LocalListPage from "./DashboardPages/LocalListPage";
import LocalEditPage from "./DashboardPages/LocalEditPage";
import LocalDeletePage from "./DashboardPages/LocalDeletePage";

// Categorias CRUD
import CategoriaCreatePage from "./DashboardPages/CategoriaCreatePage";
import CategoriaListPage from "./DashboardPages/CategoriaListPage";
import CategoriaEditPage from "./DashboardPages/CategoriaEditPage";
import CategoriaDeletePage from "./DashboardPages/CategoriaDeletePage";

function Dashboard() {
  const [pagina, setPagina] = useState("home");

  const renderConteudo = () => {
    switch (pagina) {
      case "home": return <DashboardHome onSelect={setPagina} />;
      case "eventos-home": return <EventoHome onSelect={setPagina} />;
      case "locais-home": return <LocalHome onSelect={setPagina} />;
      case "categorias-home": return <CategoriaHome onSelect={setPagina} />;

      case "eventos-create": return <EventoCreatePage onSelect={setPagina} />;
      case "eventos-list": return <EventoListPage onSelect={setPagina} />;
      case "eventos-edit": return <EventoEditPage onSelect={setPagina} />;
      case "eventos-delete": return <EventoDeletePage onSelect={setPagina} />;

      case "locais-create": return <LocalCreatePage onSelect={setPagina} />;
      case "locais-list": return <LocalListPage onSelect={setPagina} />;
      case "locais-edit": return <LocalEditPage onSelect={setPagina} />;
      case "locais-delete": return <LocalDeletePage onSelect={setPagina} />;

      case "categorias-create": return <CategoriaCreatePage onSelect={setPagina} />;
      case "categorias-list": return <CategoriaListPage onSelect={setPagina} />;
      case "categorias-edit": return <CategoriaEditPage onSelect={setPagina} />;
      case "categorias-delete": return <CategoriaDeletePage onSelect={setPagina} />;

      default: return <DashboardHome onSelect={setPagina} />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar onSelect={setPagina} />
      <main className="flex-grow p-6 bg-gray-100 overflow-y-auto">
        {renderConteudo()}
      </main>
    </div>
  );
}

export default Dashboard;
