"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Card, Inset, Strong, Text } from "@radix-ui/themes";
import Navbar from "@/components/navbar/Navbar";

function CategoryPage({ params }: { params: { id: string } }) {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch(`http://localhost:8000/pro/api/products/?category=${params.id}`);
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, [params.id]);

    if (loading) return <p>Yuklanmoqda...</p>;
    if (!products.length) return <p>Mahsulot topilmadi.</p>;

    return (
        <div>
            <Navbar />
            <h1 className="text-3xl text-center">Kategoriya bo‘yicha mahsulotlar</h1>
            <div className="container mx-auto mt-5">
                <div className="row flex gap-5 justify-center flex-wrap">
                    {products.map(item => (
                        <div className="col" key={item.id}>
                            <Box maxWidth="300px">
                                <Card size="4">
                                    <Inset clip="padding-box" side="top" pb="current">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            style={{
                                                display: "block",
                                                objectFit: "cover",
                                                width: "100%",
                                                height: 200,
                                                backgroundColor: "var(--gray-5)",
                                            }}
                                        />
                                    </Inset>
                                    <Text as="p" size="3">
                                        <Strong>{item.title}</Strong>
                                        <br /><br />
                                        <Button color="blue" onClick={() => router.push(`/products/${item.id}`)}>
                                            Batafsil
                                        </Button>
                                    </Text>
                                </Card>
                            </Box>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategoryPage;
