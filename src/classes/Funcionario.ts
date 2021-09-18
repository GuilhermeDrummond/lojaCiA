import Endereco from "./Endereco"

export default class Funcionario {
    private nome : string
    private matricula : number
    private cpf : string
    private endereco : Endereco
    private email : string
    private telefone : string

    constructor(nome : string, cpf : string, endereco : Endereco, email : string, telefone : string) {
        this.nome = nome
        this.cpf = cpf
        this.endereco = endereco
        this.email = email
        this.telefone = telefone
        this.matricula = Math.floor(Math.random() * 10000)
    }
}