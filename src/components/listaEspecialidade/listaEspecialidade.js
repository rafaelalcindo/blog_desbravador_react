import React, { Component } from 'react';
import NavBar from '../navbar/navbar';
import Rodape from '../rodape/rodape';

import './listaEspecialidade.css';

import mamiferos from '../../assets/logo_especialidades/estudos_da_natureza/mamiferos.png';
import listaEspecialidade from '../../assets/imagem/listaEspecialidade.png';

class ListaEspecialidade extends Component {

    componentDidMount() {
        let param = this.props.match.params.categoria;
        console.log('params: ', param);
    }
    

    render() {
        return(
            <div>
                <NavBar/>
                <div style={{marginRight: '0px'}} className="row" >
                    <div className="col-sm-12 menu_inicial" style={{ height: '210px' }} >
                        <h2 className="inicio_texto" > estudos da natureza</h2>

                        <img className="imagemLogo" src={listaEspecialidade} alt="lista especialidade" />
                    </div>
                </div>
                <div className="todo_listaEspecialidade" >
                    
                    <h2>Especialidades</h2><br/>
                    <hr/><br/><br/>
                    <div className="row">

                        <div className="col-sm-3" >
                            <img className="imagemEspecialidade" src={mamiferos} alt="especialidades" />
                            <h4>Mamiferos</h4>
                        </div> 

                        <div className="col-sm-3" >
                            <img className="imagemEspecialidade" src={mamiferos} alt="especialidades" />
                            <h4>Mamiferos</h4>
                        </div>

                        <div className="col-sm-3" >
                            <img className="imagemEspecialidade" src={mamiferos} alt="especialidades" />
                            <h4>Mamiferos</h4>
                        </div>

                        <div className="col-sm-3" >
                            <img className="imagemEspecialidade" src={mamiferos} alt="especialidades" />
                            <h4>Mamiferos</h4>
                        </div>

                        <div className="col-sm-3" >
                            <img className="imagemEspecialidade" src={mamiferos} alt="especialidades" />
                            <h4>Mamiferos</h4>
                        </div>

                        <div className="col-sm-3" >
                            <img className="imagemEspecialidade" src={mamiferos} alt="especialidades" />
                            <h4>Mamiferos</h4>
                        </div>

                        <div className="col-sm-3" >
                            <img className="imagemEspecialidade" src={mamiferos} alt="especialidades" />
                            <h4>Mamiferos</h4>
                        </div>

                        <div className="col-sm-3" >
                            <img className="imagemEspecialidade" src={mamiferos} alt="especialidades" />
                            <h4>Mamiferos</h4>
                        </div>

                        
                    </div>
                </div>
                <Rodape />
            </div>
            
        );
    }

}

export default ListaEspecialidade;