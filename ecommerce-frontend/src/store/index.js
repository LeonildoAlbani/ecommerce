import {applyMiddleware, createStore} from 'redux';
import { default as thunk } from 'redux-thunk';
//import promise from "redux-promise-middleware"; TODO - verificar se vai ser necessário
import {createLogger } from 'redux-logger';
import * as api from "../commons/api";

const INITIAL_STATE = {
    celulares: [{id:1}],
    carrinho: []
};

//Daria pra dividir em mais reducers futuramente
function reducer(state = INITIAL_STATE, action) {

    if (action.type === 'ADICIONAR_NO_CARRINHO') {
        return {...state, carrinho: [...state.carrinho, action.celular]};
    }
    if (action.type === 'CARREGAMENTO_INICIAL') {
        return {...state, celulares: [...action.celulares]};
    }

    return state
}

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducer, middleware);

store.dispatch((dispatch) => {

    return api.get("/celular")
        .then(response => {
            //TODO - usar action
            dispatch({type: "CARREGAMENTO_INICIAL", celulares: response})
            //Actions.carregamentoInicial(response);
        })
        .catch(error => {
            console.error(error);
        });
});

export default store;