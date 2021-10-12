import Produto from "./Produto"

type ListaProdutos = {
    produto : Produto
    quantidade : number
}

export default class Estoque {
    private produtos : Array<ListaProdutos>

    constructor() {
        this.produtos = []
    }

    adicionarProduto(produto : Produto, quantidade : number) {
        this.produtos.push({produto, quantidade})
    }  

    removerProduto(produto : Produto) {
        this.produtos.map(prod => {
            if(prod.produto.id === produto.id) { 
                prod.quantidade--
            }
            
            return prod
        })
    }

    getProdutos() {
        return this.produtos
    }
}