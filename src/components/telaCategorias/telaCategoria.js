import React , {Component } from 'react';

import NavBar from '../navbar/navbar';
import Rodape from '../rodape/rodape';

import Categoria from './categoria/categorias';

import categorias_logo_superior from '../../assets/imagem/categorias_logo_superior.png';

import './telaCategoria.css';

class TelaCategoria extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <NavBar />
                <div>
                    <div style={{marginRight: '0px'}} className="row" >
                        <div className="col-sm-12 menu_inicial" style={{ height: '210px' }} >
                            <h2 className="inicio_texto" >Tela de Categorias.</h2>

                            <img className="imagemLogo" src={categorias_logo_superior} alt="desbravador" />
                        </div>
                    </div>
                    <div style={{ marginTop: '18px', marginRight: '0px' }}  className="row" >
                        <div className="col-sm-12" >
                            <div className="tituloCategoriaDiv" >
                                <h3 className="tituloCategoria" >Categorias</h3>
                                <hr/>
                                <Categoria />
                            </div>
                        </div>   
                    </div>
                </div>
                
                <Rodape />
            </div>
        );
    }
}

export default TelaCategoria;
