import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { CartActions } from "../../store/carttoggle";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalItems = useSelector((state) => state.CartHandler.totalQuantity);
  const showCart = () => {
    dispatch(CartActions.toggleCart());
  };
  return (
    <button onClick={showCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
