import React, {Component} from 'react';
import NavBar from '../navbar/navbar';
import CarouselInicio from './carousel/carousel';
import LadoEsquerdo from './lado_esquerdo/lado_esquerdo';
import LadoDireito from './lado_direita/lado_direita';

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
                <div className="row" >
                    <div className="col-sm-12" >
                        <CarouselInicio />
                    </div>
                </div>
                <div className="row" style={{ marginTop: '18px' }} >
                    <div className="col-sm-3" > <LadoEsquerdo /> </div>
                    <div className="col-sm-9" > <LadoDireito /> </div>   
                </div>
            </div>
        );
    }
}

export default TelaInicial;