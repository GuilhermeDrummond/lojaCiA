import React from 'react'
import { Loja1, Loja2, Loja3 } from '../../classes/GeradorCatalogo'

export function ProductsList() {

    const catalogoCompleto = [...Loja1.getEstoque().getProdutos(), ...Loja2.getEstoque().getProdutos(), ...Loja3.getEstoque().getProdutos()]
    return (
        <div>
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
                catalogoCompleto.map(item => <p key={Math.random() * 10000}>{item[0].nome}</p>)
            }
        </div>
    )
}
