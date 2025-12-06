import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Server, Moon, Sun } from "lucide-react";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const navLinks = [
  { href: "/", label: "خانه" },
  { href: "/services", label: "خدمات" },
  { href: "/blog", label: "وبلاگ" },
  { href: "/status", label: "وضعیت سرورها" },
  { href: "/faq", label: "سوالات متداول" },
  { href: "/contact", label: "تماس با ما" },
];

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-orange flex items-center justify-center">
              <Server className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient-orange">آریاهاست</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={location === link.href ? "bg-primary/10 text-primary" : ""}
                  data-testid={`nav-link-${link.href.replace("/", "") || "home"}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            
            <Link href="/services">
              <Button className="hidden md:flex gradient-orange border-0 text-white" data-testid="button-order-now">
                سفارش سرویس
              </Button>
            </Link>

            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden glass border-t border-white/10 animate-fade-in">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${location === link.href ? "bg-primary/10 text-primary" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                  data-testid={`mobile-nav-${link.href.replace("/", "") || "home"}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link href="/services">
              <Button
                className="w-full gradient-orange border-0 text-white mt-4"
                onClick={() => setIsMenuOpen(false)}
                data-testid="button-mobile-order"
              >
                سفارش سرویس
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
