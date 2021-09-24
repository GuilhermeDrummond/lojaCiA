import styled from 'styled-components'

export const Container = styled.div`
    background: white;

    border-radius: 10px;

    padding: 10px 5px;
    margin: 20px auto;

    width: 70%;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    margin: 0 auto;

    width: 80%;

    margin-top: 20px;

    input {
        height: 2rem;
        width: 100%;

        outline: 0;

        font-size: 1.1rem;

        background: #e5e5e5;

        border: 0;
        border-radius: 5px;

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

    label {
        font-size: 1.2rem;

        & + input {
            margin-bottom: 10px;
        }

        margin-bottom: 5px;
    }

    button {
        border: 0;
        border-radius: 10px;

        padding: 0.8rem;
        margin-top: 15px;

        font-size: 1.2rem;

        background: var(--primaria);
        color: white;

        &:hover {
            filter: brightness(80%);
        }

        &:active {
            transform: translateY(4px);
        }
    }

    .campos-juntos {
        display: flex;
        justify-content: space-between;

        input {
            margin-top: 5px;
        }
        
        div {
            width: 45%;
        }
    }
`

export const Title = styled.h1`
    text-align: center;

    font-size: 2rem;    

    input + & {
        margin-top: 20px;
        margin-bottom: 10px;
    }
`