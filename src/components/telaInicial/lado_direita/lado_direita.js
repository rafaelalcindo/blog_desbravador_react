import React from 'react';
import './lado_direita.css';
import CategoriaInicio from './categorias_inicio/categorias_inicio';

import Repteis from  '../../../assets/imagem_especialidade/estudos_natureza/repteis.png';
import Mamiferos from  '../../../assets/imagem_especialidade/estudos_natureza/mamiferos.jpg';
import ArteAcampar from  '../../../assets/imagem_especialidade/atividades_recreativas/arte_de_acampar.jpg';
import AcampamentoI from  '../../../assets/imagem_especialidade/atividades_recreativas/acampament_I.jpg';


const LadoDireito = (props) => {
    return (
        <div className="todoLadoDireita" >
            <hr/>
            <div className="row" >

                <div className="col-sm-12" >
                    <div className="d-flex justify-content-center" >
                        <h2 className="titulo_especi_alta" >Especialidades em Alta</h2>
                    </div>
                    <div className="row" >

                        <div className="col-sm-4" >
                            <div className="card card_especi_alta" style={styleCard} >
                                <img className="card-img-top" src={Repteis} alt="Card image cap"/>
                                <div className="card-body">
                                <h3>Repteis</h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4" >
                            <div className="card card_especi_alta" style={styleCard} >
                                <img className="card-img-top" src={Mamiferos} alt="Card image cap"/>
                                <div className="card-body">
                                <h3>Mamíferos</h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4" >
                            <div className="card card_especi_alta" style={{ borderRadius: '0px' ,backgroundColor: '#00b33c'}} >
                                <img className="card-img-top"  src={ArteAcampar} alt="Card image cap"/>
                                <div className="card-body">
                                <h3>Arte de Acampar</h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4" >
                            <div className="card card_especi_alta" style={{ borderRadius: '0px' ,backgroundColor: '#00b33c'}} >
                                <img className="card-img-top"  src={AcampamentoI} alt="Card image cap"/>
                                <div className="card-body">
                                <h3>Acampamento 1</h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <CategoriaInicio />
        </div>
    );
    
}

const styleCard = {
    borderRadius: '0px',
};

export default LadoDireito;