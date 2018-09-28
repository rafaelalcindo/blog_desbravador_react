import React from 'react';
import './categorias_inicio.css';
import Adra from '../../../../assets/imagem_especialidade/categorias/adra.png';

const CategoriaInicio = (props) => {
    return(
        <div  >
            <hr/>
            <div className="d-flex justify-content-center" >
                <h2 className="titulo_especi_alta" >Categorias</h2>
            </div>
            <div className="row toda_categoria_inicio" >
                <div className="col-sm-2" >
                    <div className="ADRA_categoria" >
                        <img className="imagem_categoria" src={Adra}  alt="categorias"/>
                    </div>
                    <div className="texto_categoria" >
                        <h4>Adra</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoriaInicio;