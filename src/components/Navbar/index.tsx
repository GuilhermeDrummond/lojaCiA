import { useHistory } from 'react-router-dom'

import { Nav } from './styles'

export function Navbar() {

    const history = useHistory()

    return (
        <Nav>
            <strong>A loja mais braba do BRASIL-SIL-SIL-SIL</strong>
            
            <div>
                <button onClick={() => history.push('/products')}>Produtos</button>
                <button>Carrinho</button>
                <button onClick={() => history.push('/create-client')}>Minha Conta</button>
                <button onClick={() => history.push('/')}>Sair</button>
            </div>
        </Nav>
    )
}
