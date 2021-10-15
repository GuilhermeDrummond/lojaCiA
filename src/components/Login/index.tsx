import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import Cliente from "../../classes/Cliente";
import { Container, LoginForm } from "./styles";

type LoginProps = {
    users : Cliente[]
    onLogin : ( user : Cliente) => void
}

export function Login({ users, onLogin } : LoginProps) {

    const [email, setUser] = useState ('')
    const [password, setPassword] = useState('')

    const history = useHistory()


    function handleSubmit(e : FormEvent) {
        e.preventDefault()

        const userExist = users.find(elem => elem.usuarioValido(email, password))

        if(userExist) {
            onLogin(userExist)
            history.push('/')
        } else {
            alert('Usuário não encontrado')
        }
    }

    return (
        <Container>
            <LoginForm>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nome de usuário</label>
                        <input 
                            type="text"
                            value={email}
                            onChange={(e) => setUser(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Senha</label>
                        <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type='submit'>Entrar</button>
                </form>

                <p>
                    Não tem uma conta? <br/>
                    <a href='/create-client'>Crie uma conta</a>
                </p>
            </LoginForm>
        </Container>
    )
}
