import * as actionsTypes from '../actions/actionsTypes';
import updateObject from '../Utility';

const initialState = {
    authToken: null,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.AUTENTICAR_USUARIO: return updateObject(state, { authToken: action.authToken }); 

        case actionsTypes.LOGOUT: return updateObject(state, { authToken: action.authToken });

        default:
            return state;
    }
}

export default reducer;