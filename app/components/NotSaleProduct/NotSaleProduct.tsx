import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product; // Product object as prop
  customWidth?: number; // Optional custom width
  customHeight?: number; // Optional custom height
}

export default function NotSaleProduct({ product, customWidth = 250, customHeight = 100 }: Props) {
  

  return (
    <div className="flex flex-col w-full">
      <div className="relative">
        {/* Badge */}
        {product.badge && (
          <span className="absolute bg-[#01AD5A] p-1 text-white ml-2 mt-4 text-sm rounded-lg">
            {product.badge}
          </span>
        )}
       <Link href={`/product/${product._id}`}>
        <Image
          src={product.image_url}
          alt={product.title || "Product Image"}
          width={customWidth}
          height={customHeight}
          className="hover:scale-105 transition-transform duration-500"
        />
        </Link>
      </div>

      <div className="flex flex-col mt-2">
        {/* Product Title */}
        <h1 className="font-bold">{product.title}</h1>
        {/* Price and Cart */}
        <span className="flex justify-between p-2 items-center">
          <span className="text-lg font-semibold">${product.price}</span>
          
        </span>
      </div>
    </div>
  );
}
