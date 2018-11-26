import React , {Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../navbar/navbar';
import Rodape from '../rodape/rodape';

import Categoria from './categoria/categorias';
import * as actionType from '../../store/actions';

import categorias_logo_superior from '../../assets/imagem/categorias_logo_superior.png';

import './telaCategoria.css';

class TelaCategoria extends Component {

    constructor(props){
        super(props);
        this.state = {
            redirecionar: false,
            linkId: ''
        }
    }

    componentDidMount() {
        this.props.onPegarCategorias();
    }

    redirectParaOutraPagina = (id) => {
        console.log('entrou redi: ', id);
        this.props.history.push('/listaEspecialidade/'+id);
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
                                <Categoria categoria={this.props.categoria} redirecionar={ this.redirectParaOutraPagina} />
                            </div>
                        </div>   
                    </div>
                </div>
                
                <Rodape />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        categoria: state.cate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPegarCategorias: () => dispatch(actionType.pegarEspecialidadesCategorias())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TelaCategoria);
