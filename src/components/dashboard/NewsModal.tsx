"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Plus } from "lucide-react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const NewsModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient(); // 🔄 React Query bilan cache-ni boshqarish

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async (data: any) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    if (data.image[0]) {
      formData.append("image", data.image[0]);
    }

    try {
      await axios.post("http://localhost:8000/news/api/news/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // ✅ Yangilangan yangiliklarni olish
      queryClient.invalidateQueries(["news"]);

      toast.success("Yangilik qo‘shildi!"); // ✅ Muvaffaqiyatli qo‘shilganini bildirish
      reset();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      toast.error("Xatolik yuz berdi!");
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        <Plus /> Qo'shish
      </Button>
      <Modal
        title="Yangilik Qo'shish"
        open={isModalOpen}
        onOk={handleSubmit(handleOk)}
        onCancel={handleCancel}
      >
        <form>
          <input
            {...register("title")}
            type="text"
            className="form-controls border-1 w-full p-3 rounded"
            placeholder="Title"
          />
          <br />
          <br />
          <input
            {...register("image")}
            type="file"
            className="form-controls border-1 w-full p-3 rounded"
          />
          <br />
          <br />
          <textarea
            {...register("description")}
            placeholder="Description"
            className="w-full p-5 border rounded"
          ></textarea>
        </form>
      </Modal>
    </>
  );
};

export default NewsModal;
