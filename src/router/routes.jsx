import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from '../components/Home.jsx';
import Eventos from '../components/Eventos/Eventos.jsx';
import AtracoesPasseios from '../components/Atracoes&Passeios/AtracoesPasseios.jsx';
import AgendaCultural from '../components/Agenda/AgendaCultural.jsx';
import Agenda from '../components/Agenda/Agenda.jsx';
import LoginAdm from '../components/Adiministracao/LoginAdm.jsx';

function AppRouter(){
    return(
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/eventos' element={<Eventos/>} />
                <Route path='/atracoes' element={<AtracoesPasseios/>} />
                <Route path='/agendacultural' element={<AgendaCultural/>} />
                <Route path='/entrar' element={<LoginAdm/>} />
                <Route path='/*' element={<h1> Página Não Encontrada </h1>} />
            </Routes>
    );
}

export default AppRouter;