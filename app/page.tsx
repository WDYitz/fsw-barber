import BarbershopItem from "@/components/barbershop-item"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { db } from "@/lib/prisma"
import MockAgendamento from "@/mocks/agendamento.mock"
import { SearchIcon } from "lucide-react"
import Image from "next/image"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="foont-bold text-xl">Olá, Yitzhak!</h2>
        <p>Terça-feira, 05 de agosto.</p>
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 w-full">
          <Image
            src="/banner-01.png"
            alt="agende nos melhores com FSW Barber"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <MockAgendamento />

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-2 overflow-auto [&::webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
