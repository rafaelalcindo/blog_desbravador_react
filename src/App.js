import React, { Component } from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import RouterMap from './routes/routes';

import * as actionType from './store/actions';
import { connect }  from 'react-redux';


class App extends Component {

  constructor(props) {
    super(props);
    this.props.onVerificarUsuario();
  }

  componentDidMount(){
    
    setTimeout(() => {
      if(this.props.auth.authToken != null){
        this.props.onPreencherDadosUsuarioViaToken();
      }
    }, 100);
    
  }

  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <RouterMap />
          </div>
        </BrowserRouter>
            
    );
  }
}

const mapStateToProps = state => {
  return {
      auth: state.auth,
      usuario: state.usua
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onlogarUsuarioSistema: (login, senha) => dispatch(actionType.fazerLogin(login, senha)),
      onVerificarUsuario: () => dispatch(actionType.verificarAuth()),
      onPreencherDadosUsuarioViaToken: () => dispatch(actionType.preecherDadosUsuario())
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
