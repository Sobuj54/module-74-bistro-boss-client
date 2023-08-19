import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();

  //   js reduce function is used to get sum of all the values
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div>
        <h3 className="text-3xl">Total Items : {cart.length}</h3>
        <h3 className="text-3xl">Total Price : $ {total}</h3>
      </div>
    </>
  );
};

export default MyCart;
