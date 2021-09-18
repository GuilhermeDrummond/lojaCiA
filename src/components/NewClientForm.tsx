import { useState } from 'react'
import Cliente from '../classes/Cliente'
import Endereco from '../classes/Endereco'

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
        <form onSubmit={createClient}>
            <input
                placeholder="Nome"
                value={clientData.nome || ''}
                onChange={e => {
                    setClientData({...clientData, nome: e.target.value})
                }}
            />
            <input
                placeholder="CPF"
                value={clientData.cpf || ''}
                onChange={e => {
                    setClientData({...clientData, cpf: e.target.value})
                }}
            />
            <input
                placeholder="Email"
                value={clientData.email || ''}
                onChange={e => {
                    setClientData({...clientData, email: e.target.value})
                }}
            />
            <input
                placeholder="Telefone"
                value={clientData.telefone || ''}
                onChange={e => {
                    setClientData({...clientData, telefone: e.target.value})
                }}
            />

            {/* ENDERECO */}

            <input
                placeholder="Rua"
                value={addressData.rua || ''}
                onChange={ e => {
                    setAddressData({...addressData, rua: e.target.value})
                }}
            />  
            <input
                placeholder="Bairro"
                value={addressData.bairro || ''}
                onChange={ e => {
                    setAddressData({...addressData, bairro: e.target.value})
                }}
            />  
            <input
                placeholder="Numero"
                value={addressData.numero || ''}
                onChange={ e => {
                    setAddressData({...addressData, numero: Number(e.target.value)})
                }}
            />  
            <input
                placeholder="CEP"
                value={addressData.cep || ''}
                onChange={ e => {
                    setAddressData({...addressData, cep: e.target.value})
                }}
            />  
            <input
                placeholder="Cidade"
                value={addressData.cidade || ''}
                onChange={ e => {
                    setAddressData({...addressData, cidade: e.target.value})
                }}
            />  
            <input
                placeholder="UF"
                value={addressData.uf || ''}
                onChange={ e => {
                    setAddressData({...addressData, uf: e.target.value})
                }}
            />  
            <input
                placeholder="Complemento"
                value={addressData.complemento || ''}
                onChange={ e => {
                    setAddressData({...addressData, complemento: e.target.value})
                }}
            />  

            <button type='submit'>Enviar</button>            
        </form>
    )
}
