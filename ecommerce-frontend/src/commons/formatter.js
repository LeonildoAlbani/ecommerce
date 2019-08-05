export function formatMoney(valor, decimais = 2) {
    return `R$ ${valor.toFixed(decimais).replace(".", ",")}`
}