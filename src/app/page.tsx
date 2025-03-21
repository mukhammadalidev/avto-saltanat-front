"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "@/components/navbar/Navbar";
import Home from "@/pages/home/Home";
import { Theme } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect } from "react";
import Footer from "@/components/footer/Footer";
import "aos/dist/aos.css";
export const Context = createContext('');

const fetchProducts = async () => {
  const res = await fetch('http://127.0.0.1:8000/pro/api/products/');
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

const fetchCategory = async () => {
  const res = await fetch('http://127.0.0.1:8000/pro/api/category/');
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export default function Page() {
  const { data: products, error: productsError, isLoading: productsLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts
  });

  const { data: categories, error: categoriesError, isLoading: categoriesLoading } = useQuery({
    queryKey: ["category"],
    queryFn: fetchCategory
  });

  if (productsLoading || categoriesLoading) return <p>Loading...</p>;
  if (productsError) return <p>Error: {productsError.message}</p>;
  if (categoriesError) return <p>Error: {categoriesError.message}</p>;



  return (
    <Context.Provider value={{categories}}>
      <Navbar />
        <Home/>

        <Footer />

        
    </Context.Provider>
  );
}
