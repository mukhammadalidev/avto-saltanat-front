"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, Search,Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* ✅ Logo */}
     
      <Link href="/" className="text-xl font-bold text-primary hidden" >
        <Image
        width={140}
        height={140}
        src='/images/logo.png' alt="logo" />
      </Link>

      {/* ✅ Menu (Dropdown for mobile) */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <Menu className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href="/products">Mahsulotlar</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/services">Maxsus Takliflar</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/contact">Bog'lanish</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/contact">Katalog</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Link href="/" className="text-xl font-bold text-primary ">
      <Image
        width={140}
        height={140}
        src='/images/logo.png' alt="logo" />
      </Link>

      {/* ✅ 3 ta Box (Desktop uchun) */}
      <div className="hidden md:flex space-x-6">
        <Button variant="outline" asChild>
          <Link href="/about">Mahsulotlar</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/services">Maxsus Takliflar</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">Bog'lanish</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">Katalog</Link>
        </Button>
      </div>

      {/* ✅ Language & Search */}
      <div className="flex items-center space-x-4">
        {/* Language Select */}
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder={<Globe />} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="uz">Uzbek</SelectItem>
            <SelectItem value="ru">Russian</SelectItem>
          </SelectContent>
        </Select>

        {/* Search Input */}
        <div className="relative">
          <Search />
          {/* <Input className="pl-10 w-[180px]" placeholder="Search..." /> */}
        </div>
      </div>
    </nav>
  );
}
