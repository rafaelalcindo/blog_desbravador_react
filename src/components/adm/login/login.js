import React, { Component } from 'react';

import NavBar from '../../navbar/navbar';
import Rodape from '../../rodape/rodape';

import './login.css';

class Login extends Component {

    render(){
        return(
            <div>
                <NavBar />
                <div style={{marginRight: '0px'}} className="row" >
                    <div className="col-sm-12 menu_inicial" style={{  height: '210px'}} >
                        <h1>teste</h1>
                    </div>
                </div>

                <div className="login_tela" >
                    
                    <div className="login_painel" >
                        <h2>Tela de Login</h2>
                        <div className="form-group">
                            <label>Login</label>
                            <input type="text" id="login" style={styleInputs} className="form-control" placeholder="login" />
                        </div>

                        <div className="form-group" >
                            <label>Senha</label>
                            <input type="password" id="senha" style={styleInputs} className="form-control" placeholder="senha" />
                        </div>
                        <hr />
                        <div className="botao_login" >
                            <button type="button" style={styleButton} className="btn btn-primary" >Logar</button>
                        </div>
                    </div>
                </div>

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

export default Login;