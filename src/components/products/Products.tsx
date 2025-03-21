"use client";

import { useContext } from "react";
import { Context } from "@/app/page";
import { useRouter } from "next/navigation";

function Products() {
    const { categories } = useContext(Context);
    const router = useRouter();

    const handleCategoryClick = (id: number) => {
        router.push(`/category/${id}`);
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-4xl text-center font-bold text-gray-800 mb-8">Mahsulotlar</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories?.map(item => (
                    <div 
                        key={item.id} 
                        className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
                        onClick={() => handleCategoryClick(item.id,item.name)}
                    >
                        <div className="relative w-full h-56 overflow-hidden">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                        </div>
                        <div className="p-5 text-center">
                            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                            <p className="text-gray-500 mt-2">Kategoriya bo‘yicha mahsulotlarni ko‘ring</p>
                            <button 
                                className="mt-4 w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2 rounded-lg shadow-md hover:from-indigo-600 hover:to-blue-500 transition-all"
                            >
                                Konfigurator
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
