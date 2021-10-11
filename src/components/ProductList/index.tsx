import { useState } from 'react'
import { Loja1, Loja2, Loja3 } from '../../classes/GeradorCatalogo'
import Loja from '../../classes/Loja'
import Produto from '../../classes/Produto'
import { Card, Container } from './styles'


export function ProductsList() {

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
    }

    return (
        <Container>
            <h1>OLHA OS PRODUTOS AE MINHA GENTE</h1>

            {/* {
                Loja1.getEstoque().getProdutos().map(item => <p>{item[0].nome}</p>)
            }
            {
                Loja2.getEstoque().getProdutos().map(item => <p>{item[0].nome}</p>)
            }
            {
                Loja3.getEstoque().getProdutos().map(item => <p>{item[0].nome}</p>)
            } */}

            {
                catalogoCompleto.map(loja => {
                    return loja.getEstoque().getProdutos().map(item => {
                        return (
                            <Card key={item[0].id}>
                                <div className='products'>
                                    <img src="http://placehold.it/200x200"/>

                                    <div className='products-info'>
                                        <div>
                                            <h1>{item[0].nome}</h1>

                                            <p className='products-price'>R$ {item[0].preco}0</p>
                                        </div>

                                        <p className= 'products-rest'>
                                            {item[0].categoria} -  Quantidade em estoque: {item[1] === 0 ? 'Indisponível' : item[1]} - {loja.getUnidade()}
                                        </p>

                                    </div>
                                </div>

                                <button
                                    onClick={() => adicionarCarrinho(item[0], loja)}
                                    disabled={item[1] === 0 ? true : false}
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
