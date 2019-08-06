import {applyMiddleware, createStore} from 'redux';
import { default as thunk } from 'redux-thunk';
import {createLogger } from 'redux-logger';
import * as api from "../commons/api";
import * as Actions from "./actions";

const INITIAL_STATE_COMPRA = {
    celulares: [],
    nomeCliente: ''
};

const INITIAL_STATE = {
    celulares: [],
    compra: INITIAL_STATE_COMPRA
};

//Daria pra dividir em mais reducers futuramente, ex: um pro home (celulares) e outro pro compra, se der tempo vou fazer.
function reducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'ADICIONAR_NO_CARRINHO':
            //Só adiciona no carrinho se não está adicionado
            if (!state.compra.celulares.find(el => (el.id === action.celular.id))) {
                return {...state, compra: {...state.compra, celulares: [...state.compra.celulares, action.celular] }};
            }
            return state;
        case 'ATUALIZAR_LISTA_CELULARES':
            return {...state, celulares: [...action.celulares]};
        case 'LIMPAR_CARRINHO':
            return {...state, compra: INITIAL_STATE_COMPRA};
        default:
            return state
    }
}

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducer, middleware);

store.dispatch((dispatch) => {

    return api.get("/celular")
        .then(response => {
            dispatch(Actions.atualizarListaCelulares(response));
        })
        .catch(error => {
            console.error(error);
        });
});

export default store;