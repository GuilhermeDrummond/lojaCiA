import Carrinho from "../../classes/Carrinho"

type CartProps = {
    carrinho : Carrinho
}

export function Cart({ carrinho } : CartProps) {

    return (
        <div>
            {carrinho.getProdutos().map(elem => {
                return(
                    <p key={elem.produto.id}>{elem.produto.nome} quantidade: {elem.quantidade}</p>
                )
            })}
        </div>
    )
}
