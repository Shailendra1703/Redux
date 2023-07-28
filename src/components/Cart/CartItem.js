import { useDispatch, useSelector } from "react-redux";
import classes from "./CartItem.module.css";
import { useEffect } from "react";
import { CartActions } from "../../store/create-cart";
const CartItem = (props) => {
  const { title, quantity, totalPrice, price, id } = props;
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(CartActions.addItemToCart({ id, price, quantity, totalPrice }));
  };

  const handleDecrement = () => {
    dispatch(CartActions.removeItemCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          {totalPrice}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
