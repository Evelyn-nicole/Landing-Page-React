import React from 'react';

const data1 = {
    pageTitle: "AVENTURAS EN MOUNTAIN BIKE",
    pageSubtitle: "Deporte al aire libre rodeado de naturaleza",
    pageDiv: "¿Porqué unirse a estas experiencias?",
    pageDescription: "Es apropiada para cualquier edad, ya que es un medio de transporte que cuida más las articulaciones, en comparación con correr, ya que a fin de cuentas gran parte del peso corporal se carga en el sillín y no en las articulaciones de las rodillas. Fuera de que el desplazamiento con la bicicleta cuida el medio ambiente, andar en bicicleta es el comienzo ideal para personas, que durante mucho tiempo no han practicado un deporte. Andar en bicicleta mejora la función del sistema circulatorio, baja la presión arterial y fortalece el sistema inmunológico.",
};


export const Page = (props) => {
    return (<div>
        <div className="card bg-white text-white" style={props.estilos2}>
            <img src={props.imagen} style={props.estilos1} className="card-img" alt="..." />
            <div className="card-img-overlay">
                <h1 className="card-title"> 
                <strong>
                    {data1.pageTitle}
                </strong>
                </h1>
                <h4 className="card-text">
                    {data1.pageSubtitle}
                </h4>
            </div>
            <div className="container-fluid" style={props.estilos3} >
                <h5 className="text-center text-dark">
                    {data1.pageDiv}
                </h5>
                <h6 className="text-center text-dark">
                    {data1.pageDescription}
                </h6>
            </div>
        </div>
    </div>);
};

export default Page;
