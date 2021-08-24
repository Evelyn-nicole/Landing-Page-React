import React from 'react';
import logo from './logo.svg';
import { Navs } from './Navs.js';
import { Page } from './Page.js';
import { Card } from './Card.js';
import './App.css';


function App() {
  return (<div>  
            < Navs estilos0={{height:"3rem", fontFamily:"Helvetica", }} />
            < Page estilos1={{height: "50rem"}} imagen="https://montenbaik.com/wp-content/uploads/2017/01/jamesalfaro5.jpg" estilos3= {{height:"10rem", marginTop:"3rem",}} />
            < Card estilos5={{height:"25rem"}} imagen3="https://barilocheturismo.gob.ar/images/aventura/mountain-bike/bike_02.jpg" imagen4="https://www.eha.cl/upload/noticias/cropping/base/este-sabado-14-se-da-largada-en-puerto-varas-se-esperan-1300-ciclistas-participando-en-la-cuarta-version-del-giro-del-lago-9e1c574347088c9225f323757f547b06.jpg" imagen5="https://guias.wiggle.es/sites/default/files/resize/guides/rkp_5060-800x533.jpg"/> 
         </div>);
};

export default App;
