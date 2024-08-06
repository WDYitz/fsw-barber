import { servicesMock } from "@/mocks/services-mock"
import Image from "next/image"
import { Button } from "./ui/button"

const Services = () => {
  return (
    <div className="mx-5 my-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
      {servicesMock.map((service, index) => (
        <Button key={index} className="gap-2" variant="secondary">
          {typeof service.icon === "string" ? (
            <Image
              src={service.icon}
              alt={service.service}
              width={16}
              height={16}
            />
          ) : (
            service.icon
          )}
          {service.service}
        </Button>
      ))}
    </div>
  )
}

export default Services
