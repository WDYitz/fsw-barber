import { db } from "@/lib/prisma"
import BarbershopItem from "./barbershop-item"

const RecommendedBarbershops = async () => {
  const barbershops = await db.barbershop.findMany({})
  return (
    <div className="mx-5">
      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
        Recomendados
      </h2>
      <div className="flex gap-2 overflow-auto [&::-webkit-scrollbar]:hidden">
        {barbershops.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </div>
  )
}

export default RecommendedBarbershops
