import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, LoginForm } from "./styles";

type UserData = {
    username : string
    password : string
}

type UserList = {
    users : UserData[]
}

export function Login({ users } : UserList) {

    const [user, setUser] = useState ('')
    const [password, setPassword] = useState('')

    const history = useHistory()


    function handleSubmit(e : FormEvent) {
        e.preventDefault()

        const userExist = users.some(elem => elem.username === user && elem.password === password)

        userExist ? history.push('/products') : alert('n')
    }

    return (
        <Container>
            <LoginForm>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nome de usuário</label>
                        <input 
                            type="text"
                            value={user}
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
