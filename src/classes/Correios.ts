import IEntrega from "./IEntrega";

export default class Correios implements IEntrega {

    calcularValorPedido(valor : number) : number {
        return valor + 15
    }    

    getMetodoEntrega() : string {
        return 'Correios'
    }
}