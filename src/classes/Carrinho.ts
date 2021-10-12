import Produto from "./Produto"

type ListaProdutos = {
    produto : Produto
    quantidade : number
}

export default class Carrinho {
    private produtos : Array<ListaProdutos>

    constructor() {
        this.produtos = []
    }

    adicionarProduto(prod : Produto) {
        const produtoExiste = this.produtos.find(elem => elem.produto.id === prod.id)
        
        if(produtoExiste){
            produtoExiste.quantidade++
        } else {
            this.produtos.push({produto: prod, quantidade: 1})
        }
    }

    getProdutos(){
        return this.produtos
    }
}