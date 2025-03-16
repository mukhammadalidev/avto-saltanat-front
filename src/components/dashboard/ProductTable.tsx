import axios from "axios";
import { Edit, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
// import ProductModal from "./ProductModal";

export default function ProductsTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/pro/api/products/");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/pro/api/products/${id}/`);
      toast.success("Mahsulot o'chirildi");
      fetchProducts();
    } catch (error) {
      toast.error("Xatolik yuz berdi");
    }
  };

  return (
    <div className="p-6">
        
      <table className="w-full shadow-md rounded-lg overflow-hidden border">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-3 px-6">Kategoriya</th>
            <th className="py-3 px-6">Mahsulot</th>
            <th className="py-3 px-6">Tavsif</th>
            <th className="py-3 px-6">Texnik Xususiyatlar</th>
            <th className="py-3 px-6">Fayl</th>
            <th className="py-3 px-6 text-center">Amallar</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-300">
              <td className="py-3 px-6 flex items-center">
                <img src={item.category.img} alt={item.category.title} className="w-12 h-12 rounded-md object-contain mr-3" />
                {item.category.title}
              </td>
              <td className="py-3 px-6">
                <img src={item.image} alt={item.title} className="w-12 h-12 rounded-md object-contain" />
                <p>{item.title}</p>
              </td>
              <td className="py-3 px-6">{item.description}</td>
              <td className="py-3 px-6">
                <p>Og'irlik: {item.technical_specification.max_weight}</p>
                <p>Sig'im: {item.technical_specification.cargo_capacity}</p>
                <p>Dvigatel: {item.technical_specification.engine_volume}</p>
              </td>
              <td className="py-3 px-6">
                <a href={item.file} target="_blank" className="text-blue-500 underline">Yuklash</a>
              </td>
              <td className="py-3 px-6 text-center">
                <button className="text-blue-500 hover:text-blue-700 mr-3">
                  <Edit size={20} />
                </button>
                <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(item.id)}>
                  <Trash2 size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
