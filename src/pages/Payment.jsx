import React from "react";
import { useSelector } from "react-redux";

const Payment = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Payment Summary</h1>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between py-2">
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>${item.price * item.quantity}</span>
          </div>
        ))}
        <div className="mt-6 text-xl font-semibold">Total: ${total}</div>
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
