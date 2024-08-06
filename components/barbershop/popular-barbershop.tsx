import { db } from "@/lib/prisma"
import BarbershopCard from "./barbershop-card"

const PopularBarbershops = async () => {
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: { name: "desc" },
  })
  return (
    <div className="mx-5">
      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
        populares
      </h2>
      <div className="flex gap-2 overflow-auto [&::-webkit-scrollbar]:hidden">
        {popularBarbershops.map((barbershop) => (
          <BarbershopCard key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </div>
  )
}

export default PopularBarbershops
