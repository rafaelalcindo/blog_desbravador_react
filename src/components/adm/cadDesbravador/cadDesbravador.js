import React, { Component } from 'react';

import NavBar from '../../navbar/navbar';
import Rodape from '../../rodape/rodape';

import './cadDesbravador.css';

class CadDesbravador extends Component {
    render(){
        return (
            <div>
                <NavBar />

                <Rodape />
            </div>
        );
    }
}

export default CadDesbravador;