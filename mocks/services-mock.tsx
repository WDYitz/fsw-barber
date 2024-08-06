import { Eye, FootprintsIcon } from "lucide-react"

interface ServiceType {
  service: string
  icon: string | JSX.Element
}

export const servicesMock: ServiceType[] = [
  {
    service: "Cabelo",
    icon: "/scissor_icon.png",
  },
  {
    service: "Barba",
    icon: "/mustache_icon.png",
  },
  {
    service: "Acabamento",
    icon: "/razor.png",
  },
  {
    service: "Pézinho",
    icon: <FootprintsIcon width={16} height={16} />,
  },
  {
    service: "Sobrancelha",
    icon: <Eye width={16} height={16} />,
  },
]
