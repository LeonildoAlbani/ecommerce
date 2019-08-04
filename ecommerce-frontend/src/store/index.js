import {applyMiddleware, createStore} from 'redux';
import { default as thunk } from 'redux-thunk';
import {createLogger } from 'redux-logger';
import * as api from "../commons/api";
import * as Actions from "./actions";

const INITIAL_STATE = {
    celulares: [],
    carrinho: []
};

//Daria pra dividir em mais reducers futuramente
function reducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'ADICIONAR_NO_CARRINHO':
            return {...state, carrinho: [...state.carrinho, action.celular]};
        case 'ATUALIZAR_LISTA_CELULARES':
            return {...state, celulares: [...action.celulares]};
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