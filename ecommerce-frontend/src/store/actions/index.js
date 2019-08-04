import * as api from "../../commons/api";
import store from "../../store";

export function adicionarNoCarrinho(celular) {
    return {
        type: 'ADICIONAR_NO_CARRINHO',
        celular
    }
}

export function atualizarListaCelulares(celulares) {
    return {
        type: 'ATUALIZAR_LISTA_CELULARES',
        celulares
    }
}

//Tem como fazer isso de uma forma mais "elegante"? :/
export function buscarListaCelulares(busca) {
    store.dispatch((dispatch) => {

        return api.get("/celular/busca?busca="+busca)
        .then(response => {
            dispatch(atualizarListaCelulares(response));
        })
        .catch(error => {
            console.error(error);
            dispatch(atualizarListaCelulares([]));
        });
    });
}