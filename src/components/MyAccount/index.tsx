import Cliente from "../../classes/Cliente";
import Pedido from "../../classes/Pedido";
import { Container, Content, Subtitle, Title } from "./styles";

type ClientProps = {
    cliente : Cliente | undefined,
    historico : Pedido[]
}

export function MyAccount({ cliente, historico } : ClientProps) {
    return (
        <Container>
            <Title>Meus dados</Title>

            <Content>
                
                <Subtitle>Dados pessoais</Subtitle>

                <div>
                    <label>
                        Nome
                        <p>{cliente?.getNome()}</p>
                    </label>

                    <label>
                        Telefone
                        <p>{cliente?.getTelefone()}</p>
                    </label>
                </div>
                
                <div>
                    <label>
                        E-mail
                        <p>{cliente?.getEmail()}</p>
                    </label>
                    
                    <label>
                        CPF
                        <p>{cliente?.getCpf()}</p>
                    </label>
                </div>


                <Subtitle>Endereco</Subtitle>
                <div>
                    <label>
                        Rua
                        <p>{cliente?.getEndereco().getRua()}</p>
                    </label>
                
                    <label>
                        Bairro
                        <p>{cliente?.getEndereco().getBairro()}</p>
                    </label>
                </div>

                <div>
                    <label>
                        Número
                        <p>{cliente?.getEndereco().getNumero()}</p>
                    </label>
                
                    <label>
                        CEP
                        <p>{cliente?.getEndereco().getCep()}</p>
                    </label>
                </div>

                <div>
                    <label>
                        Cidade
                        <p>{cliente?.getEndereco().getCidade()}</p>
                    </label>
               
                    <label>
                        UF
                        <p>{cliente?.getEndereco().getUf()}</p>
                    </label>
                </div>                

                {
                    cliente?.getEndereco().getComplemento() && 
                    <div>
                        <label className='last'>
                            Complemento
                            <p>{cliente?.getEndereco().getComplemento()}</p>
                        </label>
                    </div>
                }
            </Content>

            {
                historico.length > 0 &&
                <>
                    <Title>Histórico de compras</Title>

                    {
                        historico.map(pedido => {
                            return (
                                <Content key={pedido.getId()}>
                                    <h2>Numero pedido: #{pedido.getId()}</h2>

                                    <label>
                                        Forma de pagamento
                                        <p>{pedido.getFormaPagamento()}</p>
                                    </label>

                                    <label>
                                        Total
                                        <p>R$ {pedido.getValorTotal().toFixed(2)}</p>
                                    </label>

                                    <label>
                                        Metodo de entrega
                                        <p>{pedido.getMetodoEntrega()}</p>
                                    </label>

                                    <label>
                                        Lista de produtos
                                        <ul>
                                            {pedido.getListaProdutos().map(prod => {
                                                return (
                                                    <li key={prod.produto.getId()}>
                                                        {prod.produto.getNome()}
                                                        <ul className='sublist'>
                                                            <li>
                                                                Quantidade: {prod.quantidade}
                                                            </li>
                                                            <li>
                                                                Preço unitário: R$ {prod.produto.getPreco().toFixed(2)}
                                                            </li>
                                                            <li>
                                                                Preço total: R$ {(prod.quantidade * prod.produto.getPreco()).toFixed(2)}
                                                            </li>
                                                        </ul>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </label>

                                </Content>
                            )
                        })
                    }
                </>
            }

            
        </Container>
    )
}
