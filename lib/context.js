import React, { createContext, useContext, useState } from "react";
import { Quantity } from "../styles/ProductDetails";

const Context = createContext();

export const StateContext = ({ children }) => {
  //Ourt application state
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);

  //Increase product countity
  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  //Decrease product quantity
  const decreaseQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  const onAdd = (product, Quantity) => {
    const exist = cartItems.find((item) => item.slug === product.slug);
    if(exist){
      setCartItems(
        cartItems.map((item) => 
        item.slug === product.slug 
        ? {...exist, Quantity: exist.Quantity + Quantity}
        : item
        )
      );
    } else {
      setCartItems([...cartItems, {...product, Quantity: Quantity}]);
    }
  };


  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        qty,
        increaseQty,
        decreaseQty,
        cartItems,
        onAdd
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
