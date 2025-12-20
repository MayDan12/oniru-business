"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    id: 1,
    feature: "A Short Message",
    title: "HRM OBA ABDULWASIU OMOGBOLAHAN LAWAL",
    subtitle: "CON ABISOGUN II THE ONIRU OF IRU KINGDOM",
    image: "/images/oba1.jpg",
    link: "/event",
    cta: "View Message",
  },
  {
    id: 2,
    feature: "A Short Message",
    title: "Mrs Folashade Kaosarat Bada-Ambrose",
    subtitle:
      "Honourable Commissioner for Commerce, Cooperatives, Trade and Investment",
    image: "/images/comm.jpg",
    link: "/investment",
    cta: "Explore Opportunities",
  },
  {
    id: 3,
    feature: "Featured",
    title: "Cultural Diplomacy Showcase",
    subtitle: "Experience the rich heritage and creative economy of Iruland",
    image: "/images/comm.jpg",
    link: "/culture",
    cta: "Discover Our Culture",
  },
  {
    id: 4,
    feature: "Featured",
    title: "Become a Strategic Partner",
    subtitle: "Join leading organizations in shaping Iru's business future",
    image: "/images/comm.jpg",
    link: "/partnerships",
    cta: "Partner With Us",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  // Auto-advance carousel
  React.useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden bg-background">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slides[current].image || "/placeholder.svg"}
              alt={slides[current].title}
              className="w-full h-full object-contain"
              priority={true}
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-linear-to-r from-background/20 via-background/20 to-background/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto  w-full pt-120">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-2xl"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block px-4 py-2 bg-primary/90 text-primary-foreground text-sm font-semibold rounded-full mb-3"
                >
                  {slides[current].feature}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl font-bold text-foreground mb-2 text-balance leading-tight"
                >
                  {slides[current].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg  text-foreground/80 mb-3 text-pretty"
                >
                  {slides[current].subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button size="lg" asChild className="text-base px-3 py-6">
                    <Link href={slides[current].link}>
                      {slides[current].cta}
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="pointer-events-auto w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-background hover:border-primary"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="pointer-events-auto w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-background hover:border-primary"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === current
                ? "w-12 h-3 bg-primary"
                : "w-3 h-3 bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
