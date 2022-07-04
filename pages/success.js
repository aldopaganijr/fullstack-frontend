import styled from "styled-components";
import { useRouter } from "next/router";
const { motion } = require("framer-motion");
// STRIPE_SECRET_KEY
const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  );

  return { props: { order } };
}

export default function Success({ order }) {
  const route = useRouter();
  return (
    <Wrapper>
      <Card
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.75 } }}
        initial={{ opacity: 0, scale: 0.75 }}
        transition={{duration: 0.75}}
      >
        <h1>Thank you for your order!</h1>
        <h2>A confirmation email has been sent to</h2>
        <h3>{order.customer_details.email}</h3>
        <div>
          <div>
            <h4>Address</h4>
            {Object.entries(order.customer_details.address).map(
              ([key, val]) => (
                <p key={key}>
                  {key} : {val}
                </p>
              )
            )}
          </div>
          <div>
            {order.line_items.data.map((item) => (
              <div key={item.id}>
                <p>{item.description}</p>
                <p>{item.quantity}</p>
                <p>$ {item.price.unit_amount}</p>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => route.push("/")}>Continue Shopping</button>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: rem 15rem;
`;

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 2rem;
  padding: 3rem 3rem;
  
  button{
    box-sizing: border-box; 
    width: 50%;
    height: 5vh;
    font-weight:300;
    background-color: #413f3d;
    color: white;
    border: 1px white solid;
    padding:0.3em 1.2em;
    border-radius:1rem;
    text-align:center;
    text-decoration: none;
    cursor: pointer;
    margin-top: 3rem;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  h3{
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }

  h4{
    text-decoration: underline;
    margin-bottom: .5rem;
  }

  p{
    font-size: 1rem;
  }
`;
