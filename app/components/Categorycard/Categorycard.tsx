import Image from "next/image";
import { Category } from "@/types/product";

interface Props {
  categories: Category[]; // Accept an array of categories
}

export default function CategoryCard({ categories }: Props) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-[90%] flex flex-col gap-5 md:flex-row">
        {categories.map((category) => (
          <div key={category._id} className="relative w-full"> {/* Ensure each category div has relative positioning */}
            <Image
              src={category.image_url}
              alt="unable to load"
              width={300}
              height={200}
              className="hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute bottom-0 left-0 bg-black p-2 w-full text-white bg-opacity-80">
              <h1 className="text-lg text-center">{category.title}</h1> {/* Center the title */}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
