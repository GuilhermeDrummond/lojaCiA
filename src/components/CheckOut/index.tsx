import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Boleto from "../../classes/Boleto";
import Carrinho from "../../classes/Carrinho";
import Cartao from "../../classes/Cartao";
import Correios from "../../classes/Correios";
import IEntrega from "../../classes/IEntrega";
import IPagamento from "../../classes/IPagamento";
import Pedido from "../../classes/Pedido";
import Transportadora from "../../classes/Transportadora";
import { Container, Content, FinalValue, Title } from "./styles";

type CheckoutProps = {
    carrinho : Carrinho
    onFinish : (pedido : Pedido) => void
    limparCarrinho : (carrinho : Carrinho) => void
}

export function CheckOut({ carrinho, onFinish, limparCarrinho } : CheckoutProps) {

    const history = useHistory()

    const [payment, setPayment] = useState<IPagamento>({} as IPagamento)
    const [shipment, setShipment] = useState<IEntrega>({} as IEntrega)

    const [total, setTotal] = useState<number>(carrinho.totalCarrinho())

    return (
        <Container>
            
            <Title>Últimos detalhes</Title>

            <Content>

                <div>
                    <h2>Método de pagamento</h2>

                    <label className="container" onClick={() => setPayment(new Cartao())}>Cartão de crédito
                        <input type="radio" value='Cartao' name='pagamento'/>
                        <span className="checkmark"></span>
                        <p>2% de juros</p>
                    </label>

                    <label className="container" onClick={() => setPayment(new Boleto())}>Boleto
                        <input type="radio" value='Boleto' name='pagamento'/>
                        <span className="checkmark"></span>
                        <p>A vista com 10% de desconto</p>
                    </label>
                </div>

                <div>
                    <h2>Método de envio</h2>

                    <label className="container" onClick={() => setShipment(new Correios())}>Correios
                        <input type="radio" value='Correios' name='envio'/>
                        <span className="checkmark"></span>
                        <p>Entrega de 7-14 dias</p>
                        <p>Frete de R$ 15,00</p>
                    </label>

                    <label className="container">Transportadora
                        <input type="radio" onClick={() => setShipment(new Correios())} value='Transportadora' name='envio'/>
                        <span className="checkmark"></span>
                        <p>Entrega em 5 dias</p>
                        <p>Frete de R$ 25,00</p>
                    </label>
                </div>

            </Content>

            <FinalValue>

                <p>Valor final da compra: R$ { total.toFixed(2) }</p>
                
                <button
                    onClick={() => {
                        const pedido = new Pedido(carrinho, payment, shipment)
                        onFinish(pedido)
                        limparCarrinho(carrinho.limparCarrinho())
                        history.push('/account')
                    }}
                >
                    Finalizar pedido
                </button>

            </FinalValue>
        </Container>
    )
}
