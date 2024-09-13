"use client";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  return (
    <header className="border-b fixed left-0 right-0 top-0 z-50 border-white/40 bg-[#221d1e] text-white">
      <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-5 py-3 sm:px-10">
        <Link href="/" className="text-2xl font-semibold tracking-tight">
        LOGO
        </Link>
     

        <div className="hidden items-center justify-center gap-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={""}
              className={cn(
                "text-center font-semibold text-black/70",
                index == 0 && "text-black underline underline-offset-4",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="overflow-hidden rounded-full border border-[#f6db4b]/80 bg-[#f6db4b]/90 p-0.5 shadow-lg shadow-[#f6db4b]/20">
        <button
              className={cn(
                "h-10 w-full flex items-center gap-1 rounded-full bg-[#f6db4b] px-8 font-semibold text-[#221d1e] backdrop-blur-xl",
              )}
            >
              <span>Schedule a call</span>
              <ChevronsRight className="text-[#221d1e] size-5"/>
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
