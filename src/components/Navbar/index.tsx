import { useHistory } from 'react-router-dom'
import Cliente from '../../classes/Cliente'

import { Nav } from './styles'

type NavbarProps = {
    onLogout : () => void
    usuarioLogado : Cliente | undefined
}

export function Navbar({ onLogout, usuarioLogado } : NavbarProps) {

    const history = useHistory()

    return (
        <Nav>
            <strong>Loja CiA</strong>
            
            <div>
                <button onClick={() => history.push('/')}>Produtos</button>
                <button onClick={() => history.push('/cart')}>Carrinho</button>
                {
                    usuarioLogado 
                    ? <>
                        <button onClick={() => history.push('/account')}>Minha Conta</button>
                        <button onClick={() => {
                            onLogout()
                            history.push('/login')
                        }}>
                            Sair
                        </button>
                      </>
                    : <button onClick={() => history.push('/login')}>Entrar</button>
                }
            </div>
        </Nav>
    )
}
