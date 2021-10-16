import IPagamento from "./IPagamento";

export default class Boleto implements IPagamento {
    calcularValorPagamento(valor : number) {
        return (valor * 0.9) - valor 
    }

    getFormaPagamento() : string {
        return 'Boleto'
    }
}