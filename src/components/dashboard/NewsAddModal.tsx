import { Plus } from "lucide-react";
import { useState } from "react";

export default function NewsAddModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Modalni ochish tugmasi */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        <Plus />
        Qo'shish
      </button>

      {/* Modal (agar ochiq bo‘lsa, ko‘rinadi) */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Modal Title</h2>
            <p className="text-gray-700 mb-4">This is a simple modal in Next.js.</p>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
