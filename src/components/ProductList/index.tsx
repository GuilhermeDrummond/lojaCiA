import { useState } from 'react'
import Loja from '../../classes/Loja'
import Produto from '../../classes/Produto'
import { Card, Container } from './styles'

type CarrinhoProps = {
    onAddCart : (prod : Produto, loja : Loja) => void
    catalogoCompleto : Array<Loja>
}

export function ProductsList({ onAddCart, catalogoCompleto }: CarrinhoProps) {

    return (
        <Container>
            <h1>OLHA OS PRODUTOS AE MINHA GENTE</h1>

            {
                catalogoCompleto.map(loja => {
                    return loja.getEstoque().getProdutos().map(item => {
                        return (
                            <Card key={item.produto.id}>
                                <div className='products'>
                                    <img src="http://placehold.it/150x150"/>

                                    <div className='products-info'>
                                        <div>
                                            <h1>{item.produto.nome}</h1>

                                            <p className='products-price'>R$ {item.produto.preco}0</p>
                                        </div>

                                        <p className= 'products-rest'>
                                            {item.produto.categoria} -  Quantidade em estoque: {item.quantidade === 0 ? 'Indisponível' : item.quantidade} - {loja.getUnidade()}
                                        </p>

                                    </div>
                                </div>

                                <button
                                    onClick={() => onAddCart(item.produto, loja)}
                                    disabled={item.quantidade === 0 ? true : false}
                                >
                                    Adicionar ao carrinho
                                </button>
                            </Card>
                        )
                    })
                })
            }
        </Container>
    )
}
