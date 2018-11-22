import * as actionsTypes from './actionsTypes';

export const autenticarUsuario = (token) => {
    
    localStorage.setItem("token", token);
    return {
        type: actionsTypes.AUTENTICAR_USUARIO,
        authToken: token
    }
}

export const verificarAuth = () => {
    return dispatch => {
        if(localStorage.getItem("token") !== null && localStorage.getItem("token") !== undefined){
            dispatch(autenticarUsuario(localStorage.getItem("token")));
        }
    }
}

export const logoutUsuario = () => {
    localStorage.removeItem("token");
    return {
        type: actionsTypes.LOGOUT,
        authToken: null
    }
}


