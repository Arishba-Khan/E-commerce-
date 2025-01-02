"use client";
import { useState, useEffect } from "react";
import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/pages/types";
import Image from "next/image";

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/product");
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();

    // local storage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // cart visibillity
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  // checkout model
  const goToCheckout = () => {
    setIsCheckout(true);
  };

  // cart clear method

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <div className="relative min-h-screen py-6">
      <div className="absolute inset-0 bg-cover bg-center opacity-10 animate-background "></div>

      <div className="relative z-10 ">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-black mb-4">
            Best Beverages in our Menu
          </h1>
          <p className="text-xl font-bold text-black">
            Explore our section of Drinks{" "}
          </p>
        </div>

        {/* Product Section */}

        <div className="max-w-6xl mx-auto p-4 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-red-600">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {/* Cart Section */}
        <div className="max-w-6xl mx-auto mt-8 text-center">
          {" "}
          {/* Centered the button */}
          <button
            onClick={toggleCart}
            className="bg-black text-white py-3 px-6 rounded-full shadow-md hover:bg-gray-800 transition duration-300 ease-in-out"
          >
            {showCart ? "Hide cart" : "View Cart"} ({cart.length} items)
          </button>
          {showCart && (
            <div className="mt-6 bg-slate-200 p-6 rounded-lg shadow-lg text-black">
              {" "}
              {/* Changed background to slate 200 */}
              <h2 className="text-4xl font-bold mb-4 text-black">
                Your Cart Items Include:
              </h2>
              {cart.length > 0 ? (
                <div>
                  <ul>
                    {cart.map((product, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center mb-6 transform transition-all duration-300 ease-in-out"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          layout="fill"
                          objectFit="cover"
                          className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md"
                        />
                        <div className="ml-4 text-lg font-medium text-slate-600">
                          <p className="font-semibold">{product.name}</p>
                          <p className="text-sm text-gray-500">
                            ${product.price}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center mt-6 text-black">
                    <span className="font-semibold text-xl">
                      Total: $
                      {cart.reduce(
                        (total, product) => total + product.price,
                        0
                      )}
                    </span>

                    <div className="flex space-x-4">
                      {" "}
                      {/* Added space between buttons */}
                      <button
                        onClick={goToCheckout}
                        className="bg-orange-500 py-2 px-6 rounded-full text-lg font-bold shadow-md hover:bg-orange-700 transition duration-300 ease-in-out text-white transform hover:scale-110"
                      >
                        Proceed To Checkout
                      </button>
                      <button
                        onClick={clearCart}
                        className="bg-red-600 py-2 px-6 rounded-full text-lg font-bold shadow-md hover:bg-red-800 transition duration-300 ease-in-out text-white transform hover:scale-110"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg text-slate-600">Your cart is empty</p>
              )}
            </div>
          )}
        </div>

        {/* Checkout Section */}
        {isCheckout && (
          <div className="fixed inset-0 mt-10 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-80">
              <h2 className="text-2xl font-bold text-black mb-2">Checkout</h2>
              <p className="text-md text-red-600">
                Please confirm your order before proceeding
              </p>

              <div className="mt-4">
                <ul className="space-y-2">
                  {cart.map((product, index) => (
                    <li key={index} className="flex justify-between text-sm">
                      <span>{product.name}</span>
                      <span>{product.price}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between mt-4">
                  <span className="font-semibold">Total:</span>
                  <span className="font-semibold">
                    {cart.reduce((total, product) => total + product.price, 0)}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => setIsCheckout(false)}
                  className="bg-slate-600 text-white py-2 px-4 rounded-full text-sm shadow-md hover:bg-slate-700 transition duration-300"
                >
                  Close
                </button>

                <button
                  onClick={() =>
                    alert(
                      "Order Confirmed. Your order will be delivered to your doorstep in 30 minutes!"
                    )
                  }
                  className="bg-orange-600 text-white py-2 px-4 rounded-full text-sm shadow-md hover:bg-orange-700 transition duration-300"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}

        {/* end */}
      </div>
    </div>
  );
};

export default Menu;
