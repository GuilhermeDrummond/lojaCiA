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

    adicionarProduto(prod : Produto) : void {
        const produtoExiste = this.produtos.find(elem => elem.produto.id === prod.id)
        
        if(produtoExiste){
            produtoExiste.quantidade++
        } else {
            this.produtos.push({produto: prod, quantidade: 1})
        }
    }

    removerProduto(prod : Produto) : void {
        const produto = this.produtos.find(elem => elem.produto.id === prod.id)
        if(produto) produto.quantidade--
    }

    totalCarrinho() : number {
        let total = 0

        this.produtos.forEach(elem => {
            total += elem.quantidade * elem.produto.preco
        })

        return total
    }

    limparCarrinho() : Carrinho {
        return new Carrinho()
    } 

    getProdutos() : Array<ListaProdutos> {
        return this.produtos
    }
}