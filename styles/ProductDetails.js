import styled from "styled-components";

export const DetailsStyle = styled.div`
    color: #413f3d;
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
    color: #413f3d;

    button {
        background: transparent;
        color: #413f3d;
        border: none;
        display: flex;
        font-size: 1.5rem;
    }

    p{
        width: 1rem;
        text-align: center;
    }

    span{
        color:#413f3d;
    }
`;

export const Buy = styled.button`  
    box-sizing: border-box; 
    text-decoration:none;
    width: 100%;
    background-color: transparent;
    font-weight:300;
    color:#413f3d;
    padding:0.3em 1.2em;
    border-radius:0.12em;
    border:0.1em solid #413f3d;
    text-align:center;
    transition: all 0.2s;

    :hover {
        color:#ffffff;
        background-color:#413f3d;
    }
    @media all and (max-width:30em){
    a.button1{  
        display:block;
        margin:0.4em auto;
    }
    }
`;