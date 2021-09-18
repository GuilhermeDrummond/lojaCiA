export default class Produto {
     id : number
     categoria : string
     nome : string
     preco : number

    constructor(nome : string, categoria : string, preco : number) {
        this.nome = nome
        this.categoria = categoria
        this.preco = preco
        this.id = Math.floor(Math.random() * 10000)
    }
}