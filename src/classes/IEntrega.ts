export default interface IEntrega {
    calcularValorPedido(valor : number) : number
    getMetodoEntrega() : string
}