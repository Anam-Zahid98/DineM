import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <header className="mx-auto max-w-[1440px] px-8 lg:px-20 py-10 flex items-center justify-between relative z-30 ">
      <Link href="/">
        <Image src="/logo.webp" alt="logo" width={140} height={30} />
      </Link>
      <ul className="h-full lg:flex hidden gap-12">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="flex text-[16px] font-[400] text-gray-900 items-center justify-start cursor-pointer transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flex hidden gap-1 relative sm:hidden ">
        <Search className="text-gray-600 h-[1em] w-[1em] absolute bottom-1 pl-[0.7]" />
        <Input
          className="h-[1.9em] w-[22em] pl-7"
          type="text"
          placeholder="What you looking for"
        />
      </div>

      <span className="hidden lg:flex items-center justify-between bg-[#f1f1f1] shadow rounded-full h-10 w-10 text-xl relative transition-all">
        <div className="text-center w-4 h-4 rounded-full bg-red-500 absolute right-3 top-0 ">
          <p className="text-white text-xs">0</p>
        </div>

        <ShoppingCart />
      </span>
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </header>
  );
};

export default Navbar;
