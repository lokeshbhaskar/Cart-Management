import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement, removeFromCart } from '../redux/cartSlice';

const CartItem = ({item}) => {
    const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-between items-center border p-4 rounded">
        <div>
          <h4 className="font-semibold">{item.name}</h4>
          <p>${item.price}</p>
          <div className="flex gap-2 items-center mt-2">
            <button
              onClick={() => dispatch(decrement(item.id))}
              className="bg-gray-300 px-2 rounded"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => dispatch(increment(item.id))}
              className="bg-gray-300 px-2 rounded"
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
