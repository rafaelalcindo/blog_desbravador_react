import * as actionsTypes from '../actions/actionsTypes';
import updateObject from '../Utility';

const initialState = {
    nome: null,
    sobrenome: null,
    privilegio: 0,
    descricao: null,
    clube: null,
    unidade: null,
    foto_perfil: null,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.LOGAR: return updateObject(state, action.logar);

        case actionsTypes.ERROR_LOGAR: return updateObject(state, {error: action.error });

        case actionsTypes.LOGOUT: return updateObject(state, action.logout );
        
        default: return state
    }
}

export default reducer;

