import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from '../components/Home.jsx';
import Eventos from '../components/Eventos.jsx';
import AtracoesPasseios from '../components/AtracoesPasseios.jsx';

function AppRouter(){
    return(
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/eventos' element={<Eventos/>} />
                <Route path='/atracoes' element={<AtracoesPasseios/>} />
                <Route path='/*' element={<h1> Página Não Encontrada </h1>} />
            </Routes>
    );
}

export default AppRouter;