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

    getRua() {
        return this.rua
    }
}