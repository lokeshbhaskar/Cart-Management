import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from 'react-toastify'

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();

  const handleToCart = () => {
    dispatch(addToCart(product))
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="p-4 border rounded-xl shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain mb-2"
      />
      <h3 className="text-xl font-medium">{product.name}</h3>
      <div className="flex justify-between mt-4 ">
        <p className="text-gray-700 mb-2">${product.price}</p>
        <div
          className="relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <button
            onClick={handleToCart}
            className=" text-white px-3 py-1 rounded cursor-pointer  "
          >
            <FaShoppingCart size={30} className="text-green-400" />
          </button>
          {hovered && (
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-3 rounded-md shadow-md z-10 whitespace-nowrap transition-all duration-300 font-medium ">
              Add to Cart
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
