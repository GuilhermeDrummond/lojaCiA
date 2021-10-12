import { useHistory } from "react-router-dom"
import Carrinho from "../../classes/Carrinho"
import Produto from "../../classes/Produto"
import { Card, Container } from "./styles"

type CartProps = {
    carrinho : Carrinho
    onRemove : (prod : Produto) => void
}

export function Cart({ carrinho, onRemove } : CartProps) {

    const history = useHistory()

    return (
        <Container>
            {
                carrinho.getProdutos().map(elem => {
                    return(
                        <Card key={elem.produto.id}>
                            <div className='products'>
                                <img src="http://placehold.it/150x150"/>

                                <div className='products-info'>
                                    <div>
                                        <h1>{elem.produto.nome}</h1>

                                        <p className='products-price'>R$ {elem.produto.preco}0</p>
                                        <p className='products-price'>Quantidade {elem.quantidade}</p>
                                    </div>

                                
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    onRemove(elem.produto)
                                    history.push('/cart')
                                }}
                            >
                                Remover
                            </button>
                        </Card>
                    )
                })
            }
        </Container>
    )
}
