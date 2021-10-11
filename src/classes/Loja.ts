import Endereco from "./Endereco"
import Estoque from "./Estoque"

export default class Loja {
    private unidade : string
    private cnpj : string
    private endereco : Endereco
    private estoque : Estoque

    constructor(unidade : string, cnpj : string, endereco : Endereco, estoque : Estoque) {
        this.unidade = unidade
        this.cnpj = cnpj
        this.endereco = endereco
        this.estoque = estoque
    }

    getEstoque() {
        return this.estoque
    }

    getCNPJ() {
        return this.cnpj
    }

    getEndereco() {
        return this.endereco
    }
    
    getUnidade() {
        return this.unidade
    }

    setUnidade(nome : string){
        this.unidade = nome
    }
}