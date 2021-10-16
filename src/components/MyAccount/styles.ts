import styled from "styled-components";

export const Container = styled.div`
    padding: 10px 5px;
    margin: 20px auto;

    width: 70%;
    
    border-radius: 10px;
`

export const Title = styled.h1`
    margin-bottom: 30px;
    font-size: 2rem; 
    text-align: center;
`

export const Subtitle = styled.h1`
    margin-bottom: 20px;
    font-size: 1.8rem; 
    text-align: center;
    
    &:last-of-type {
        margin-top: 30px;
    }
`

export const Content = styled.div`
    background: white;

    margin: 1rem 0;
    padding: 10px;

    border-radius: 10px;

    div {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: 80%;

        & + div {
            margin-top: 10px;
        }

    }

    label {
        font-size: 1.3rem;
        font-weight: bold;
        width: 30%;

        p {
            margin-top: 5px;
            margin-bottom: 10px;
            font-size: 1.2rem;
            font-weight: normal;
        }

        ul {
            padding-left: 2rem;

            &:first-of-type{
                margin-top: 5px;
            }
        }

        li {
            font-size: 1.2rem;
            font-weight: normal;
            list-style: initial;
        }
    }
    
    .last {
        width: 100%;
    }

    .sublist li:last-child {
        margin-bottom: 10px;
    }

    .sublist li {
        font-size: 1rem;
        margin: 5px 0;
        list-style: circle;
    }

    h2 {
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 20px;
    }
`