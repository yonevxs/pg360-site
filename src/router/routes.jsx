import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from '../components/Home.jsx';
import Eventos from '../components/Eventos.jsx';

function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/eventos' element={<Eventos/>} />

                <Route path='/*' element={<h1> Página Não Encontrada </h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;