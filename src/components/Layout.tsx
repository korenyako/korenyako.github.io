'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useScrollDirection from '@/hooks/useScrollDirection';
import { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

const Layout = ({ children, backgroundColor }: LayoutProps) => {
  const scrollDirection = useScrollDirection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <div
      className="min-h-screen bg-background"
      style={backgroundColor ? { backgroundColor, '--background': backgroundColor } as React.CSSProperties : undefined}
    >
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-background transition-transform duration-300 w-full ${
          scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
        }`}
        style={backgroundColor ? { backgroundColor } : undefined}
      >
        <div className="max-w-[1440px] mx-auto px-4 py-4 w-full flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-medium"
          >
            Anton Korenyako
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                href={link.to}
                className={`text-base font-medium transition-colors duration-200 ${
                  isActive(link.to) ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/documents/Anton-Korenyako-Product-Designer-Resume.pdf"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(true)}
            type="button"
          >
            <span className="block w-6 h-0.5 bg-foreground mb-1" />
            <span className="block w-6 h-0.5 bg-foreground mb-1" />
            <span className="block w-6 h-0.5 bg-foreground" />
          </button>
        </div>
      </header>
      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[9999] bg-white md:hidden transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'}`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center focus:outline-none"
          aria-label="Close menu"
          onClick={() => setMobileMenuOpen(false)}
          type="button"
        >
          <span className="block w-6 h-0.5 bg-muted-foreground rotate-45 absolute"></span>
          <span className="block w-6 h-0.5 bg-muted-foreground -rotate-45 absolute"></span>
        </button>
        <nav className="flex flex-col items-center pt-20 gap-8 h-full w-full">
          <Link
            href="/"
            className="text-2xl font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className="text-2xl font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="text-2xl font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-2xl font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <a
            href="/documents/Anton-Korenyako-Product-Designer-Resume.pdf"
            className="text-2xl font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            Resume
          </a>
        </nav>
      </div>
      <main className="pt-[88px]">
        {children}
      </main>
      <footer className="mt-32">
        <div className="max-w-[1440px] mx-auto px-4 py-12">
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Anton Korenyako
            <br />
            Made with Tailwind. Built with Next.js. Deployed on GitHub Pages.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
