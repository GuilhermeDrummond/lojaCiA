import styled from 'styled-components'

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

export const Content = styled.div`

    background: white;

    margin: 1rem 0;
    padding: 10px;

    border-radius: 10px;

    div:last-child {
        margin-top: 30px;
    }

    h2 {
        font-size: 1.4rem;
        margin-bottom: 10px;      
    }

    /* Customize the label (the container) */
    .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    line-height: 130%;
    cursor: pointer;
    font-size: 1.2rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    }

    /* Hide the browser's default radio button */
    .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    }

    /* Create a custom radio button */
    .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
    }

    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark {
    background-color: #ccc;
    }

    /* When the radio button is checked, add a blue background */
    .container input:checked ~ .checkmark {
    background-color: #2196F3;
    }

    /* Create the indicator (the dot/circle - hidden when not checked) */
    .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    }

    /* Show the indicator (dot/circle) when checked */
    .container input:checked ~ .checkmark:after {
    display: block;
    }

    /* Style the indicator (dot/circle) */
    .container .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
    }

    p {
        font-size: 0.95rem;
    }
`

export const FinalValue = styled.div`

    p {
        background: white;
        margin: 1rem 0;
        padding: 10px;

        font-weight: bold;
        font-size: 1.2rem;
        text-align: center;

        border-radius: 10px;
    }

    button {
        outline: 0;
        border: 0;
        border-radius: 10px;

        padding: 15px 10px;
        width: 100%;

        background: #2DFF46;
        color: white;

        font-size: 1.2rem;
        font-weight: bold;

        transition: transform 0.2s;

        &:hover {
            transform: translateY(-2px);
        }

        &:active {
            transform: translateY(4px);
        }
    }

`