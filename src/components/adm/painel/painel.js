import React, { Component } from 'react';

import NavBar from '../../navbar/navbar';
import Rodape from '../../rodape/rodape';

import LogoPreencherForm from '../../../assets/painel/logo_preencher_form.png';
import AlterarForm  from '../../../assets/painel/logo_alterar_form.jpg';
import LogoComentario from '../../../assets/painel/logo_comentario.png';

import './painel.css';

class Painel extends Component {
    render(){
        return( 
            <div>
                <NavBar />
                <div style={{marginRight: '0px'}} className="row" >
                    <div className="col-sm-12 menu_inicial" style={{  height: '210px'}} >
                        <h2 className="inicio_texto" >Painel de controle.</h2>
                    </div>
                </div>
                <div className="painel_todo" >
                    <h2>Painel do Blog</h2>

                    <div className="row" style={{marginTop: '45px', marginBottom: '45px'}}>
                        <div className="col-sm-4" >
                            <div className="card" style={{ width: '18rem', borderRadius: '0px'}}>
                                <img className="card-img-top" src={LogoPreencherForm} alt="Card image cap" />
                                <div className="card-body">
                                <p className="card-text">Cadastrar Especialidade</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4" >
                            <div className="card" style={{ width: '18rem', borderRadius: '0px'}}>
                                <img className="card-img-top" src={AlterarForm} alt="Card image cap" />
                                <div className="card-body">
                                <p className="card-text">Editar Especialidade</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4" >
                            <div className="card" style={{ width: '18rem', borderRadius: '0px' }}>
                                <img className="card-img-top" src={LogoComentario} alt="Card image cap" />
                                <div className="card-body">
                                <p className="card-text">Visualiar Comentarios</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Rodape />
            </div>
        );
    }
}

export default Painel;