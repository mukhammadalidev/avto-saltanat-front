import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Edit, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import ProductModal from "./ProductModal";

export default function NewsTable({news}) {
  const queryClient = useQueryClient();
  function handlerDelete(id){
    axios.delete('http://localhost:8000/news/api/news/'+id+'/').then(res=>{
      toast.success("News o'chirildi")
      queryClient.setQueryData(["news"], (oldNews) =>
        oldNews ? oldNews.filter((item) => item.id !== id) : []
      );
    }).catch(()=>{
      toast.error("Xarolik")
    })
  }

  return (
    <div className="p-6 ">
      <table className="w-full shadow-md rounded-lg overflow-hidden">
        <div>
          <ProductModal />
        </div>
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-3 px-6 text-left">Title</th>
            <th className="py-3 px-6 text-left">Image</th>
            <th className="py-3 px-6 text-left">Description</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {news.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-300">
              <td className="py-3 px-6">{item.title}</td>
              <td className="py-3 px-6">
                <img src={item.image} alt={item.title} className="w-12 h-12 rounded-md  object-contain" />
              </td>
              <td className="py-3 px-6">{item.description.substring(0,10)}</td>
              <td className="py-3 px-6 text-center">
                <button className="text-blue-500 hover:text-blue-700 mr-3">
                  <Edit size={20} />
                </button>
                <button className="text-red-500 hover:text-red-700"
                onClick={()=>handlerDelete(item.id)}
                >
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
