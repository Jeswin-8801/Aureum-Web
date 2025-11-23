"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Our Clients", path: "/clients" },
    { label: "About Us", path: "/about" },
    { label: "Order from Us", path: "/order" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 items-center justify-center">
            <Image
              src="/aureum_icon.png"
              alt="logo"
              // These properties are required by the Next.js Image component
              width={48}
              height={48}
              // Ensures the image fills the container without distortion
              objectFit="cover"
            />
          </div>
          <span className="hidden sm:inline font-bold text-lg text-foreground">
            Aureum
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        >
          {isOpen ? (
            <X size={24} className="text-foreground" />
          ) : (
            <Menu size={24} className="text-foreground" />
          )}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
