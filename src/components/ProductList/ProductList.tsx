"use client";

import { useQuery } from "@tanstack/react-query";
import ProductCard from "../products/ProductCard";


const fetchProducts = async () => {
  const res = await fetch("http://localhost:8000/pro/api/products/");
  if (!res.ok) throw new Error("Ma'lumotlarni yuklashda xatolik!");
  return res.json();
};

const ProductsList = () => {
  const { data: products, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Yuklanmoqda...</p>;
  if (error) return <p>Xatolik yuz berdi!</p>;

  return (
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "20px",
      padding: "20px"
    }}>
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
