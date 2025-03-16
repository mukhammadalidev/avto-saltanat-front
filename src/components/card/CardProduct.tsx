"use client";

import Image from "next/image";
import Link from "next/link";

interface CardProductProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function CarProductCard({items}: CardProductProps) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">
      <div className="w-full h-48 relative">
        <img src={items.image} alt={items.title}  className="rounded-md" />
      </div>
      <div className="py-4">
        <h2 className="text-lg font-semibold">{items.title}</h2>
        {/* <p className="text-gray-600 text-sm">{items.description}</p> */}
      </div>
      <Link href={`detail-cars/${items.id}`} className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
        Ko‘proq ma’lumot
      </Link>
    </div>
  );
}
