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
export function limparCarrinho() {
    return {
        type: 'LIMPAR_CARRINHO'
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

export function gravarCompra(compra) {
    store.dispatch((dispatch) => {

        return api.post("/compra", JSON.stringify(compra))
        .then(response => {
            dispatch(limparCarrinho());
        })
        .catch(error => {
            console.error(error);
        });
    });
}