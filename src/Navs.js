import React from 'react';

const data = {
    Nav1:"Quienes Somos",
    Nav2:"Nuestros Tours",
    Nav3:"Planes",
    Nav4:"Contactanos",
};

export const Navs = (props) => {
    return (<div>
        <ul className="nav justify-content-end bg-white" style={props.estilos0} >
            <li className="nav-item">
                <a className="nav-link active text-dark" href="#">
                    {data.Nav1}
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                    {data.Nav2}
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">
                    {data.Nav3}
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled text-dark" href="#" tabindex="-1" aria-disabled="true">
                    {data.Nav4}
                </a>
            </li>
        </ul>
    </div>);
};

export default Navs;