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
                <h1>Dados pessoais</h1>
                <p>Nome: {cliente?.getNome()}</p>
                <p>Telefone: {cliente?.getTelefone()}</p>
                <p>E-mail: {cliente?.getEmail()}</p>
                <p>CPF: {cliente?.getCpf()}</p>

                <h1>Endereco</h1>
                <p>Rua: {cliente?.getEndereco().getRua()}</p>
                <p>Bairro: {cliente?.getEndereco().getBairro()}</p>
                <p>Número: {cliente?.getEndereco().getNumero()}</p>
                {cliente?.getEndereco().getComplemento() && <p>Complemento: {cliente?.getEndereco().getComplemento()}</p>}
                <p>CEP: {cliente?.getEndereco().getCep()}</p>
                <p>Cidade: {cliente?.getEndereco().getCidade()}</p>
                <p>UF: {cliente?.getEndereco().getUf()}</p>
            </Content>

            <Title>Histórico de compras</Title>

            <Content>
                <p>LISTA DE PRODUTOS</p>
            </Content>
            
        </Container>
    )
}
