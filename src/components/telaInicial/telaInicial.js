import React, {Component} from 'react';

import NavBar from '../navbar/navbar';
import Rodape from '../rodape/rodape';

import CarouselInicio from './carousel/carousel';
import LadoEsquerdo from './lado_esquerdo/lado_esquerdo';
import LadoDireito from './lado_direita/lado_direita';
import blue_eagle from '../../assets/inicio/blue_eagle.jpg';

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
                            <h1>teste</h1>
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