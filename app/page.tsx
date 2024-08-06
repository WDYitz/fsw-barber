import Banner from "@/components/banner"
import PopularBarbershops from "@/components/barbershop/popular-barbershop"
import RecommendedBarbershops from "@/components/barbershop/recommended-barbershop"
import BookingItem from "@/components/booking-item"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Services from "@/components/services"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="pt-5">
        <div className="px-5">
          <h2 className="foont-bold text-xl">Olá, Yitzhak!</h2>
          <p>Terça-feira, 05 de agosto.</p>
        </div>

        <div className="mt-6 flex items-center gap-2 px-5">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <Services />

        <Banner image="/banner-01.png" />

        <BookingItem />

        <RecommendedBarbershops />

        <PopularBarbershops />

        <Footer />
      </div>
    </div>
  )
}

export default Home
