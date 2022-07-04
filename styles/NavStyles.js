import styled from "styled-components";

export const NavStyles = styled.nav`
    color: #413f3d;
    min-height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    padding-bottom: 3rem;
    

    a{
        font-size: 5rem;
        font-family: 'Cinzel', serif;
    }
`;

export const NavItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #413f3d;
    div {
        margin-left: 3rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h3 {
        font-size: 1rem;
        padding: 0.25;
    }
    svg{
        font-size: 1.5rem;
    }
    span {
        background: #413f3d;
        color: white;
        width: 1.3rem;
        height: 1.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: .75rem;
        position: absolute;
        right: -10%;
        top: -20%;
    }
`;
