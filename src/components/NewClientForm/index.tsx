import { useState } from 'react'
import Cliente from '../../classes/Cliente'
import Endereco from '../../classes/Endereco'
import { Form } from './styles'

interface ClientProps {
    nome : string
    cpf : string
    email : string
    telefone : string
}

interface EnderecoProp {
    rua : string
    numero : number
    cep : string
    cidade : string
    uf : string
    complemento ?: string
    bairro : string
}


export function NewClientForm() {

    const [clientData, setClientData] = useState<ClientProps>({} as ClientProps)

    const [addressData, setAddressData] = useState<EnderecoProp>({} as EnderecoProp)

    function createClient(e : any){
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
            endereco
        )

        console.log(cliente)
    }

    return (

        <Form onSubmit={createClient}>
            <label>Nome</label>
            <input
                placeholder="Nome"
                value={clientData.nome || ''}
                onChange={e => {
                    setClientData({...clientData, nome: e.target.value})
                }}
            />

            <label>CPF</label>
            <input
                placeholder="CPF"
                value={clientData.cpf || ''}
                onChange={e => {
                    setClientData({...clientData, cpf: e.target.value})
                }}
            />

            <label>E-mail</label>
            <input
                placeholder="Email"
                value={clientData.email || ''}
                onChange={e => {
                    setClientData({...clientData, email: e.target.value})
                }}
            />

            <label>Telefone</label>
            <input
                placeholder="Telefone"
                value={clientData.telefone || ''}
                onChange={e => {
                    setClientData({...clientData, telefone: e.target.value})
                }}
            />

            {/* ENDERECO */}

            <label>Rua</label>
            <input
                placeholder="Rua"
                value={addressData.rua || ''}
                onChange={ e => {
                    setAddressData({...addressData, rua: e.target.value})
                }}
            />

            <label>Bairro</label>  
            <input
                placeholder="Bairro"
                value={addressData.bairro || ''}
                onChange={ e => {
                    setAddressData({...addressData, bairro: e.target.value})
                }}
            />

            <label>Número</label>  
            <input
                placeholder="Número"
                value={addressData.numero || ''}
                onChange={ e => {
                    setAddressData({...addressData, numero: Number(e.target.value)})
                }}
            />

            <label>CEP</label>  
            <input
                placeholder="CEP"
                value={addressData.cep || ''}
                onChange={ e => {
                    setAddressData({...addressData, cep: e.target.value})
                }}
            />

            <label>Cidade</label>  
            <input
                placeholder="Cidade"
                value={addressData.cidade || ''}
                onChange={ e => {
                    setAddressData({...addressData, cidade: e.target.value})
                }}
            />

            <label>UF</label>  
            <input
                placeholder="UF"
                value={addressData.uf || ''}
                onChange={ e => {
                    setAddressData({...addressData, uf: e.target.value})
                }}
            />

            <label>Complemento</label>  
            <input
                placeholder="Complemento"
                value={addressData.complemento || ''}
                onChange={ e => {
                    setAddressData({...addressData, complemento: e.target.value})
                }}
            />  

            <button type='submit'>Enviar</button>            
        </Form>
    )
}
