export default class Endereco {
    private rua : string
    private bairro : string
    private numero : number
    private complemento ?: string
    private cep : string
    private cidade : string
    private uf : string 

    constructor(
        rua : string, 
        bairro : string,
        numero : number,
        cep : string,
        cidade : string,
        uf : string,
        complemento ?: string
    ){
        this.rua = rua
        this.bairro = bairro
        this.numero = numero
        this.complemento = complemento
        this.cep = cep
        this.cidade = cidade
        this.uf = uf
    }

    getRua() : string {
        return this.rua
    }

    getBairro() : string {
        return this.bairro
    }

    getComplemento() : string | undefined {
        return this.complemento
    }

    getNumero() : number {
        return this.numero
    }

    getCep() : string {
        return this.cep
    }

    getCidade() : string {
        return this.cidade
    }

    getUf() : string {
        return this.uf
    }
}