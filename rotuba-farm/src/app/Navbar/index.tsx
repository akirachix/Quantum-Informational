"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative font-serif font-bold text-7xl">
      <header className="fixed w-full z-10 bg-white bg-opacity-90 shadow">
        <div className="container max-w-[1800px] mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div>
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={55}
                  height={20}
                  className="p-2"
                  style={{ objectFit: "contain" }} // Use CSS style for object fit
                />
              </div>
            </div>
            <nav className="hidden md:flex space-x-4 lg:space-x-8 font-semibold text-2xl">
            <Link href="#home">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#product">Product</Link>
              <Link href="#team">Team</Link>
            </nav>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 z-50 h-full"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-40 flex items-center justify-center">
            <div className="text-center">
              <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink href="#product" onClick={() => setIsMenuOpen(false)}>
                Product
              </MobileNavLink>
              <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>
                Mission
              </MobileNavLink>
              <MobileNavLink href="/team" onClick={() => setIsMenuOpen(false)}>
                Team
              </MobileNavLink>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </header>
      <div className="pt-16"></div>
    </div>
  );
}

// NavLink component with prop types
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function Link({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-blue-500 px-2 py-1 text-2xl font-bold transition duration-150 ease-in-out"
    >
      {children}
    </a>
  );
}
interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

function MobileNavLink({ href, children, onClick }: MobileNavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-3 py-4 text-3xl font-bold text-gray-600 hover:text-blue-500"
    >
      {children}
    </a>
  );
}
