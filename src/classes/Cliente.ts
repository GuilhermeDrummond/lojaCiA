import Endereco from "./Endereco"

export default class Cliente {
    private id : number
    private nome : string
    private cpf : string
    private telefone : string
    private endereco : Endereco
    private email : string
    private senha : string

    constructor(nome : string, cpf : string, telefone : string, email : string, senha : string, endereco : Endereco){
        this.id = Math.floor(Math.random() * 10000)
        this.nome = nome
        this.cpf = cpf
        this.telefone = telefone
        this.endereco = endereco
        this.email = email
        this.senha = senha
    }

    usuarioValido(email : string, senha : string) : boolean {
        if (email === this.email && senha === this.senha) return true
        return false
    }

    getNome() : string {
        return this.nome
    }
}
