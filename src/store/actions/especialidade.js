import * as actionsTypes from './actionsTypes';
import axios from 'axios';

export const pegarEspecialidade = (especialidade) => {
    return {
        type: actionsTypes.PEGAR_ESPECIALIDADE,
        get_especialidade: especialidade
    }
}

export const pegarEspecialidadeServer = (id) => {
    return dispatch => {
        axios.get('/blog/especialidade/pegarEspecialidade/'+id)
            .then(resposta => {
                dispatch(pegarEspecialidade(resposta));
            })
            .catch(error => console.log('error: ', error));
    }
}