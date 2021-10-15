import Cliente from "../../classes/Cliente";
import { Container, Content, Title } from "./styles";

type ClientProps = {
    cliente : Cliente | undefined,
}

export function MyAccount({ cliente } : ClientProps) {
    return (
        <Container>
            <Title>Meus dados</Title>

            <Content>
                <p>{cliente?.getNome()}</p>
            </Content>
            
        </Container>
    )
}
