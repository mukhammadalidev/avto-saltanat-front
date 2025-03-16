import { Facebook, Instagram, Send, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 1 - Aloqa qismi */}
          <div>
            <Image src="/images/logo2.png" alt="SamAuto Logo" width={150} height={40} />
            <p className="mt-4 text-sm">+998 (97) 488 06 05</p>
            <p className="text-sm mt-2">Ijtimoiy tarmoqlar:</p>
            <div className="flex space-x-3 mt-2">
              <Link href="#" className="hover:text-gray-400"><Send /></Link>
              <Link href="#" className="hover:text-gray-400"><Facebook /></Link>
              <Link href="#" className="hover:text-gray-400"><Instagram /></Link>
              <Link href="#" className="hover:text-gray-400"><Youtube /></Link>
            </div>
          </div>

          {/* 2 - Modellar qatori */}
          <div>
            <h3 className="text-lg font-semibold">Modellar qatori</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link href="#" className="hover:text-gray-400">Avtobuslar</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Yuk avtomobillari</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Maxsus texnikalar</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Pikaplar</Link></li>
            </ul>
          </div>

          {/* 3 - Maxsus takliflar */}
          <div>
            <h3 className="text-lg font-semibold">Maxsus takliflar</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link href="#" className="hover:text-gray-400">Aksiyalar</Link></li>
              <li><Link href="#" className="hover:text-gray-400">SamAuto-Auktsion</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Tenderlar</Link></li>
            </ul>
          </div>

          {/* 4 - Xizmatlar */}
          <div>
            <h3 className="text-lg font-semibold">Xizmat</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link href="#" className="hover:text-gray-400">Mahalliylashtirish</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Kafolat</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Ehtiyot qismlar</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Diler topish</Link></li>
            </ul>
          </div>
        </div>

        {/* 5 - Mualliflik huquqi qismi */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          Avtosaltanat.uz - Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
}
