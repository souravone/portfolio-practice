"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col ">
        <div className="mt-32 mb-20 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Sourav<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col gap-4 justify-center items-center">
          {links.map((nav, index) => {
            return (
              <Link
                href={nav.path}
                key={index}
                className={`${
                  nav.path === pathname &&
                  "text-accent border-b-2 border-accent"
                }  text-xl capitalize hover:text-accent transition-all`}
              >
                {nav.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
