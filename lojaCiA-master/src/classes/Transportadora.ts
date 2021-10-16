import IEntrega from "./IEntrega";

export default class Transportadora implements IEntrega {
    despacharPedido() {
        console.log('foda')
    }    
}