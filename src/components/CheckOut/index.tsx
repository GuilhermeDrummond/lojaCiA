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

    const [payment, setPayment] = useState<IPagamento | undefined>()
    const [shipment, setShipment] = useState<IEntrega | undefined>()

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
                        <input type="radio" onClick={() => setShipment(new Transportadora())} value='Transportadora' name='envio'/>
                        <span className="checkmark"></span>
                        <p>Entrega em 5 dias</p>
                        <p>Frete de R$ 25,00</p>
                    </label>
                </div>

            </Content>

            <FinalValue>

                <p>
                    Valor total do carrinho: R$ {carrinho.totalCarrinho().toFixed(2)} <br/>
                    Método de pagamento: R$ {payment?.calcularValorPagamento(carrinho.totalCarrinho()).toFixed(2) || (0).toFixed(2)} <br/>
                    Custo da entrega: R$ {shipment?.calcularValorPedido().toFixed(2) || (0).toFixed(2)} <br/>
                    Valor final da compra: R$ { 
                    (carrinho.totalCarrinho() + (payment?.calcularValorPagamento(carrinho.totalCarrinho()) || 0) + (shipment?.calcularValorPedido() || 0)) .toFixed(2)
                    }
                </p>
                
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
