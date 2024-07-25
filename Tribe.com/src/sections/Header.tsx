import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png"
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg"
import Link from "next/link";
export const Header = () => {
  return <header className="sticky top-0 backdrop-blur-sm z-20">  <div className="flex justify-center items-center bg-black text-white text-sm py-3 gap-3">
    <p className="text-white/60 hidden md:flex"> Streamline your process and boost your productivity </p>
    <div className="gap-1 inline-flex justify-center items-center"><p>Get started for free</p>
    <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"/></div>
  </div>
  <div className="py-5">
    <div className="container">
      <div className="flex justify-between items-center">
      <Image src={Logo} alt="Saas" height={40} width={40} />
      <MenuIcon className="h-4 w-5 md:hidden" />
      <nav className="hidden md:flex gap-6 text-black/60 items-center">
        <Link href="#about">About</Link>
        <Link href="#features">Features</Link>
        <Link href="#customers">Customers</Link>
        <Link href="#updates">Updates</Link>
        <Link href="#help">Help</Link>
        <button className="bg-black font-medium px-6 py-2 text-white rounded-lg inline-flex justify-center items-center tracking-tight">Get for free</button>
      </nav>
      </div>
    </div>
    
  </div>
  </header>;
};
