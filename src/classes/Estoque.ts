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

    adicionarProduto(prod : Produto, quantidade : number = 0) : void {
        const produtoExiste = this.produtos.find(elem => elem.produto.getId() === prod.getId())
        
        if(produtoExiste){
            produtoExiste.quantidade++
        } else {
            this.produtos.push({produto: prod, quantidade})
        }
    }  

    removerProduto(produto : Produto) : void {
        this.produtos.map(prod => {
            if(prod.produto.getId() === produto.getId()) { 
                prod.quantidade--
            }
            
            return prod
        })
    }

    getProdutos() : Array<ListaProdutos> {
        return this.produtos
    }
}