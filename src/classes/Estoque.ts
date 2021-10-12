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

    adicionarProduto(prod : Produto, quantidade : number = 0) {
        const produtoExiste = this.produtos.find(elem => elem.produto.id === prod.id)
        
        if(produtoExiste){
            produtoExiste.quantidade++
        } else {
            this.produtos.push({produto: prod, quantidade})
        }
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