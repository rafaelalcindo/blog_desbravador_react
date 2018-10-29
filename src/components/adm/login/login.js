import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../../navbar/navbar';
import Rodape from '../../rodape/rodape';

import * as actionType from '../../../store/actions';

import './login.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: '',
            senha: '',
            verificacao: {
                login: true
            }
        }

        this.inputLogin = this.inputLogin.bind(this);
        this.inputSenha = this.inputSenha.bind(this);

    }

   /* componentDidUpdate(){
        console.log('usuario -log: ', this.props.usuario);
    } */

    fazerLogin = (event) => {
        event.preventDefault();
        this.setState({ verificacao :  this.checarLoginSenha() });
        
        if(this.state.verificacao.login){
            this.props.onlogarUsuarioSistema(this.state.login, this.state.senha);
        }
    }

    inputLogin = (event) => {
        this.setState({
            login: event.target.value
        });
    }

    inputSenha = (event) => {
        this.setState({
            senha: event.target.value
        });
    }

    checarLoginSenha = () => {
        let login = this.state.login.trim() !== '' && this.state.senha.trim() !== '';
        return login;
    }


    render(){

        let alerta = '';
        
        if(!this.state.verificacao){
            alerta = (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>temos campos em branco</strong> Por favor não deixe nenhum campo em branco.
                </div>
            );
        }


        return(
            <div>
                <NavBar />
                <div style={{marginRight: '0px'}} className="row" >
                    <div className="col-sm-12 menu_inicial" style={{  height: '210px'}} >
                        <h2 className="inicio_texto" >Faça login no nosso sistema para mais informações.</h2>
                    </div>
                </div>
                <form onSubmit={this.fazerLogin} >
                    <div className="login_tela" >
                        
                        <div className="login_painel" >
                            <h2>Tela de Login</h2>
                            <div className="form-group">
                                
                                <label>Login</label>
                                <input type="text" onChange={this.inputLogin}  style={styleInputs} className="form-control"  placeholder="login" />
                            </div>

                            <div className="form-group" >
                                <label>Senha</label>
                                <input type="password" id="senha" onChange={this.inputSenha} style={styleInputs} className="form-control" placeholder="senha" />
                            </div>
                            <hr />
                            <div className="botao_login" >
                                <button type="submit" style={styleButton} className="btn btn-primary" >Logar</button>
                            </div>
                        </div>
                        
                    </div>
                    {alerta}
                </form>
                <Rodape />
            </div>
        );
    }

}

const styleInputs ={
    borderRadius: '0px',
    height: 'calc(3.65rem + 2px)',
    fontSize: '1.6rem',
}

const styleButton = {
    borderRadius: '0px',
    padding: '.8rem .75rem',
    width: '100%',
    fontSize: '1.6rem'
}

const mapStateToProps = state => {
    return {
        usuario: state.usua
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onlogarUsuarioSistema: (login, senha) => dispatch(actionType.fazerLogin(login, senha))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Login);