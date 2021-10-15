import { useHistory } from "react-router-dom"
import Carrinho from "../../classes/Carrinho"
import Cliente from "../../classes/Cliente"
import Produto from "../../classes/Produto"
import { Card, CartDetails, Container, Title } from "./styles"

type CartProps = {
    carrinho : Carrinho
    onRemove : (prod : Produto) => void
    usuarioLogado : Cliente | undefined
}

export function Cart({ carrinho, onRemove, usuarioLogado } : CartProps) {

    const history = useHistory()

    function handlePurchase() {
        if(usuarioLogado) {
            history.push('/checkout')
        } else {
            alert('Você precisa estar logado para poder comprar')
            history.push('/login')
        }
    }

    return (
        <Container>
            {
                carrinho.getProdutos().length > 0 && carrinho.getProdutos().find(elem => elem.quantidade > 0)
                ? carrinho.getProdutos().map(elem => {
                    if(elem.quantidade > 0) {
                        return(
                            <Card key={elem.produto.id}>
                                <div className='products'>
                                    <img src="http://placehold.it/150x150"/>
    
                                    <div className='products-info'>
                                        <div>
                                            <h1>{elem.produto.nome}</h1>
    
                                            <p className='products-price'>R$ {(elem.produto.preco).toFixed(2)}</p>
                                            <p className='products-quantity'>Quantidade {elem.quantidade}</p>
                                        </div>
    
                                            <p className='products-total'>Total: R$ {(elem.produto.preco * elem.quantidade).toFixed(2)}</p>
                                    </div>
                                </div>
    
                                <button
                                    onClick={() => {
                                        onRemove(elem.produto)
                                    }}
                                >
                                    Remover
                                </button>
                            </Card>
                        )
                    }
                })
                : <Title>Nenhum produto adicionado ao carrinho</Title>

            }

            {
                carrinho.getProdutos().length > 0 && carrinho.getProdutos().find(elem => elem.quantidade > 0) &&
                <CartDetails>

                    <p>Valor total do carrinho: R$ {carrinho.totalCarrinho().toFixed(2)}</p>
                    <button onClick={handlePurchase}>Comprar</button>

                </CartDetails>
                
            }

        </Container>
    )
}
