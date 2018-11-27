import * as actionsTypes from '../actions/actionsTypes';
import updateObject from '../Utility';

const initialState = {
    cadastrado_em: null,
    comentarios: [],
    criado_por: null,
    foto_especialidade: null,
    requisitos: null,
    titulo: null,
    _id: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.PEGAR_ESPECIALIDADE: return updateObject(state, action.get_especialidade);
        default: return state;
    }
}

export default reducer;

