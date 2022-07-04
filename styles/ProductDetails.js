import styled from "styled-components";

export const DetailsStyle = styled.div`
    color: white;
    display:flex;
    justify-content:space-between;
    margin-top: 5rem;
    
    img{
    width: 40%; 
    }
`

export const ProductInfo = styled.div`
    width: 40%;
    button{
        font-size: 1rem;
        font-weight: medium;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }
`

export const Quantity = styled.div`
    display:flex;
    align-items:center;
    margin: 1rem 0rem;

    button {
        background: transparent;
        color:white;
        border: none;
        display: flex;
        font-size: 1.5rem;
    }

    p{
        width: 1rem;
        text-align: center;
    }

    span{
        color:#ffffff;
    }
`;

export const Buy = styled.button`  
    box-sizing: border-box; 
    text-decoration:none;
    width: 100%;
    background-color: transparent;
    font-weight:300;
    color:#FFFFFF;
    padding:0.3em 1.2em;
    border-radius:0.12em;
    border:0.1em solid #FFFFFF;
    text-align:center;
    transition: all 0.2s;

    :hover {
        color:#000000;
        background-color:#FFFFFF;
    }
    @media all and (max-width:30em){
    a.button1{  
        display:block;
        margin:0.4em auto;
    }
    }
`;