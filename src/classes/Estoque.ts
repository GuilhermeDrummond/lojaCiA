import Produto from "./Produto"

export default class Estoque {
    private produtos : Array<Produto>

    constructor(produtos : Array<Produto>) {
        this.produtos = produtos
    }
}