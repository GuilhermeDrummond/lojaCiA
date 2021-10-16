import IEntrega from "./IEntrega";

export default class Correios implements IEntrega {
    despacharPedido() {
        console.log('foda')
    }    
}