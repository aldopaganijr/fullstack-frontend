import styled from "styled-components";

export const ProductStyle = styled.div`
    background-color: #ded1bd;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    img{
        width: 100%;
        cursor: pointer;
    }
    h2{
        padding: 0.5rem 0rem;
    }

    @media all and (max-width:480px){
        display: flex;
        justify-content:center;
        align-items: center;
    }
`;