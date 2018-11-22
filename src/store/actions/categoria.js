import * as actionType from './actionsTypes';
import axios from 'axios';

export const especialidadeToProps = (categorias) => {
    return {
        type: actionType.LISTA_ESPECIALIDADE_CATEGORIAS,
        espeCategorias: categorias
    }
}


export const pegarEspecialidadesCategorias = () => {
    return dispatch => {
        axios.get('/blog/categorias/listarCategoria')
            .then(resposta => {
                dispatch(especialidadeToProps(resposta.data));
            })
            .catch(error => console.log('error', error));
    }
}

