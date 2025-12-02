"use client";

import React from "react";
import { easeOut, motion } from "framer-motion";
import { ArrowRight, ChartLine, Handshake, Sparkle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-background via-secondary to-background flex items-center justify-center px-4 py-12">
      <motion.div
        className="w-full max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo Section */}
        <motion.div
          className="flex justify-center mb-12"
          variants={itemVariants}
        >
          <motion.div
            className="animate-glow"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <Image
              src="/images/irubusinessnetwork.jpg"
              alt="IRU Business Network Logo"
              className="h-32 w-auto drop-shadow-lg"
              priority
              width={200}
              height={100}
            />
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div className="text-center space-y-6" variants={itemVariants}>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-primary text-balance"
            variants={itemVariants}
          >
            Something Extraordinary
            <span className="block text-foreground">is Coming</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground text-balance max-w-xl mx-auto"
            variants={itemVariants}
          >
            We're building the future of business networking. Our platform is
            under construction and coming very soon.
          </motion.p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div className="flex justify-center gap-8 my-12">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-12 bg-primary rounded-full"
              animate={{ scaleY: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Email Subscription */}
        <motion.div className="w-full max-w-md mx-auto" variants={itemVariants}>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                required
              />
              <motion.button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-shadow whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {submitted ? "Thanks!" : "Notify Me"}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
            {submitted && (
              <motion.p
                className="text-sm text-primary text-center font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ✓ Check your email for updates!
              </motion.p>
            )}
          </form>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          className="text-center mt-16 text-sm text-muted-foreground"
          variants={itemVariants}
        >
          <p>
            <strong className="text-foreground">IRU Business Network</strong> -
            Empowering Business Leaders
          </p>
          <p className="mt-2">Coming Soon</p>
        </motion.div>

        {/* Decorative Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16"
          variants={containerVariants}
        >
          {[
            { label: "Connect", icon: <Handshake /> },
            { label: "Grow", icon: <ChartLine /> },
            { label: "Thrive", icon: <Sparkle /> },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-lg bg-card border border-border backdrop-blur-sm hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <p className="font-semibold text-foreground">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}
