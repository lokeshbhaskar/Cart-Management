import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="px-4 py-4 md:px-30 md:py-10" >
      <h2 className="text-2xl font-semibold mt-10">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="mt-4">Your cart is empty</p>
      ) : (
        <div className="space-y-4 mt-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <Link
            to="/payment"
            className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Go to Payment
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
