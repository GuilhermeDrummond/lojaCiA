import styled from 'styled-components'

export const Nav = styled.nav`
    height: 3rem;
    
    background: #418CFB;
    color: white;

    width: 100%;

    padding: 0 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
        font-size: 1.5rem;
        font-weight: 600;

        i {
            font-style: italic;
        }
    }

    button{
        border: 0;
        border-radius: 15px;
        outline: 0;
        
        padding: 5px 10px;

        color: white;
        background: transparent;

        font-size: 1rem;

        transition: filter 0.3s;


        &:last-child {
            margin-left: 10px;
        }

        &:hover {
            filter: brightness(80%);
        }

        &:active {
            transform: translateY(4px);
        }
    }

`
