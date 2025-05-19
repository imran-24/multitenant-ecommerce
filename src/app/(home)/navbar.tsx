"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarSidebar } from "./navbar-sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ children, href, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant={"outline"}
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className='bg-white h-20 border-b font-medium flex justify-between'>
      <Link href={"/"} className='pl-6 flex items-center'>
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          funroad
        </span>
      </Link>

      <div className='items-center gap-4 hidden lg:flex'>
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname == item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>

      <NavbarSidebar
        items={navbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />
      <div className='hidden lg:flex'>
        <Button
          variant={"secondary"}
          className='h-full bg-white px-12 hover:bg-pink-400 transition-colors  rounded-none text-lg border-l border-t-0 border-r-0 border-b-0 '
        >
          <Link href={"/sign-in"}>Log in</Link>
        </Button>
        <Button
          variant={"secondary"}
          className='h-full bg-black text-white px-12 hover:bg-pink-400 hover:text-black transition-colors rounded-none text-lg border-l border-t-0 border-r-0 border-b-0 '
        >
          <Link href={"/sign-up"}>Start selling</Link>
        </Button>
      </div>

      <div className='flex lg:hidden items-center justify-center'>
        <Button 
        onClick={() => setIsSidebarOpen(true)}
        variant={"ghost"}
        className="size-12 border-transparent bg-white">
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};
