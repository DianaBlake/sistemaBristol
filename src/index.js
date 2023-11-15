import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from './pages/Principal';
import Ayuda from './pages/Ayuda';
import Conjuntos from './pages/Conjuntos';
import Bralettes from './pages/Bralettes';
import Panties from './pages/Panties';
import Contraseña from './pages/Contraseña';
import Google from './components/Google';
import OrderPage from './pages/OrderPage';
import ProductoPage from './pages/ProductoPage';
import InicioSesion from './components/InicioSesion';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Principal />} />
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="/conjuntos" element={<Conjuntos />} />
          <Route path="/bralettes" element={<Bralettes />} />
          <Route path="/panties" element={<Panties />} />
          <Route path="/orderpage" element={<OrderPage />} />
          <Route path="/contraseña" element={<Contraseña />} />
          <Route path="/InicioSesion" element={<InicioSesion />} />
          <Route path="/google" element={<Google />} />
          <Route path="/producto/:codigo" element={<ProductoPage/>}/>

          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
);
