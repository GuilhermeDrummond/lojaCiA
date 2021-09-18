import Endereco from "./Endereco"
import Estoque from "./Estoque"

export default class Loja {
    private cnpj : string
    private endereco : Endereco
    private estoque : Estoque

    constructor(cnpj : string, endereco : Endereco, estoque : Estoque) {
        this.cnpj = cnpj
        this.endereco = endereco
        this.estoque = estoque
    }
}