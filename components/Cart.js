import {
  CartStyle,
  Card,
  EmptyStyle,
  CartWrapper,
  CardInfo,
  Checkout,
  Cards,
  CheckoutText,
} from "../styles/CartStyles";
import { Quantity } from "../styles/ProductDetails";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import getStripe from "../lib/getStripe";

const card = {
  hidden: {opacity: 0, scale: 0.8 },
  show: {opacity: 1, scale: 1 },
};

const cards = {
  hidden: {opacity: 1},
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

import { useStateContext } from "../lib/context";

export default function Cart() {
  const { cartItems, setShowCart, onAdd, onRemove, totalPrice } =
    useStateContext();

    const handleCheckout = async () => {
      const stripe = await getStripe();
      const response = await fetch('/api/stripe', {
        method: "POST",
        headers: {'Content-type' : "application/json"},
        body: JSON.stringify(cartItems)
      });
      const data = await response.json();
      await stripe.redirectToCheckout({sessionId: data.id})
    }

  return (
    <CartWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowCart(false)}
    >
      <CartStyle
        initial={{ x: "50%" }}
        animate={{ x: 0 }}
        exit={{ x: "50%" }}
        transition={{ type: "tween" }}
        onClick={(e) => e.stopPropagation()}
      >
        {cartItems.length < 1 && (
          <EmptyStyle
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <FaShoppingCart />
          </EmptyStyle>
        )}
        <Cards layout variants={cards} initial="hidden" animate="show">
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <Card layout variants={card} key={item.slug}>
                <img src={item.image.data.attributes.formats.small.url} />
                <CardInfo>
                  <h3>{item.title}</h3>
                  <h3>{item.price}$</h3>
                  <Quantity>
                    <span>Quantity</span>
                    <button onClick={() => onRemove(item)}>
                      <AiFillMinusCircle />
                    </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => onAdd(item, 1)}>
                      <AiFillPlusCircle />
                    </button>
                  </Quantity>
                </CardInfo>
              </Card>
            );
          })}
          </Cards>
        <Checkout
          layout
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {cartItems.length >= 1 && (
            <CheckoutText>
              <h3>Subtotal ${totalPrice}</h3>
              <button onClick={handleCheckout}>Purchase</button>
            </CheckoutText>
          )}
        </Checkout>
      </CartStyle>
    </CartWrapper>
  );
}
