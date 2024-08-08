import BarbershopPhones from "@/components/barbershop/barbershop-phones"
import BarbershopService from "@/components/barbershop/barbershop-service"
import { Button } from "@/components/ui/button"
import { db } from "@/lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export interface BarbershopPageProps {
  params: {
    id: string
  }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })

  if (!barbershop) {
    return notFound()
  }

  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop?.imageUrl || ""}
          alt={barbershop?.name || ""}
          fill
          className="object-cover"
        />

        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4"
        >
          <MenuIcon />
        </Button>
      </div>

      {/* Informações Barbearia */}
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop?.name}</h1>
        <div className="mb-2 flex items-center gap-1">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>
        <div className="flex items-center gap-2">
          <StarIcon className="fill-primary text-primary" size={18} />
          <p className="text-sm">5,0 (499 avaliações)</p>
        </div>
      </div>

      {/* Sobre Barbearia */}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">Sobre nós</h2>
        <p className="text-sm">{barbershop?.description}</p>
      </div>

      {/* Serviços Barbearia */}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="pb-2 text-sm uppercase text-gray-500">Serviços</h2>
        {barbershop.services.map((service) => (
          <BarbershopService service={service} key={service.id} />
        ))}
      </div>

      {/* Contatos Barbearia */}
      <div className="p-5">
        <h2 className="pb-2 text-sm uppercase text-gray-500">contato</h2>
        <div className="flex flex-col gap-4">
          {barbershop?.phones.map((phone) => (
            <BarbershopPhones phone={phone} key={phone} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BarbershopPage
