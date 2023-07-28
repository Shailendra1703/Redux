import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { CartActions } from "./store/carttoggle";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.Cart.showCart);
  const cart = useSelector((state) => state.CartHandler);
  const notification = useSelector((state) => state.Cart.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendData = async () => {
      dispatch(
        CartActions.showNotifications({
          status: "sending",
          title: "sending...",
          message: "sending data to backend",
        })
      );
      const response = await fetch(
        "https://contact-form-92728-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("failed to send data");
      }

      dispatch(
        CartActions.showNotifications({
          status: "sucess",
          title: "sucessfully",
          message: "Data sended sucessfully",
        })
      );
      const responseData = await response.json();
    };

    if (isInitial) {
      isInitial = false;
      return;
    }
    sendData().catch((e) => {
      dispatch(
        CartActions.showNotifications({
          status: "error",
          title: "Error!",
          message: "Data failed sucessfully",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
