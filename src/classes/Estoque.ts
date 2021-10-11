import Produto from "./Produto"

export default class Estoque {
    private produtos : Array<any>

    constructor() {
        this.produtos = []
    }

    adicionarProduto(produto : Produto, quantidade : number) {
        this.produtos.push([produto, quantidade])
    }  

    removerProduto(produto : Produto) {
        this.produtos.map(prod => {
            if(prod[0].id === produto.id) { 
                prod[1]--
            }
            
            return prod
        })
    }

    getProdutos() {
        return this.produtos
    }
}