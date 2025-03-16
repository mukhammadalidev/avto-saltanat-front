"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

function ProductDetail({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`http://localhost:8000/pro/api/products/${params.id}/`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [params.id]);

  if (loading) return <p>Yuklanmoqda...</p>;
  if (!product) return <p>Mahsulot topilmadi.</p>;

  return (
    <div>
      <Navbar />
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Matn qismi */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">{product.description}</p>
            <div className="mt-6 flex space-x-4">
              <a
                href={product.file}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-800 text-gray-800 rounded-md flex items-center gap-2 hover:bg-gray-800 hover:text-white transition"
              >
                ⬇ Xususiyatlarni yuklab olish
              </a>
            </div>
          </div>

          {/* Rasm qismi */}
          <div className="relative w-full h-80 md:h-96 sm:order-2">
            <img src={product.image} alt={product.title} />
          </div>
        </div>
      </section>

      {/* Texnik Xususiyatlar */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Texnik tasnifi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {product.technical_specification && (
            Object.entries(product.technical_specification).map(([key, value], index) => (
              <div key={index} className="p-4 border rounded-lg border-gray-300">
                <p className="text-gray-900 text-lg">{value}</p>
                <p className="text-gray-500 text-sm">{key.replace(/_/g, " ")}</p>
              </div>
            ))
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProductDetail;
