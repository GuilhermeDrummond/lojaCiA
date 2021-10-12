import styled from 'styled-components'

export const Container = styled.div`
    padding: 10px 5px;
    margin: 20px auto;

    width: 70%;

    
    border-radius: 10px;
    `

export const Card = styled.div`
    background: white;
    margin: 1rem 0;
    padding: 10px;

    border-radius: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .products {
        display: flex;
    }

    .products-info {
        margin-left: 20px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .products-price {
        font-size: 1.1rem;
        margin-top: 10px;
    }

    .products-rest {
        opacity: 70%;
        font-size: 0.8rem;
        justify-content: flex-end;
        align-items: flex-end;
    }

    h1 {
        font-weight: bold;
        font-size: 1.5rem;
    }

    button {
        outline: 0;
        border: 0;
        border-radius: 10px;

        padding: 15px 10px;
        height: 100%;

        background: #FB2C26;
        color: white;

        font-size: 1.2rem;

        transition: transform 0.2s;

        &:disabled {
            opacity: 50%;
        }

        &:hover {
            transform: translateY(-2px);
        }

        &:active {
            transform: translateY(4px);
        }
    }
`