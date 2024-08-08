import { quickSearchOptions } from "@/constants/quick-search-options"
import { cn } from "@/lib/utils"
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

interface SidebarProps {
  className?: string
}

const Sidebar = ({ className }: SidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className={cn("", className)}>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex items-center gap-3 border-b border-solid py-5">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>YR</AvatarFallback>
          </Avatar>

          <div className="ml-3 flex flex-col">
            <span className="font-bold">John Doe</span>
            <span className="text-xs text-gray-500">John_doe@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-b border-solid py-5">
          <SheetClose asChild>
            <Button className="justify-start gap-2" variant="ghost" asChild>
              <Link href="/">
                <HomeIcon size={18} />
                Início
              </Link>
            </Button>
          </SheetClose>

          <Button className="justify-start gap-2" variant="ghost">
            <CalendarIcon size={18} />
            Agendamentos
          </Button>
        </div>
        <div className="flex flex-col gap-4 border-b border-solid py-5">
          {quickSearchOptions.map((option, index) => (
            <Button className="justify-start gap-2" variant="ghost" key={index}>
              <Image
                src={option.image}
                alt={option.name}
                width={index >= 4 ? 12 : 18}
                height={18}
              />
              {option.name}
            </Button>
          ))}
        </div>
        <div className="flex flex-col py-5">
          <Button variant="ghost" className="justify-start gap-2">
            <LogOutIcon size={18} />
            Sair da conta
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Sidebar;
