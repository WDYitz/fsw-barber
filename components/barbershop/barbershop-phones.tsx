"use client"
import { PhoneIcon } from "lucide-react"
import { toast } from "sonner"
import { Button } from "../ui/button"

interface BarbershopPhonesProps {
  phone: string
}

const BarbershopPhones = ({ phone }: BarbershopPhonesProps) => {
  const handleCopyPhone = (phone: string) => {
    navigator.clipboard.writeText(phone)
    toast.success("Telefone copiado com sucesso!")
  }

  return (
    <div key={phone} className="relative flex items-center justify-between">
      <div className="flex gap-2">
        <PhoneIcon className="text-primary" size={18} />
        <p className="text-sm">{phone}</p>
      </div>
      <Button variant="outline" onClick={() => handleCopyPhone(phone)}>
        Copiar
      </Button>
    </div>
  )
}

export default BarbershopPhones
