import React, {Component} from 'react';

import NavBar from '../navbar/navbar';
import Rodape from '../rodape/rodape';

import CarouselInicio from './carousel/carousel';
import LadoEsquerdo from './lado_esquerdo/lado_esquerdo';
import LadoDireito from './lado_direita/lado_direita';
import blue_eagle from '../../assets/inicio/blue_eagle.jpg';

import inicio_bird from '../../assets/imagem/inicio_birds.jpg';
import inicio_logo_desbravador from '../../assets/imagem/inicio_logo_desbravador.png';

// ========== CSS ============

import './telaInicial.css';



class TelaInicial extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <NavBar />
                <div >
                    <div style={{marginRight: '0px'}} className="row" >
                        <div className="col-sm-12 menu_inicial" style={{  height: '210px'}} >
                            <h2 className="inicio_texto" >Bem vindos ao nosso website.</h2>

                            <img className="imagemLogo" src={inicio_logo_desbravador} alt="desbravador" />
                        </div>
                    </div>
                    <div style={{ marginTop: '18px', marginRight: '0px' }}  className="row" >
                        <div className="col-sm-12" > <LadoDireito /> </div>   
                    </div>
                </div>
                <Rodape />
            </div>
        );
    }
}

export default TelaInicial;