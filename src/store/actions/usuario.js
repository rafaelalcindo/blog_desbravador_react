import * as actionsTypes from './actionsTypes';
import axios from 'axios';
import jwt from 'jsonwebtoken';

export const logarUsu = (logar) => {
    return {
        type: actionsTypes.LOGAR,
        logar: logar
    }
};

export const fazerLogin = (login, senha) => {
    return dispatch => {
        console.log('login: ' , login);
        console.log('senha: ', senha);
        let loginSystem = {
            login: login,
            senha: senha
        }

        axios.post('/blog/logar/usuario', loginSystem )
            .then(resposta => {
                let decode    = jwt.decode(resposta.data);
                let dadosUser = decode.data[0];
                dispatch(logarUsu(dadosUser));
            })
            .catch(error => {
                console.log(error);
            })
    }
    
};

