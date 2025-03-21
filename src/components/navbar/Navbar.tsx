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
import { Menu, Search, Globe, X } from "lucide-react";
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
            <Link href="/products/">{t("Mahsulotlar")}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/services">{t("Maxsus Takliflar")}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">{t("Bog'lanish")}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/catalog">{t("Katalog")}</Link>
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

          {/* ✅ Desktop uchun Search Input */}
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-2 text-gray-400" />
            <Input className="pl-8 w-[180px]" placeholder={t("Qidirish...")} />
          </div>

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

        {/* ✅ Mobil versiyada Search Input (Sidebar ichida) */}
        <div className="p-4">
          <div className="relative flex items-center">
            <Search className="absolute left-2 text-gray-400" />
            <Input className="pl-8 w-full" placeholder={t("Qidirish...")} />
          </div>
        </div>

        <nav className="flex flex-col p-4 space-y-4">
          <Link href="/detail-cars/" className="text-lg" onClick={() => setSidebarOpen(false)}>
            {t("Mahsulotlar")}
          </Link>
          <Link href="/services" className="text-lg" onClick={() => setSidebarOpen(false)}>
            {t("Maxsus Takliflar")}
          </Link>
          <Link href="/contact" className="text-lg" onClick={() => setSidebarOpen(false)}>
            {t("Bog'lanish")}
          </Link>
          <Link href="/catalog" className="text-lg" onClick={() => setSidebarOpen(false)}>
            {t("Katalog")}
          </Link>
        </nav>
      </div>
    </>
  );
}
