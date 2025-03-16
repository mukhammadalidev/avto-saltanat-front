"use client";

import { useContext } from "react";
import { Context } from "@/app/page";
import { useRouter } from "next/navigation";
import { Box, Button, Card, Inset, Strong, Text } from "@radix-ui/themes";

function Products() {
    const { categories } = useContext(Context);
    const router = useRouter();

    const handleCategoryClick = (id: number) => {
        router.push(`/category/${id}`);
    };

    return (
        <div>
            <h1 className="text-4xl text-center font-bold text-gray-800 mb-6">Mahsulotlar</h1>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {categories?.map(item => (
                        <div 
                            key={item.id} 
                            className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                        >
                            <div className="relative w-full h-56 overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                            </div>
                            <div className="p-5 text-center">
                                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                                <p className="text-gray-500 mt-2">Kategoriya bo‘yicha mahsulotlarni ko‘ring</p>
                                <Button 
                                    className="mt-4 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg shadow-md hover:from-indigo-600 hover:to-blue-500 transition-all"
                                    onClick={() => handleCategoryClick(item.id)}
                                >
                                    Konfigurator
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;
