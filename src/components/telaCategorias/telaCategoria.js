import React , {Component } from 'react';

import NavBar from '../navbar/navbar';
import Rodape from '../rodape/rodape';

import Categoria from './categoria/categorias';

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
                            <h1>Teste 02</h1>
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
