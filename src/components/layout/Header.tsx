import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, User, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/how-it-works', label: 'How MarTechAdda Works' },
  { href: '/why-this-works', label: 'Why This Works' },
  { href: '/contact', label: 'Contact' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50 theme-transition">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
              M
            </div>
            <span className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
              MarTechAdda
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* CTA Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <Button variant="hero" size="sm" asChild>
                <Link to="/experts">Find Marketing Experts</Link>
              </Button>
              <Button variant="hero-outline" size="sm" asChild>
                <Link to="/register">Showcase Your Expertise</Link>
              </Button>
            </div>

            {/* Utility Icons */}
            <div className="flex items-center gap-1">
              {/* Login */}
              <Button variant="ghost" size="icon-sm" className="text-muted-foreground hover:text-foreground" asChild>
                <Link to="/login">
                  <User className="w-4 h-4" />
                </Link>
              </Button>

              {/* Social */}
              <div className="hidden sm:flex items-center gap-1">
                <Button variant="ghost" size="icon-sm" className="text-muted-foreground hover:text-foreground" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon-sm" className="text-muted-foreground hover:text-foreground" asChild>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4" />
                  </a>
                </Button>
              </div>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={toggleTheme}
                className="text-muted-foreground hover:text-foreground"
              >
                <AnimatePresence mode="wait">
                  {theme === 'light' ? (
                    <motion.div
                      key="moon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon-sm"
                className="lg:hidden text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-border/50 bg-card"
          >
            <nav className="container-custom py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
                <Button variant="hero" asChild>
                  <Link to="/experts" onClick={() => setMobileMenuOpen(false)}>Find Marketing Experts</Link>
                </Button>
                <Button variant="hero-outline" asChild>
                  <Link to="/register" onClick={() => setMobileMenuOpen(false)}>Showcase Your Expertise</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
