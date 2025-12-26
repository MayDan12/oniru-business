"use client";

import React from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Event", href: "#event" },
    { label: "Partnerships", href: "#partnerships" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  // What a day

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/images/onirubusinessnetwork.jpg"
              alt="IBN Logo"
              className="h-12 w-auto"
              width={120}
              height={120}
            />
            <span className="text-lg font-bold text-primary hidden lg:block">
              Oniru Business Network
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-foreground/70 hover:text-primary font-medium transition-colors rounded-lg hover:bg-secondary/50"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="ml-4">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4 border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-foreground/70 hover:text-primary hover:bg-secondary/50 font-medium transition-colors rounded-lg"
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 py-3">
              <Button asChild className="w-full">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
