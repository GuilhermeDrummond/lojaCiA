import styled from 'styled-components'

export const LoginForm = styled.div`
    background: white;

    border-radius: 10px;

    padding: 2rem;

    width: 20%;

    align-self: center;

    label {
        display: block;

        margin-bottom: 5px;

        font-size: 1.3rem;
    }

    input {
        height: 2rem;
        width: 100%;

        outline: 0;

        font-size: 1rem;

        background: #e5e5e5;

        border: 0;
        border-radius: 5px;

        margin-bottom: 15px;
        padding-left: 10px;

        ::placeholder {
            opacity: 40%;
        }

        & + input {
            margin-top: 5px;
        }

        &:focus {
            border-bottom: 2px solid var(--primaria);
            border-radius: 5px 5px 0 0;
        }
    }

    button {
        border: 0;
        border-radius: 10px;

        padding: 0.8rem;
        margin-bottom: 20px;

        font-size: 1.1rem;

        background: var(--primaria);
        color: white;

        width: 100%;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(80%);
        }

        &:active {
            transform: translateY(4px);
        }
    }

    p {
        font-size: 0.8rem;
        text-align: center;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    height: 90vh;
`