"use client";

import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface CardProductProps {
  id: string;
  title: string;
  imageUrl?: string;
  items:object;
}

export default function CarProductCard({items }: CardProductProps) {
  const validImageUrl = items.image && items.image.trim() !== "" ? items.image : "/placeholder.jpg";
  const router = useRouter();
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">
      {/* Rasmlar */}
      <div className="w-full h-48 relative">
        <Image
          src={items.image}
          alt={items.title || "Car image"}
          fill
          className="rounded-md object-cover"
          priority
        />
      </div>

      {/* Matn qismi */}
      <div className="py-4">
        <h2 className="text-lg font-semibold">{items.title}</h2>
      </div>

      {/* Tugma */}
      <Button
      onClick={()=>router.push(`/detail-cars/${items.id}`)
    }
        className="mt-4 w-full block text-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
      >
        Ko‘proq ma’lumot
      </Button>
    </div>
  );
}
