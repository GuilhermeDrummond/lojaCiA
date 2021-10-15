import {useState } from "react";
import Carrinho from "../../classes/Carrinho";
import { Container, Content, FinalValue, Title } from "./styles";

type CheckoutProps = {
    carrinho : Carrinho
}

export function CheckOut({ carrinho } : CheckoutProps) {

    const [payment, setPayment] = useState(0)
    const [shipment, setShipment] = useState(0)

    function handlePayment(e : any) {
        setPayment(e.target.value)
    }

    function handleShipment(e : any) {
        setShipment(e.target.value)
    }

    return (
        <Container>
            
            <Title>Últimos detalhes</Title>

            <Content>

                <div onChange={handlePayment}>
                    <h2>Método de pagamento</h2>

                    <label className="container">Cartão de crédito
                        <input type="radio" value='Cartao' name='pagamento'/>
                        <span className="checkmark"></span>
                        <p>10x de R$ VALOR sem juros</p>
                    </label>

                    <label className="container">Boleto
                        <input type="radio" value='Boleto' name='pagamento'/>
                        <span className="checkmark"></span>
                        <p>A vista com 10% de desconto</p>
                    </label>
                </div>

                <div onChange={handleShipment}>
                    <h2>Método de envio</h2>

                    <label className="container">Correios
                        <input type="radio" value='Correios' name='envio'/>
                        <span className="checkmark"></span>
                        <p>Entrega de 7-14 dias</p>
                        <p>Frete de R$ 15,00</p>
                    </label>

                    <label className="container">Transportadora
                        <input type="radio" value='Transportadora' name='envio'/>
                        <span className="checkmark"></span>
                        <p>Entrega em 5 dias</p>
                        <p>Frete de R$ 25,00</p>
                    </label>
                </div>

            </Content>

            <FinalValue>

                <p>Valor final da compra: R$ {(carrinho.totalCarrinho() + shipment + payment).toFixed(2)}</p>
                <button>Finalizar pedido</button>

            </FinalValue>
        </Container>
    )
}
