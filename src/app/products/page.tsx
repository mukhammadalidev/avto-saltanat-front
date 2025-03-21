import Navbar from "@/components/navbar/Navbar";
import ProductsList from "@/components/ProductList/ProductList";


export default function ProductsPage() {
  return (
    <main>
        <Navbar />
     <div className="p-3">
     <h1 className="text-3xl">Mahsulotlar</h1>
     <ProductsList />
     </div>
    </main>
  );
}
