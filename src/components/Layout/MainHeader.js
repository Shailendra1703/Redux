import { useSelector } from "react-redux";
import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import ItemsButton from "../Cart/ItemsButton";

const MainHeader = (props) => {
  const showCart = useSelector((state) => state.Cart.showCart);

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>{!showCart ? <CartButton /> : <ItemsButton />}</li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
