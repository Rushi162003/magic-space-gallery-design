
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-serif text-xl md:text-2xl font-semibold">
            Magic Space Interior
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              }
            />
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link to="/gallery" className="text-sm font-medium hover:underline underline-offset-4">
            Gallery
          </Link>
          <Link to="/videos" className="text-sm font-medium hover:underline underline-offset-4">
            Videos
          </Link>
          <Link to="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About Us
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b">
            <div className="flex flex-col py-4">
              <Link
                to="/"
                className="px-6 py-2 hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/gallery"
                className="px-6 py-2 hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/videos"
                className="px-6 py-2 hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Videos
              </Link>
              <Link
                to="/about"
                className="px-6 py-2 hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="px-6 py-2 hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-6 py-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
