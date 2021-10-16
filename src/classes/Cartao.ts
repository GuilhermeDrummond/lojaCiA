import IPagamento from "./IPagamento";

export default class Cartao implements IPagamento {
    calcularValorPagamento(valor : number) {
        return valor + 1000
    }

    getFormaPagamento() : string {
        return 'Cartão'
    }
}