"use client";

import { useState } from "react";
import { Button, Modal, Input, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

const ProductModal = ({ onProductAdded }: { onProductAdded: () => void }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "",
      image: null,
      file: "", // URL sifatida qabul qiladi
      technical_specification: {
        max_weight: "",
        cargo_capacity: "",
        dimensions: "",
        wheelbase: "",
        wheel_formula: "",
        engine_volume: "",
        max_power: "",
        fuel_type: "",
      },
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Majburiy"),
      description: Yup.string().required("Majburiy"),
      category: Yup.string().required("Majburiy"),
      image: Yup.mixed().required("Rasm tanlang"),
      file: Yup.string().url("To‘g‘ri URL kiriting").required("File URL majburiy"),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("category", values.category);
      formData.append("image", values.image);
      formData.append("file", values.file); // URL sifatida yuboriladi

      // Texnik xususiyatlarni FormData'ga qo'shish
      Object.entries(values.technical_specification).forEach(([key, value]) => {
        formData.append(`technical_specification.${key}`, value as string);
      });

      try {
        await axios.post("http://localhost:8000/pro/api/products/", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Mahsulot qo‘shildi");
        setIsModalOpen(false);
        onProductAdded();
      } catch (error) {
        toast.error("Xatolik yuz berdi");
      }
    },
  });

  return (
    <>
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        <PlusOutlined /> Mahsulot qo‘shish
      </Button>

      <Modal
        title="Yangi mahsulot qo‘shish"
        open={isModalOpen}
        onOk={formik.handleSubmit}
        onCancel={() => setIsModalOpen(false)}
      >
        <form>
          <Input
            name="title"
            placeholder="Nomi"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          <Input.TextArea
            name="description"
            placeholder="Tavsif"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          <Input
            name="category"
            placeholder="Kategoriya"
            value={formik.values.category}
            onChange={formik.handleChange}
          />
          
          {/* Rasm yuklash */}
          <Upload
            beforeUpload={(file) => {
              formik.setFieldValue("image", file);
              return false;
            }}
          >
            <Button>Rasm yuklash</Button>
          </Upload>

          {/* Fayl URL */}
          <Input
            name="file"
            placeholder="PDF yoki fayl URL kiriting"
            value={formik.values.file}
            onChange={formik.handleChange}
          />

          <h4>⚙️ Texnik xususiyatlar</h4>
          <Input
            name="technical_specification.max_weight"
            placeholder="Maksimal vazn"
            value={formik.values.technical_specification.max_weight}
            onChange={formik.handleChange}
          />
          <Input
            name="technical_specification.cargo_capacity"
            placeholder="Yuk hajmi"
            value={formik.values.technical_specification.cargo_capacity}
            onChange={formik.handleChange}
          />
          <Input
            name="technical_specification.dimensions"
            placeholder="O‘lchamlar"
            value={formik.values.technical_specification.dimensions}
            onChange={formik.handleChange}
          />
          <Input
            name="technical_specification.wheelbase"
            placeholder="G‘ildiraklar bazasi"
            value={formik.values.technical_specification.wheelbase}
            onChange={formik.handleChange}
          />
          <Input
            name="technical_specification.wheel_formula"
            placeholder="G‘ildirak formulasi"
            value={formik.values.technical_specification.wheel_formula}
            onChange={formik.handleChange}
          />
          <Input
            name="technical_specification.engine_volume"
            placeholder="Dvigatel hajmi"
            value={formik.values.technical_specification.engine_volume}
            onChange={formik.handleChange}
          />
          <Input
            name="technical_specification.max_power"
            placeholder="Maksimal quvvat"
            value={formik.values.technical_specification.max_power}
            onChange={formik.handleChange}
          />
          <Input
            name="technical_specification.fuel_type"
            placeholder="Yoqilg‘i turi"
            value={formik.values.technical_specification.fuel_type}
            onChange={formik.handleChange}
          />
        </form>
      </Modal>
    </>
  );
};

export default ProductModal;
