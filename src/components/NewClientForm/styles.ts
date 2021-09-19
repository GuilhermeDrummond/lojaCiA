import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    margin: 0 auto;

    width: 50%;

    margin-top: 20px;

    input {
        height: 2rem;
        width: 100%;

        font-size: 1.1rem;

        background: #e5e5e5;

        border: 0;
        border-radius: 5px;

        padding-left: 10px;

        & + input {
            margin-top: 5px;
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
        margin-bottom: 50px;

        font-size: 1.2rem;

        background: #418CFB;
        color: white;

        &:hover {
            filter: brightness(80%);
        }

        &:active {
            transform: translateY(4px);
        }
    }
`