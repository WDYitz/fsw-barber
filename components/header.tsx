import Image from "next/image"
import Sidebar from "./sidebar"
import { Card, CardContent } from "./ui/card"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        {/* Logo */}
        <Image src="/logo.png" alt="logo" width={120} height={120} />
        {/* Menu lateral */}
        <Sidebar />
      </CardContent>
    </Card>
  )
}

export default Header
