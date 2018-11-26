import * as actionType from './actionsTypes';
import axios from 'axios';

export const especialidadeToProps = (categorias) => {
    return {
        type: actionType.LISTA_ESPECIALIDADE_CATEGORIAS,
        espeCategorias: categorias
    }
}

export const esvaziarCategorias = () => {
    return {
        type: actionType.ESVAZIAR_CATEGORIAS,
        emptyCategoria: initialStateCategoria
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

export const esvaziarCategoriasEspeci = () => {
    return dispatch => {
        dispatch(esvaziarCategorias());
    }
}

export const pegarTodasEspecialidadesDeCategoria = (id) => {
    return dispatch => {
        axios.get('/blog/categorias/listarUmaCategoria/'+id)
            .then(resposta => {
                dispatch(especialidadeToProps(resposta.data))
            })
            .catch(error => console.log('error: ', error));
    }
}


const initialStateCategoria = [{
    _id: null,
    categoria: null,
    cor: null,
    especialidade: []
}];

