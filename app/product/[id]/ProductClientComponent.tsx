

"use client";


import { Product } from "@/types/product";
import Image from "next/image";

export default function ProductClientComponent({ product }: { product: Product }) {
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
      <Image src={product.image_url} alt={product.title} width={300} height={200} className="w-full h-96 object-contain" />
      <div>
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-gray-700 mt-4">{product.description}</p>
        <div className="text-lg font-bold mt-4">Price: ${product.price}</div>
        {/* <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button> */}
      </div>
    </div>
  );
}
