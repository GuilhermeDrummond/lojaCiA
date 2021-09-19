import Produto from "./Produto"

export default class Estoque {
    private produtos : Array<any>

    constructor() {
        this.produtos = []
    }

    adicionarProduto(produto : Produto) {
        this.produtos.push(produto)
    } 

    removerProduto(produto : Produto) {
        this.produtos.map(prod => {
            if(prod[0].id === produto.id) { 
                prod[1]--
            }
        })
    }
}