import React from 'react';

import ADRA from '../../../assets/categorias/ADRA.jpg';

import './categorias.css';

const Categorias = (props) => {
    return(
        <div className="row" >
            <div className="col-sm-12" >

                <div className="categoria_card" >
                    <img className="categorImg" src={ADRA} alt="categoria Adra" />
                    <div className="nomeCategoria" >
                        <h1>ADRA</h1>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Categorias;