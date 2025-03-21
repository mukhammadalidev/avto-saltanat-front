"use client";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

function page() {
  return (
    <div>
        <Navbar />


     <div className="container mx-auto my-6">
        <div className="row flex gap-8 sm:flex-wrap">
            <div className="col">
            <Image
        src={'/images/photo_2025-03-16 22.42.04.jpeg'}
        alt={'data'}
        width={400}
        height={400}
        layout="responsive"
        objectFit="cover"
        className="rounded-xl"
      />


            </div>
            <div className="col">
            <Image
        src={'/images/photo_2025-03-16 22.42.11.jpeg'}
        alt={'data'}
        width={400}
        height={400}
        layout="responsive"
        objectFit="cover"
        className="rounded-xl"
      />




            </div>
            <div className="col">
            <Image
        src={'/images/photo_2025-03-16 22.42.19.jpeg'}
        alt={'data'}
        width={400}
        height={400}
        layout="responsive"
        // objectFit="cover"
        className="rounded-xl"
      />
            </div>
            <div className="col">
            <Image
        src={'/images/photo_2025-03-16 22.42.23.jpeg'}
        alt={'data'}
        width={400}
        height={400}
        layout="responsive"
        // objectFit="cover"
        className="rounded-xl"
      />
            </div>
            <div className="col">
            <Image
        src={'/images/photo_2025-03-22 00.58.37.jpeg'}
        alt={'data'}
        width={400}
        height={400}
        layout="responsive"
        // objectFit="cover"
        className="rounded-xl"
      />
            </div>
        </div>
     </div>

     {/* photo_2025-03-22 00.58.37.jpeg */}
        <Footer />
    </div>
  )
}

export default page