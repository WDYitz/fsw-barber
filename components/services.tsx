import { quickSearchOptions } from "@/constants/quick-search-options"
import Image from "next/image"
import { Button } from "./ui/button"

const Services = () => {
  return (
    <div className="mx-5 my-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
      {quickSearchOptions.map((service, index) => (
        <Button key={index} className="gap-2" variant="secondary">
          <Image
            src={service.image}
            alt={service.name}
            width={16}
            height={16}
          />
          {service.name}
        </Button>
      ))}
    </div>
  )
}

export default Services
