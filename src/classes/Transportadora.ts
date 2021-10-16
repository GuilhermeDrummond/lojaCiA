import IEntrega from "./IEntrega";

export default class Transportadora implements IEntrega {
    calcularValorPedido(valor : number) : number {
        return valor + 25
    }    

    getMetodoEntrega() : string {
        return 'Transportadora'
    }
}