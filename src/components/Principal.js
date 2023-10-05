import React from 'react'
import logo from '../images/logo.jpg'
import inicioP from '../images/inicioP.jpg'
import { CiUser, CiSearch} from "react-icons/ci";
import principal from '../estilos/principal.css'
import { BsCart3 } from "react-icons/bs";

function Principal() { 
    return (
        <div className="principal">
          <img className="imglogo" src={logo}/>
            <div className='logouser'>
              <CiUser color='#050404'/>
                <div className='logocarro'>
                  <BsCart3 color='#050404'/>
                  </div>
                    <div className='logolupa'>
                      <CiSearch color='#050404'/>
                      <div className='estilosnav'>
                            <nav className='navegador'>
                              <ul className='footer-left'>
                                <li className='lista2'>
                                <a href="/">INICIO</a>
                                <a href="/">AYUDA</a>
                                <a href="/">CONJUNTOS</a>
                                <a href="/">BRALETTES</a>
                                <a href="/">NOVEDADES</a>
                                </li>
                              </ul>
                            </nav>
                    <div class="linea-horizontal">                          
                    </div>
                    <div className='contenedor-Principal'>
                        <img className="img-contenedor" src={inicioP} width={650}/>
                    </div>
                </div>
              </div>
            </div>

        </div>
        
      );
}
export default Principal;


