import Image from "next/image"

const Banner = ({ image }: { image: string }) => {
  return (
    <div className="relative mt-6 h-[150px] mx-5">
      <Image
        src={image}
        alt="agende nos melhores com FSW Barber"
        fill
        className="rounded-xl object-cover "
      />
    </div>
  )
}

export default Banner
