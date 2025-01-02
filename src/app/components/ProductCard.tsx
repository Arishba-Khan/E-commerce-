'use client';
import React from 'react';
import { Product } from "@/pages/types";
import Image from 'next/image';

interface ProductCardProps extends Product {
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  onAddToCart,
}) => {
  return (
    <div className="bg-slate-200 p-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center">
      <div className="relative w-full h-64 mb-6">
        <Image
          src={image}
          alt={name}
          layout="fill"  
          objectFit="cover"  
          className="rounded-md"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-black text-center">{name}</h3>
      <p className="text-lg text-slate-600 mb-4 text-center">{price}</p>

      {/* Add to Cart Button */}
      <button
        onClick={() => onAddToCart({ id, name, price, image })}
        className="bg-black text-white px-6 py-3 rounded-full text-sm shadow-md hover:bg-gray-800 transition duration-300 ease-in-out w-full max-w-xs" // Increased width of the button
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
