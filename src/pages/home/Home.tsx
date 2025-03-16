import Footer from "@/components/footer/Footer"
import Map from "@/components/map/Map"
import Navbar from "@/components/navbar/Navbar"
import News from "@/components/news/News"
import Products from "@/components/products/Products"
import SimpleSlider from "@/components/slider/Slider"


function Home() {
  return (
    <div>
        <div className="container-fluid mx-auto">
        <SimpleSlider />
        <br />
        <Products />
        <br />
        <Map />
        <br />
        <News />
        <br />

        </div>
    </div>
  )
}

export default Home