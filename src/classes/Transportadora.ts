import IEntrega from "./IEntrega";

export default class Transportadora implements IEntrega {
    calcularValorPedido() : number {
        return 25
    }    

    getMetodoEntrega() : string {
        return 'Transportadora'
    }
}