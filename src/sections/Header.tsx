import { useState, useEffect } from 'react';
import { Globe, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Travel Tips', href: '#stories' },
  { label: 'Inspiration', href: '#highlights' },
  { label: 'Trips', href: '#newsletter' },
  { label: 'Blog', href: '#stories' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Globe className="w-6 h-6 text-[#E86C45] transition-transform duration-300 group-hover:rotate-12" />
            <span className="text-lg font-bold text-[#2D2D2D] tracking-tight">
              GLOBE TREKKER
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#6B6B6B] hover:text-[#2D2D2D] transition-colors duration-200 hover-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              className="p-2 text-[#6B6B6B] hover:text-[#2D2D2D] transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Button
              className="bg-[#E86C45] hover:bg-[#D55A35] text-white rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
            >
              Sign In
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button
                className="p-2 text-[#2D2D2D]"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-[#E8E0D8]">
                  <a href="#" className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[#E86C45]" />
                    <span className="text-base font-bold text-[#2D2D2D]">
                      GLOBE TREKKER
                    </span>
                  </a>
                </div>
                <nav className="flex flex-col p-4 gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="py-3 px-4 text-base font-medium text-[#2D2D2D] hover:bg-[#FFF5ED] rounded-lg transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto p-4 border-t border-[#E8E0D8]">
                  <Button
                    className="w-full bg-[#E86C45] hover:bg-[#D55A35] text-white rounded-full py-3 text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
