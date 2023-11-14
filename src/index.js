import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from './pages/Principal';
import Ayuda from './pages/Ayuda';
import Conjuntos from './pages/Conjuntos';
import Bralettes from './pages/Bralettes';
import Novedades from './pages/Novedades';
import Sesion from './pages/Sesion';
import Contraseña from './pages/Contraseña';
import Google from './components/Google';
import OrderPage from './pages/OrderPage';
import Terminos from './pages/Terminos';
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
          <Route path="/orderpage" element={<OrderPage />} />
          <Route path="/contraseña" element={<Contraseña />} />
          <Route path="/sesion" element={<Sesion />} />
          <Route path="/google" element={<Google />} />
          <Route path="/terminos" element={<Terminos />} />

          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
);
