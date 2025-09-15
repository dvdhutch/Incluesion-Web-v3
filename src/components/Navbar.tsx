"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-4 z-40 mt-4 mx-auto mb-12 max-w-5xl rounded-2xl glass-panel">
      <div className="h-14 flex items-center justify-between pl-4 pr-5">
        <Link href="/" className="flex items-center">
          <Image
            src="/incluesion_workdmark.png"
            alt="Incluesion wordmark"
            width={220}
            height={40}
            className="h-8 w-auto transition-transform duration-200 ease-out hover:scale-105"
            priority
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-200 ease-out hover:text-white ${
                pathname === item.href
                  ? "text-white"
                  : "text-white/70"
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button - could be expanded later */}
        <button className="md:hidden p-2 text-white/70 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}


