import * as actionTypes from '../actions/actionsTypes';
import updateObject from '../Utility';

const initialState = [{
    _id: null,
    categoria: null,
    cor: null,
    especialidade: []
}];

const reducer = (state = initialState, action) => {
    switch(action.type){

        case actionTypes.LISTA_ESPECIALIDADE_CATEGORIAS: return updateObject(state, action.espeCategorias);

        default:
            return state
    }
}

export default reducer;
