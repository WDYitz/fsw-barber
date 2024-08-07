import type { BarbershopService as PrismaBarbershopService } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"

interface BarbershopServiceProps {
  service: PrismaBarbershopService
}

const BarbershopService = async ({ service }: BarbershopServiceProps) => {
  return (
    <Card className="min-w-full rounded-2xl">
      <CardContent className="flex gap-3 p-2">
        <div className="relative max-h-[110px] min-h-[110px] min-w-[110px] max-w-[110px]">
          <Image
            src={service?.imageUrl}
            fill
            alt={service?.name}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex w-full flex-col justify-between">
          <div className="flex flex-col space-y-2">
            <h2 className="text-sm font-bold text-white">{service.name}</h2>
            <p className="text-sm text-gray-400">{service.description}</p>
          </div>

          <div className="flex items-center justify-between">
            <h3 className="text-primary terxt-sm">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(service?.price))}
            </h3>
            <Button
              variant="secondary"
              size="sm"
              className="mt-3 rounded-lg border-none text-center"
              asChild
            >
              <Link href="">Reservar</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarbershopService
