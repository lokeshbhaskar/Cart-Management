import React from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

const products = [
    {
      id: 1,
      name: 'School Kit (Bag, Books, Stationery)',
      price: 499,
      image: 'https://image.made-in-china.com/2f0j00LYyfUYcGjiuE/High-Quality-Backpack-Back-to-School-Essentials-Supplies-Kit-Cheap-School-Stationery-Kit-Customized-School-Supplies-Set.jpg',  
    },
    {
      id: 2,
      name: 'Monthly Food Pack for Family',
      price: 1299,
      image: 'https://www.orphans-of-uganda.org/wp-content/uploads/2022/12/1000008687.jpg', 
    },
    {
      id: 3,
      name: 'Winter Kit (Blanket, Sweater, Socks)',
      price: 799,
      image: 'https://img.freepik.com/premium-photo/stack-knitted-blankets-sweaters-cozy-winter-bedroom_121837-12016.jpg',  
    },
    {
      id: 4,
      name: 'Hygiene Kit (Sanitizer, Soap, Masks)',
      price: 299,
      image: 'https://lzd-img-global.slatic.net/g/p/00b0e099bbfd6344b44e81a725d8eec8.jpg_720x720q80.jpg',  
    },
    {
      id: 5,
      name: 'Girl Child Education Support',
      price: 1500,
      image: 'https://media.gettyimages.com/id/535555349/photo/group-of-happy-indian-children.jpg?s=612x612&w=gi&k=20&c=FP47bjJmPUl-PGnc7Alf3fdUEO2VWRz46w_V5YLW27s=',
    },
  ];
  
  

const Home = () => {
    // const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div>
      <div className="p-6">
        <div className='flex justify-between px-auto '>
        <h1 className="text-3xl font-bold mb-4">Products</h1>
        <Link to='/cart' >
        <FaShoppingCart size={30} className='text-green-400' />
        </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {/* <h2 className="text-2xl font-semibold mt-10">Cart</h2>
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
        )} */}
      </div>
    </div>
  );
};

export default Home;
