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
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.LOGAR: return updateObject(state, action.logar);
        
        default: return state
    }
}

export default reducer;

