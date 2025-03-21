"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/components/ui/select";
import { Menu, Globe, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* ✅ Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
        {/* ✅ Logo */}
        <Link href="/" className="text-xl font-bold text-primary">
          <Image width={160} height={50} src="/images/logo.png" alt="logo" />
        </Link>

        {/* ✅ Menu (faqat desktop uchun) */}
        <div className="hidden md:flex space-x-6">
          <Button variant="outline" asChild>
            <Link href="/products/" prefetch={true}>{t("Mahsulotlar")}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/about-us" prefetch={true}>{t("Biz haqimizda")}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/service" prefetch={true}>{t("Service")}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link 
              href="https://test.cdn.samauto.uz/docs/8bd60987-cba1-4a32-bfb6-e1191099b09c_SamAuto%D0%9A%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B32024(UZB)_compressed.pdf" 
              download 
              prefetch={true}
            >
              {t("Katalog")}
            </Link>
          </Button>
        </div>

        {/* ✅ Language & Search */}
        <div className="flex items-center space-x-4">
          {/* Language Select */}
          <Select onValueChange={(value) => i18n.changeLanguage(value)}>
            <SelectTrigger>
              <SelectValue placeholder={<Globe />} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="uz">Uzbek</SelectItem>
              <SelectItem value="ru">Russian</SelectItem>
            </SelectContent>
          </Select>

          {/* ✅ Mobil versiya uchun Sidebar tugmasi */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-200"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* ✅ Sidebar (Mobil qurilmalar uchun) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar ichidagi menyular */}
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-xl font-bold">Menu</span>
          <button onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-4">
          <Link href="/detail-cars/" prefetch={true} className="text-lg" onClick={() => setSidebarOpen(false)}>
            {t("Mahsulotlar")}
          </Link>
          <Link href="/about-us" prefetch={true} className="text-lg" onClick={() => setSidebarOpen(false)}>
            {t("Biz haqimizda")}
          </Link>
          <Link href="/service" prefetch={true} className="text-lg" onClick={() => setSidebarOpen(false)}>
            {t("Service")}
          </Link>
          <Link 
            href="https://test.cdn.samauto.uz/docs/8bd60987-cba1-4a32-bfb6-e1191099b09c_SamAuto%D0%9A%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B32024(UZB)_compressed.pdf" 
            className="text-lg" 
            onClick={() => setSidebarOpen(false)} 
            download 
            prefetch={true}
          >
            {t("Katalog")}
          </Link>
        </nav>
      </div>
    </>
  );
}
