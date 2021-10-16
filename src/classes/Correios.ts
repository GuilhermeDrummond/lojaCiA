import IEntrega from "./IEntrega";

export default class Correios implements IEntrega {

    calcularValorPedido() : number {
        return 15
    }    

    getMetodoEntrega() : string {
        return 'Correios'
    }
}