import React, { Component } from 'react';
import NavBar from '../navbar/navbar';
import Rodape from '../rodape/rodape';

import './cadaEspecialidade.css';

class CadaEspecialidade extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <NavBar />
                <div style={{marginRight: '0px'}} className="row" >
                    <div className="col-sm-12 menu_inicial" style={{ height: '210px' }} >
                        <h1>Teste 02</h1>
                    </div>
                </div>
                <Rodape />
            </div>
        );
    }
}

export default CadaEspecialidade;