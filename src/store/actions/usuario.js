import * as actionsTypes from './actionsTypes';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import * as auth from './auth';

export const logarUsu = (logar) => {
    return {
        type: actionsTypes.LOGAR,
        logar: logar
    }
};

export const removerDadosUsuario = () => {
    return {
        type: actionsTypes.LOGOUT,
        logar: null
    }
}

export const fazerLogin = (login, senha) => {
    return dispatch => {
        let loginSystem = {
            login: login,
            senha: senha
        }

        axios.post('/blog/logar/usuario', loginSystem )
            .then(resposta => {
                let decode    = jwt.decode(resposta.data);
                let dadosUser = decode.data[0];
                if(decode.data[0] !== undefined){
                    auth.autenticarUsuario(resposta.data);
                    dispatch(logarUsu(dadosUser));
                }else {
                    dispatch(loginSenhaErrado());
                }
                
            })
            .catch(error => {
                console.log(error);
            })
    }
    
};

export const preecherDadosUsuario = () => {
    return dispatch => {
        let decode = jwt.decode(localStorage.getItem("token"));
        let dadosUser = decode.data[0];
        
        dispatch(logarUsu(dadosUser));
    }
}



// =================== Errors de Login ================


export const loginSenhaErrado = () =>{
    return {
        type: actionsTypes.ERROR_LOGAR,
        error: "Erro, Login ou Senha Inválido" 
    }
}
