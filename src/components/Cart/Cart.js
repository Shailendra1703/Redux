import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.CartHandler.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              totalPrice={item.totalprice}
              quantity={item.quantity}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
