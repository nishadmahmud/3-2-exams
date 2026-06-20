"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/study-materials", label: "Materials" },
    { href: "/questions", label: "Q&A" },
    { href: "/extra-questions", label: "Extra" },
  ];

  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 text-sm font-medium">
          {links.map((link) => {
            const isActive = pathname.startsWith(link.href) || (pathname === "/" && link.href === "/study-materials");
            return (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={isActive ? "text-[var(--dark)]" : "text-[var(--text-muted)] hover:text-[var(--dark)]"}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Bottom Pill Nav */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xs">
        <nav className="bg-white shadow-lg border border-[var(--line)] rounded-full p-1">
          <ul className="flex justify-between items-center text-[10px] sm:text-xs font-medium tracking-wide">
            {links.map((link) => {
              const isActive = pathname.startsWith(link.href) || (pathname === "/" && link.href === "/study-materials");
              return (
                <li key={link.href} className="flex-1 text-center">
                  <Link 
                    href={link.href} 
                    className={`block py-2 px-1 rounded-full transition-colors ${
                      isActive 
                        ? "bg-[var(--dark)]" 
                        : "text-[var(--text-muted)] hover:text-[var(--dark)]"
                    }`}
                    style={isActive ? { color: '#ffffff' } : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
