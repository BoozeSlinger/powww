"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Menu", href: "#menu" },
    { name: "Our Story", href: "#story" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 mix-blend-difference text-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-kanit font-bold tracking-tighter uppercase relative group">
          GraPow
          <span className="text-primary text-4xl absolute -top-2 -right-3 rotate-12 group-hover:rotate-0 transition-transform">.</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
                <Link 
                    key={item.name} 
                    href={item.href}
                    className="font-outfit uppercase tracking-widest text-sm hover:text-primary transition-colors"
                >
                    {item.name}
                </Link>
            ))}
            <Button size="sm" className="bg-white text-black hover:bg-primary hover:text-white rounded-none uppercase font-bold tracking-wider text-xs px-6">
                Reserve
            </Button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-[#000] z-40 flex flex-col items-center justify-center gap-8 md:hidden"
        >
             {navItems.map((item) => (
                <Link 
                    key={item.name} 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-kanit text-4xl uppercase tracking-wider hover:text-primary transition-colors"
                >
                    {item.name}
                </Link>
            ))}
            <Button className="mt-8 bg-primary text-black w-48 py-6 text-lg">RESERVE A TABLE</Button>
        </motion.div>
      )}
    </header>
  );
}
