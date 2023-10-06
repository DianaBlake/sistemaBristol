import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from './components/Principal';
import Ayuda from './pages/Ayuda';
import Conjuntos from './pages/Conjuntos';
import Bralettes from './pages/Bralettes';
import Novedades from './pages/Novedades';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Principal />} />
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="/conjuntos" element={<Conjuntos />} />
          <Route path="/bralettes" element={<Bralettes />} />
          <Route path="/novedades" element={<Novedades />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
);
