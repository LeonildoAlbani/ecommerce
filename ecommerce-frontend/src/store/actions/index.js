import * as api from "../../commons/api";
import store from "../../store";

export function adicionarNoCarrinho(celular) {
    return {
        type: 'ADICIONAR_NO_CARRINHO',
        celular
    }
}

export function alterarNomeCliente(nomeCliente) {
    return {
        type: 'ALTERAR_NOME_CLIENTE',
        nomeCliente
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

export function buscarListaCelulares(busca, elasticSearch) {
    let url = "/celular/busca-sem-elasticsearch?busca="+busca;

    if (elasticSearch) {
        url = "/celular/busca?busca="+busca
    }
    return actionAssincrona(api.get(url), atualizarListaCelulares, atualizarListaCelulares([]))

}

export function gravarCompra(compra) {
    return actionAssincrona(api.post("/compra", JSON.stringify(compra)), limparCarrinho);
}

/**
 * Teria que dar uma melhorada para que funcione de forma melhor em uma ação na falha.
 *
 * @param acao promise que será executada
 * @param sucesso ação após sucesso da promise, receberá o response por parametro
 * @param falha ação após falha da promise, neste caso apenas um objeto já montado
 */
function actionAssincrona(acao, sucesso, falha) {
    store.dispatch((dispatch) => {
        return acao
        .then(response => {
            if (sucesso) {
                dispatch(sucesso(response));
            }
        })
        .catch(error => {
            console.error(error);
            if (falha) {
                dispatch(falha);
            }
        })
    })
}