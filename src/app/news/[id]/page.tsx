"use client";

import { use } from "react";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

function fetchNews(id: string) {
  return fetch(`http://localhost:8000/news/api/news/${id}/`).then((res) => res.json());
}

function NewsDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // ✅ params unwrap qilindi

  const { data: news, isLoading, error } = useQuery({
    queryKey: ["news", id],
    queryFn: () => fetchNews(id),
    enabled: !!id, // id mavjud bo'lsa so'rov jo‘natiladi
  });

  if (isLoading) return <p className="text-center text-gray-600">Yuklanmoqda...</p>;
  if (error) return <p className="text-center text-red-500">Xatolik yuz berdi!</p>;
  if (!news) return <p className="text-center text-red-500">Yangilik topilmadi.</p>;

  return (
    <div>
      <Navbar />
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Rasm */}
          <div className="relative w-full h-80 md:h-96 sm:order-2">
            <img src={news.image} alt={news.title} className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>

          {/* Matn qismi */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{news.title}</h1>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">{news.description}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default NewsDetail;
