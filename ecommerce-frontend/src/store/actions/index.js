export function adicionarNoCarrinho(celular) {
    return {
        type: 'ADICIONAR_NO_CARRINHO',
        celular
    }
}

export function carregamentoInicial(celulares) {
    return {
        type: 'CARREGAMENTO_INICIAL',
        celulares
    }
}