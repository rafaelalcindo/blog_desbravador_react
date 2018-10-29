import * as actionsTypes from '../actions/actionsTypes';
import updateObject from '../Utility';

const initialState = {
    authToken: null,

}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.AUTENTICAR_USUARIO: return updateObject(state, action.authToken); 

        default:
            return state;
    }
}

export default reducer;