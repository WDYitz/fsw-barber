import Agendamentos from "@/components/agendamentos"
import Banner from "@/components/banner"
import Footer from "@/components/footer"
import Header from "@/components/header"
import PopularBarbershops from "@/components/popular-barbershops"
import RecommendedBarbershops from "@/components/recommended-barbershops"
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

        <Agendamentos />

        <RecommendedBarbershops />

        <PopularBarbershops />

        <Footer />
      </div>
    </div>
  )
}

export default Home
