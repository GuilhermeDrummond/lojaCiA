import IPagamento from "./IPagamento";

export default class Cartao implements IPagamento {
    calcularValorPagamento(valor : number) {
        return (valor * 1.02) - valor
    }

    getFormaPagamento() : string {
        return 'Cartão'
    }
}