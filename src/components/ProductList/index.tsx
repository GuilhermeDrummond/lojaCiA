import { useState } from 'react'
import { Loja1, Loja2, Loja3 } from '../../classes/Gerador'
import Loja from '../../classes/Loja'
import Produto from '../../classes/Produto'
import { Card, Container } from './styles'

type CarrinhoProps = {
    onAddCart : (prod : Produto) => void
}

export function ProductsList({ onAddCart }: CarrinhoProps) {

    const [catalogoCompleto, setCatalogoCompleto] = useState([
        Loja1, 
        Loja2, 
        Loja3
    ])

    function adicionarCarrinho(item : Produto, loja : Loja) {

        setCatalogoCompleto(catalogoCompleto.map(elem => {
            if (elem.getCNPJ() === loja.getCNPJ()) {
                elem.getEstoque().removerProduto(item)
            }
            
            return elem
        }))

        onAddCart(item)        
    }

    return (
        <Container>
            <h1>OLHA OS PRODUTOS AE MINHA GENTE</h1>

            {
                catalogoCompleto.map(loja => {
                    return loja.getEstoque().getProdutos().map(item => {
                        return (
                            <Card key={item.produto.id}>
                                <div className='products'>
                                    <img src="http://placehold.it/200x200"/>

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
                                    onClick={() => adicionarCarrinho(item.produto, loja)}
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
