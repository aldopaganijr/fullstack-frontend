import styled from "styled-components";

export const CartWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  color: #413f3d;
`;

export const CartStyle = styled.div`
  width: 40%;
  background: #413f3d;
  padding: 2rem 5rem;
  overflow-y: scroll;
  position: relative;
`;

export const CartItemsStyle = styled.div``;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  background: #f2f2f2 ;
  padding: 2rem;
  margin: 2rem 0rem;

  img {
    width: 8rem;
  }
`;

export const CardInfo = styled.div`
  width: 50%;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const EmptyStyle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  /*  */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: #ffffff;
  svg {
    font-size: 10rem;
    color: #ffffff;
  }
`;

// export const Checkout = styled.div`
//   button {
//     background: white;
//     padding: 1rem 2rem;
//     width: 100%;
//     color: white;
//     margin-top: 2rem;
//     cursor: pointer;
//   }
// `;

export const Checkout = styled.div`
  button {
    box-sizing: border-box; 
    text-decoration:none;
    width: 100%;
    height: 5vh;
    font-weight:300;
    background-color: #ffffff;
    color: #413f3d;
    padding:0.3em 1.2em;
    border-radius:1rem;
    border:0.1em solid white;
    text-align:center;
    transition: all 0.2s;
    cursor: pointer;
   

    :hover {
        color:#ffffff;
        background-color: transparent;
    }
    @media all and (max-width:30em){
    a.button1{  
        display:block;
        margin:0.4em auto;
    }
    }
  }
`

