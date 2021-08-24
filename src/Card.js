import React from 'react';

const data3={
    cardTitle1:"SENDERO RIO ELQUI",
    cardDescription1:"La cuenca del río Elqui ubicada en la provincia de Elqui, región de Coquimbo, en Chile. El principal río de esta cuenca es el Elqui, que nace de la confluencia de los ríos río Claro (Elqui) y río Turbio (Elqui), provenientes ambos de la cordillera de los Andes, y desemboca en el océano Pacífico, algunos kilómetros al norte de la ciudad de La Serena. Al tener uno de los cielos más claros del hemisferio sur, razón por la cual diversas organizaciones internacionales han instalado observatorios astronómicos en las cumbres de los cerrros.",                                   
    cardButton1:"Click Me!",

    cardTitle2:"SENDERO CARRETERA AUSTRAL",
    cardDescription2:"La Carretera Austral o Ruta 7 (CA en adelante), es una bellísima, extensa y desafiante ruta para el cicloturismo. Se inicia en Puerto Montt, punto que se considera como el inicio de la Patagonia Chilena, y termina en Villa O'Higgins, el poblado mas austral antes de Magallanes. Desde ahí, es posible cruzar a Argentina y continuar hacia la zona austral.Se trata de un reto deportivo importante, de alta exigencia física, y que requiere de mucha voluntad para enfrentar las adversidades meteorológicas.",
    cardButton2:"Click Me!",

    cardTitle3:"SENDERO DE LA PAZ",
    cardDescription3:"La Reserva Nacional Ñuble cubre una gran extensión de la Cordillera de los Andes y guarda numerosos atractivos que reciben muy pocos visitantes debido a las largas distancias que lo separan de centros poblados. En el corazón de esta reserva se encuentra la Laguna El Lobo, rodeada de interesantes montañas, bosques, aves y paisajes. Es una muy buena alternativa para complementar con una visita a las Termas de Los Peucos.",
    cardButton3:"Click Me!",
};

export const Card = (props) => {
    return (<div>
        <div className="card-deck text-center">
            <div className="card">
                <img src={props.imagen3} className="card-img-top" alt="..." style={props.estilos5}/>
                    <div className="card-body">
                        <h5 className="card-title">
                            <strong>
                                {data3.cardTitle1}
                            </strong>
                        </h5>
                        <p className="card-text">
                                {data3.cardDescription1}
                        </p>
                        <button className="button bg-primary text-white border-0">
                            {data3.cardButton1}
                        </button>
                    </div>
            </div>

            <div className="card">
                <img src={props.imagen4} className="card-img-top" alt="..." style={props.estilos5}/>
                    <div className="card-body">
                         <h5 className="card-title">
                             <strong>
                                 {data3.cardTitle2}
                             </strong>
                         </h5>
                         <p className="card-text">
                             {data3.cardDescription2}
                         </p>
                         <button className="button bg-primary text-white border-0">
                             {data3.cardButton2}
                         </button>
                    </div>
            </div>

            <div className="card">
                <img src={props.imagen5} className="card-img-top" alt="..." style={props.estilos5}/>
                     <div className="card-body">
                         <h5 className="card-title">
                             <strong>
                                 {data3.cardTitle3}
                             </strong>
                         </h5>
                         <p className="card-text">
                             {data3.cardDescription3}
                         </p>
                         <button className="button bg-primary text-white border-0">
                            {data3.cardButton3}
                         </button>
                     </div>
                </div>
            </div>
    </div>);
};

 export default Card;

// {/* <div className="card" style={props.estilos1}>
//             <img src={props.imagen1} className="card-img-top" alt="..." />
//             <div className="card-body">
//                 <h5 className="card-title">Black D.O.G.</h5>
//                 <p className="card-text">Black dog by Humboldt Seed Organization is an Indica-dominant feminized cannabis strain that will delight lovers of Kush strains. When buying Black D.O.G. you can grow and discover a powerful and exotic plant, in the style of the most current American Kush line.</p>
//                 <a href="#" className="btn btn-primary">Bank Humboldt Seed Organization</a>
//             </div>
//         </div> */}