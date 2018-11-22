import React, {Component} from 'react';

import NavBar from '../navbar/navbar';
import Rodape from '../rodape/rodape';

import LadoDireito from './lado_direita/lado_direita';
import inicio_logo_desbravador from '../../assets/imagem/inicio_logo_desbravador.png';

// ========== CSS ============

import './telaInicial.css';



class TelaInicial extends Component {

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