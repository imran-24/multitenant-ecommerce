import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";

interface Navbaritem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: Navbaritem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({ items, onOpenChange, open }: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side='left' className='p-0 transition-none'>
        <SheetHeader className='border-b p-4'>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ScrollArea className='flex flex-col overflow-y-auto h-full pb-2'>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => onOpenChange(false)}
              className='p-4 flex items-center bg-white text-left w-full hover:bg-black hover:text-white  text-base font-medium'
            >
              {item.children}
            </Link>
          ))}
          <div className='border-t'>
            <Link
              href={"/sign-in"}
              className='p-4 flex items-center bg-white text-left w-full hover:bg-black hover:text-white  text-base font-medium'
            >
              Log in
            </Link>
            <Link
              href={"/sign-up"}
              className='p-4 flex items-center bg-white text-left w-full hover:bg-black hover:text-white  text-base font-medium'
            >
              Start Selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
