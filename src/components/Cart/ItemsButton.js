import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { CartActions } from "../../store/carttoggle";

const ItemsButton = (props) => {
  const dispatch = useDispatch();
  const showItems = () => {
    dispatch(CartActions.toggleItems());
  };
  return (
    <button onClick={showItems} className={classes.button}>
      <span>Items</span>
    </button>
  );
};

export default ItemsButton;
