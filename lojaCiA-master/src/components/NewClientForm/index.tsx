import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Cliente from '../../classes/Cliente'
import Endereco from '../../classes/Endereco'
import { Container, Form, Title } from './styles'

type ClientProps = {
    nome : string
    cpf : string
    email : string
    senha : string
    telefone : string
}

type EnderecoProps = {
    rua : string
    numero : number
    cep : string
    cidade : string
    uf : string
    complemento ?: string
    bairro : string
}

type Teste = {
    onSubmit : (newClient : Cliente) => void
}

export function NewClientForm({ onSubmit } : Teste) {

    const history = useHistory()

    const [clientData, setClientData] = useState<ClientProps>({
        nome: '',
        cpf: '',
        email: '', 
        senha: '', 
        telefone: '' 
    })

    const [addressData, setAddressData] = useState<EnderecoProps>({
        rua: '', 
        numero: 0, 
        cep: '', 
        cidade: '', 
        uf: '', 
        complemento: '', 
        bairro: '', 
    })

    function createClient(e : FormEvent){
        e.preventDefault()

        const endereco = new Endereco(
            addressData.rua,
            addressData.bairro,
            addressData.numero,
            addressData.cep,
            addressData.cidade,
            addressData.uf,
            addressData.complemento
        )

        const cliente = new Cliente(
            clientData.nome,
            clientData.cpf,
            clientData.telefone,
            clientData.email,
            clientData.senha,
            endereco
        )

        onSubmit(cliente)
        history.push('/login')
    }

    return (

        <Container>
            <Form onSubmit={createClient}>

                <Title>Dados pessoais</Title>

                <label>Nome</label>
                <input
                    placeholder="Fulano de Tal ..."
                    value={clientData.nome}
                    onChange={e => {
                        setClientData({...clientData, nome: e.target.value})
                    }}
                />

                <div className='campos-juntos'>

                    <div>
                        <label>CPF</label>
                        <input
                            placeholder="999.999.999-99"
                            value={clientData.cpf}
                            onChange={e => {
                                setClientData({...clientData, cpf: e.target.value})
                            }}
                        />
                    </div>

                    <div>
                        <label>Telefone</label>
                        <input
                            placeholder="(99) 99999-9999"
                            value={clientData.telefone}
                            onChange={e => {
                                setClientData({...clientData, telefone: e.target.value})
                            }}
                        />
                    </div>

                </div>
                
                <div className="campos-juntos">
                    <div>
                        <label>E-mail</label>
                        <input
                            placeholder="exemplo@cia.com"
                            value={clientData.email}
                            onChange={e => {
                                setClientData({...clientData, email: e.target.value})
                            }}
                        />
                    </div>
                    <div>
                        <label>Senha</label>
                        <input
                            placeholder="******"
                            value={clientData.senha}
                            onChange={e => {
                                setClientData({...clientData, senha: e.target.value})
                            }}
                            type='password'
                        />
                    </div>
                </div>


                {/* ENDERECO */}

                <Title>Endereço</Title>

                <div className="campos-juntos">
                    <div>
                        <label>Rua</label>
                        <input
                            placeholder="Rua dos Bobos..."
                            value={addressData.rua}
                            onChange={ e => {
                                setAddressData({...addressData, rua: e.target.value})
                            }}
                        />
                    </div>
                    <div>
                        <label>Bairro</label>  
                        <input
                            placeholder="Jardim Jandira..."
                            value={addressData.bairro}
                            onChange={ e => {
                                setAddressData({...addressData, bairro: e.target.value})
                            }}
                        />
                    </div>
                </div>

                <div className='campos-juntos'>
                    <div>
                        <label>Número</label>  
                        <input
                            placeholder="999"
                            // value={addressData.numero}
                            onChange={ e => {
                                setAddressData({...addressData, numero: Number(e.target.value)})
                            }}
                            type='number'
                        />
                    </div>

                    <div>
                        <label>CEP</label>  
                        <input
                            placeholder="99999-99"
                            value={addressData.cep}
                            onChange={ e => {
                                setAddressData({...addressData, cep: e.target.value})
                            }}
                        />
                    </div>
                </div>

                <div className='campos-juntos'>
                    <div>
                        <label>Cidade</label>  
                        <input
                            placeholder="Iconha..."
                            value={addressData.cidade}
                            onChange={ e => {
                                setAddressData({...addressData, cidade: e.target.value})
                            }}
                        />
                    </div>
                    <div>
                        <label>UF</label>  
                        <input
                            placeholder="Espírito Santo..."
                            value={addressData.uf}
                            onChange={ e => {
                                setAddressData({...addressData, uf: e.target.value})
                            }}
                        />
                    </div>
                </div>



                <label>Complemento</label>  
                <input
                    placeholder="Apto, bloco, ..."
                    value={addressData.complemento}
                    onChange={ e => {
                        setAddressData({...addressData, complemento: e.target.value})
                    }}
                />  

                <button type='submit'>Enviar</button>            
            </Form>
        </Container>
    )
}
