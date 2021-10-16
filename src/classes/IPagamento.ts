export default interface IPagamento {
    calcularValorPagamento(valor : number) : number
    getFormaPagamento() : string
}