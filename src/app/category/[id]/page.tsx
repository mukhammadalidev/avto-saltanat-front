"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";

function CategoryPage() {
    const { id } = useParams(); // ⬅️ Next.js'da paramsni olish
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const router = useRouter();

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch(`http://localhost:8000/pro/api/products/?category=${id}`);
                if (!res.ok) throw new Error("Serverdan noto‘g‘ri javob keldi");
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        if (id) fetchProducts();
    }, [id]);

    if (loading) return <p className="text-center text-gray-600 text-xl mt-10">⏳ Yuklanmoqda...</p>;
    if (error) return <p className="text-center text-red-500 text-xl mt-10">⚠️ Xatolik yuz berdi! Iltimos, qayta urinib ko‘ring.</p>;
    if (!products.length) return <p className="text-center text-gray-500 text-xl mt-10">🔍 Mahsulot topilmadi.</p>;

    return (
        <div>
            <Navbar />
            <h1 className="text-3xl font-bold text-center text-gray-800 mt-6">Kategoriya bo‘yicha mahsulotlar</h1>
            <div className="container mx-auto">
            <nav aria-label="breadcrumb" className="text-gray-600 text-sm">
      <ol className="flex space-x-2">
        <li>
          <Link href="/" className="hover:underline text-blue-500">
            Asosiy sahifa
          </Link>
        </li>
        <span>•</span>
        <li>
          <Link href="/products" className="hover:underline text-blue-500">
            Mahsulotlar
          </Link>
        </li>
        <span>•</span>
        <li className="text-gray-800 font-medium">{products[0].category.name}</li>
      </ol>
    </nav>
            </div>
            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map(item => (
                        <div 
                            key={item.id} 
                            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                        >
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                <button 
                                    onClick={() => router.push(`/products/${item.id}`)}
                                    className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                                >
                                    Batafsil
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategoryPage;
