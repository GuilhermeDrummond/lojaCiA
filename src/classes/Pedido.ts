import Carrinho from "./Carrinho"
import IEntrega from "./IEntrega"
import IPagamento from "./IPagamento"

export default class Pedido {
    private id : number
    private carrinho : Carrinho
    private valorTotal : number
    private metodoPagamento : IPagamento
    private metodoEntrega : IEntrega

    constructor(carrinho : Carrinho, metodoPagamento : IPagamento, metodoEntrega : IEntrega) {
        this.id = Math.floor(Math.random() * 10000)
        this.carrinho = carrinho
        this.valorTotal = carrinho.totalCarrinho() 
        this.metodoEntrega = metodoEntrega
        this.metodoPagamento = metodoPagamento
    }

    getListaProdutos() {
        return this.carrinho.getProdutos()
    }

    getFormaPagamento() : string {
        return this.metodoPagamento.getFormaPagamento()
    }

    getMetodoEntrega() : string {
        return this.metodoEntrega.getMetodoEntrega()
    }

    getValorTotal() : number {
        return this.valorTotal
    }

    getId() : number {
        return this.id
    }
}