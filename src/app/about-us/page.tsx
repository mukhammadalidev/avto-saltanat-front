import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import { Locate, LocateIcon, Mail, Phone, Timer } from "lucide-react"


function Page() {
  return (
    <div>
        <Navbar />


        
          <div className="container mx-auto mt-5">
          <h1 className="text-3xl">Biz haqimizda</h1>
          <br />
          <img src="https://buxara-auto.uz/static/images/banner-5.webp" className="rounded" alt="" />

          <div className="card">
            <h1 className="text-2xl">Buxoradagi ofis</h1>
            <h3 className="flex gap-3 items-center"><LocateIcon /> Manzil</h3>
        
            <p>Qarshi, Qashqadaryo Region, Uzbekistan</p>
            <h1 className="text-2xl flex gap-3 items-center mt-3"><Phone /> Aloqalar</h1>
       
            <p>+998 97 488 06 05
            </p>

            <h1 className="text-2xl flex gap-3 items-center mt-3"><Mail /> Email</h1>
       
            <a href="info@avtosaltanat.uz" >info@avtosaltanat.uz</a>

            <h1 className="text-2xl mt-3 flex gap-3"><Timer /> Ishlar</h1>
        
            <p>Dushanba - Juma 09:00-18:00</p>
          </div>
          </div>

        <Footer />
    </div>
  )
}

export default Page