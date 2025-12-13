"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  ChevronDown,
  ChevronUp,
  Clock,
  Users,
  Globe,
  Building2,
  TrendingUp,
  Award,
  Target,
  Handshake,
  MapPin,
} from "lucide-react";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    businessDesignation: "",
    message: "",
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:info@onirubusinessnetwork.com?subject=Contact Form Submission - ${formData.name}&body=Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0ABusiness & Designation: ${formData.businessDesignation}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

    window.location.href = mailtoLink;

    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      businessDesignation: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const faqs = [
    {
      q: "What is the purpose of the OBCD?",
      a: "The Oniru Business & Culture Day provides a respectful forum for senior stakeholders to discuss ease-of-business matters, operational challenges, and cooperation across the Iru corridor. It also includes a cultural segment reflecting the identity and heritage of Iru.",
    },
    {
      q: "Who is hosting the event?",
      a: "The event is hosted by His Royal Majesty, Oba Abdul-Wasiu Omogbolahan Lawal, CON, [Abisogbon II], Oniru of Iru Land. It is supported by the Lagos State Ministry of Commerce, Cooperatives, Trade & Investment (MCCTI).",
    },
    {
      q: "Who is coordinating the event?",
      a: "Operational coordination is managed by Marveys Global Resources, the Palace-approved administrative partner for the event.",
    },
    {
      q: "Why were selected organisations invited to sponsor?",
      a: "Institutions with meaningful presence, strategic relevance, or long-term interests in the Iru–Oniru–Victoria Island corridor were identified and invited to support the engagement.",
    },
    {
      q: "What does sponsorship support?",
      a: "Sponsorship contributions enable the hosting of the Business Meeting, the Cultural Presentation, and the administration of the OBCD Network for follow-up dialogue.",
    },
    {
      q: "What are the benefits for sponsors?",
      a: "Benefits include reserved seating allocations, premium visibility in event materials, formal recognition during the event, and participation in select OBCD Network sessions.",
    },
    {
      q: "Who will be attending the Business Meeting?",
      a: "Expected participants include CEOs, investors, diplomatic representatives, development finance institutions, expatriate groups, and senior Lagos State officials.",
    },
    {
      q: "Is the event open to the public?",
      a: "No. The event is strictly by invitation only.",
    },
    {
      q: "What is the OBCD Network?",
      a: "The OBCD Network is an ongoing consultative platform introduced by His Majesty to maintain organised dialogue between the Palace, private sector, and government agencies after the event.",
    },
    {
      q: "How do we confirm our sponsorship?",
      a: "Organisations should: 1. Review the sponsorship tiers. 2. Contact Marveys Global Resources to confirm participation. 3. Complete payment to the designated OBCD account.",
    },
    {
      q: "What are the official payment details?",
      a: "Account Name: Marveys Global Resources – OBCD, Bank: First Bank, Account Number: 2031914372, Reference: OBCD 2026 – [Your Organisation]. Only payments made to this account will be recognised.",
    },
    {
      q: "Will sponsors receive receipts or documentation?",
      a: "Yes. Marveys Global Resources will issue payment acknowledgement, official receipt, confirmation of sponsorship level, and follow-up communication on branding assets.",
    },
    {
      q: "Will our brand assets be used immediately after confirmation?",
      a: "Yes. Sponsors are advised to provide a high-resolution logo and naming format promptly to ensure correct inclusion in event materials.",
    },
    {
      q: "What if our organisation requires internal approvals?",
      a: "Sponsors may request a formal invoice, a sponsorship confirmation letter, and any additional documentation required by internal compliance teams. Marveys Global will provide these upon request.",
    },
    {
      q: "Is the sponsorship refundable?",
      a: "No. Sponsorship is a confirmed commitment once payment is made.",
    },
    {
      q: "Who do we contact for clarification or support?",
      a: "Marveys Global Resources - Telephone: +234 708 253 0885, +234 810 016 0482, Email: lande@onirubusinessnetwork.com, korede@onirubusinessnetwork.com, info@onirubusinessnetwork.com, Website: www.onirubusinessnetwork.com",
    },
  ];

  return (
    <div className="fira-sans min-h-screen bg-background">
      <Header />

      <section
        id="home"
        className="relative min-h-[90vh] flex items-center justify-center px-4 pt-32 pb-20 bg-linear-to-br from-background via-secondary/20 to-background overflow-hidden scroll-mt-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(194,160,96,0.08),transparent_50%)]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-left"
            >
              <motion.div
                variants={itemVariants}
                className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6"
              >
                Oniru Kingdom, Lagos
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight"
                variants={itemVariants}
              >
                Strategic Solutions for{" "}
                <span className="text-primary">
                  Business Growth & Cultural Excellence
                </span>
              </motion.h1>

              <motion.p
                className="font-sans text-lg md:text-xl text-foreground/70 mb-8 text-pretty leading-relaxed"
                variants={itemVariants}
              >
                Partners in Sustainable Living and Ease of Business within Iru
                Kingdom. Building bridges between culture, commerce, and
                community development.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" asChild className="text-base">
                  <a href="#about">
                    Learn More <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-base bg-transparent"
                >
                  <a href="#contact">Get in Touch</a>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border"
              >
                {[
                  { label: "Years of Excellence", value: "5+" },
                  { label: "Annual Event", value: "2026" },
                  { label: "Stakeholders", value: "100+" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-foreground/60">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/onirubusinessnetwork.jpg"
                  alt="Oniru Business Network Logo"
                  className="w-full h-auto"
                  width={800}
                  height={800}
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/50 to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      Royal Partnership
                    </div>
                    <div className="text-xs text-foreground/60">
                      Officially Supported
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Building2, label: "Business Development" },
              { icon: Globe, label: "Cultural Diplomacy" },
              { icon: TrendingUp, label: "Investment Facilitation" },
              { icon: Handshake, label: "Strategic Partnerships" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <item.icon className="w-6 h-6" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
                Our Vision
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Oniru Business Network?
              </h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Over the past five years of my reign, my conversations with
                  stakeholders across Iru Kingdom have revealed a shared view:{" "}
                  <strong className="text-foreground">
                    cultural diplomacy is essential
                  </strong>{" "}
                  to improving livelihoods and strengthening the ease of doing
                  business in our community.
                </p>
                <p>
                  Business leaders, diplomats, cultural custodians, investors,
                  creatives, and residents all expressed the need for a
                  structured platform that connects our cultural identity with
                  how we engage, attract investment, and solve common
                  challenges.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Our Mission
                    </h3>
                    <p className="text-sm text-foreground/70">
                      To make cultural diplomacy a practical tool for
                      prosperity, investment, and shared progress in our
                      cosmopolitan Kingdom.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Community Focused
                    </h3>
                    <p className="text-sm text-foreground/70">
                      Engaging business leaders, diplomats, cultural custodians,
                      investors, and residents in meaningful dialogue.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Forward-Looking
                    </h3>
                    <p className="text-sm text-foreground/70">
                      Reflecting the character of Iruland: resilient, open, and
                      committed to sustainable development.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-linear-to-b from-secondary/20 via-primary/5 to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              What We Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Unlock Business Growth with Expert Services
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Comprehensive support for businesses and investors in the Iru
              Kingdom corridor
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: "Strategic Business Planning",
                desc: "Coordinated Royal-private-State engagement platform for structured dialogue and investment facilitation.",
              },
              {
                icon: Globe,
                title: "Cultural Diplomacy & Insights",
                desc: "Curated presentation of Iru's cultural identity and creative economy potential for long-term partnerships.",
                highlight: true,
              },
              {
                icon: Handshake,
                title: "Partnership Advisory Services",
                desc: "Connect with CEOs, investors, development finance institutions, and senior government representatives.",
              },
              {
                icon: TrendingUp,
                title: "Growth & Compliance Services",
                desc: "Navigate operational bottlenecks and priority areas aligned with Lagos THEMES Plus Agenda.",
              },
              {
                icon: Users,
                title: "Business Growth Strategies",
                desc: "Access ongoing consultative platform for dialogue between Palace, private sector, and government agencies.",
              },
              {
                icon: Award,
                title: "Corporate Advisory Services",
                desc: "Premium visibility, formal recognition, and participation in select OBCD Network sessions for sponsors.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card
                  className={`p-8 h-full hover:shadow-xl transition-all duration-300 group cursor-pointer ${
                    service.highlight
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card hover:border-primary/50"
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                      service.highlight
                        ? "bg-primary-foreground/20"
                        : "bg-primary/10"
                    }`}
                  >
                    <service.icon
                      className={`w-7 h-7 ${
                        service.highlight
                          ? "text-primary-foreground"
                          : "text-primary"
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold mb-3 ${
                      service.highlight
                        ? "text-primary-foreground"
                        : "text-foreground"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`leading-relaxed ${
                      service.highlight
                        ? "text-primary-foreground/90"
                        : "text-foreground/70"
                    }`}
                  >
                    {service.desc}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
                    <span
                      className={
                        service.highlight
                          ? "text-primary-foreground"
                          : "text-primary"
                      }
                    >
                      Learn More
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 ${
                        service.highlight
                          ? "text-primary-foreground"
                          : "text-primary"
                      }`}
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Oniru Business Network Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <motion.div
                className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                Our Vision
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                Why Oniru Business Network?
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-6">
              <p className="text-lg md:text-xl">
                Over the past five years of my reign, my conversations with
                stakeholders across Iru Kingdom have revealed a shared view:
                cultural diplomacy is essential to improving livelihoods and
                strengthening the ease of doing business in our community.
              </p>
              <p className="text-lg md:text-xl">
                Business leaders, diplomats, cultural custodians, investors,
                creatives, and residents all expressed the need for a structured
                platform that connects our cultural identity with how we engage,
                attract investment, and solve common challenges. The informal
                channels that previously linked people to government and
                institutions have served us well, but the time has come to
                organize them more effectively.
              </p>
              <p className="text-lg md:text-xl">
                This is what inspired the Oniru Business and Cultural Day—a
                platform that links business and culture, supports
                collaboration, and positions the traditional institution as an
                active partner in community development. It reflects the
                character of Iruland: resilient, open, and forward-looking.
              </p>
              <p className="text-lg md:text-xl font-semibold text-primary">
                Through this initiative, we aim to make cultural diplomacy a
                practical tool for prosperity, investment, and shared progress
                in our cosmopolitan Kingdom.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our People Section */}
      <section className="py-24 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <motion.div
                className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                Our Partners
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary">
                Our People
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Oniru Palace",
                  desc: "Traditional Institution Leadership",
                },
                { name: "Lagos State Government", desc: "State Partnership" },
                {
                  name: "Lagos State Ministry of Commerce",
                  desc: "Commerce & Trade Support",
                },
              ].map((org, i) => (
                <motion.div
                  key={i}
                  className="group p-8 bg-card rounded-2xl border-2 border-border hover:border-primary flex flex-col items-center justify-center min-h-60 text-center transition-all"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(194, 160, 96, 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  custom={i}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {org.name}
                  </h3>
                  <p className="text-sm text-foreground/60">{org.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Our Partners
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our People
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Trusted partnerships driving growth and development in Iru
                Kingdom
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Oniru Palace",
                  desc: "Traditional Institution Leadership",
                  icon: Award,
                },
                {
                  name: "Lagos State Government",
                  desc: "State Partnership",
                  icon: Building2,
                },
                {
                  name: "Lagos State Ministry of Commerce",
                  desc: "Commerce & Trade Support",
                  icon: TrendingUp,
                },
              ].map((org, i) => (
                <motion.div
                  key={i}
                  className="group p-8 bg-card rounded-2xl border-2 border-border hover:border-primary transition-all text-center"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(194, 160, 96, 0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  custom={i}
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <org.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {org.name}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {org.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-secondary/10 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Oniru Business & Cultural Day
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-4xl mx-auto">
              The Oniru Business & Cultural Day serves as a coordinated
              Royal-private-State engagement platform designed to enable
              structured dialogue between investors, expatriate operators, Lagos
              State ministries, and community stakeholders. The platform focuses
              on corridor-level business constraints and supports predictable
              follow‑through on issues escalated during the event.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="event" className="py-24 px-4 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Annual Event
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Event
              </h2>
              <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
                The Oniru Business & Cultural Day is an annual event that
                comprises of two major segments
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                className="group relative overflow-hidden bg-card rounded-2xl border-2 border-border hover:border-primary transition-all"
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="p-10">
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl mb-6 shadow-lg">
                    <Clock className="w-5 h-5" />
                    2:00 PM – 4:00 PM
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Business Council Session
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-lg mb-6">
                    A closed‑door strategic roundtable involving selected CEOs,
                    investors, development finance institutions, expatriate
                    business communities, and senior government representatives.
                  </p>
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                    <Target className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm text-foreground/70">
                      Discussions focus on investment facilitation, operational
                      bottlenecks, and priority areas that align with the Lagos
                      THEMES Plus Agenda.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              </motion.div>

              <motion.div
                className="group relative overflow-hidden bg-card rounded-2xl border-2 border-border hover:border-primary transition-all"
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="p-10">
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-primary text-primary-foreground font-bold rounded-xl mb-6 shadow-lg">
                    <Clock className="w-5 h-5" />
                    From 4:00 PM
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Cultural Diplomacy Showcase
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-lg mb-6">
                    A curated presentation of Oniru&apos;s cultural identity,
                    creative economy potential, and community partnerships.
                  </p>
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                    <Globe className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm text-foreground/70">
                      Aimed at strengthening social cohesion and deepening
                      long‑term engagement with public and private institutions.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section
        id="partnerships"
        className="py-24 px-4 bg-secondary/10 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
              Partnerships
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Strategic Affiliations
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
              We are your Partners in Sustainable Living and Ease of Business,
              within Iru Kingdom, Lagos.
            </p>
            <div className="bg-card p-8 rounded-2xl border border-border max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Our Affiliations:
              </h3>
              <ul className="space-y-4">
                {[
                  "The Lagos State Government",
                  "The Lagos State Ministry of Commerce, Cooperatives, Trade and Investments",
                  "Ministries, Departments and Agencies of Government",
                ].map((affiliation, i) => (
                  <li key={i} className="flex items-start gap-3 text-left">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                    <span className="text-lg text-foreground/80">
                      {affiliation}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">
                Get in Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Contact Us
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Have questions or interested in partnering with us? Fill out the
                form and we&apos;ll get back to you shortly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Email
                    </h3>
                    <p className="text-foreground/70">
                      info@onirubusinessnetwork.com
                    </p>
                    <p className="text-foreground/70">
                      lande@onirubusinessnetwork.com
                    </p>
                    <p className="text-foreground/70">
                      korede@onirubusinessnetwork.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Phone
                    </h3>
                    <p className="text-foreground/70">+234 708 253 0885</p>
                    <p className="text-foreground/70">+234 810 016 0482</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Location
                    </h3>
                    <p className="text-foreground/70">
                      Iru Kingdom, Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+234 xxx xxx xxxx"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="businessDesignation"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      Business & Designation *
                    </label>
                    <Input
                      id="businessDesignation"
                      name="businessDesignation"
                      value={formData.businessDesignation}
                      onChange={handleChange}
                      required
                      placeholder="Company Name & Your Position"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your complaint, suggestion, or review..."
                      rows={5}
                      className="w-full resize-none"
                    />
                  </div>

                  {submitted && (
                    <div className="p-4 bg-primary/10 text-primary rounded-lg text-center font-semibold">
                      Thank you! Your message has been sent.
                    </div>
                  )}

                  <Button type="submit" size="lg" className="w-full text-base">
                    Submit Message
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  <p className="text-xs text-foreground/60 text-center">
                    Your submission will be sent to
                    info@onirubusinessnetwork.com for review. You&apos;ll
                    receive a confirmation with a reference number.
                  </p>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 px-4 bg-secondary/10 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                FAQs
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                OBCD 2026 - Sponsorship FAQs
              </h2>
              <p className="text-lg text-foreground/60">
                Everything you need to know about the Oniru Business & Cultural
                Day
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 space-y-2">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card
                    className={`overflow-hidden transition-all duration-300 cursor-pointer ${
                      openFAQ === index
                        ? "border-primary shadow-lg"
                        : "hover:border-primary/50"
                    }`}
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <div className="px-4">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-semibold text-foreground flex-1">
                          {faq.q}
                        </h3>
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                          {openFAQ === index ? (
                            <ChevronUp className="w-5 h-5 text-primary" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-primary" />
                          )}
                        </div>
                      </div>
                      {openFAQ === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-border"
                        >
                          <p className="text-foreground/70 leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-linear-to-b from-secondary/20 to-background border-t border-border py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <Image
                src="/images/onirubusinessnetwork.jpg"
                alt="IBN Logo"
                className="h-16 w-auto mb-4"
                width={160}
                height={160}
              />
              <p className="text-foreground/70 leading-relaxed">
                Partners in Sustainable Living and Ease of Business within Iru
                Kingdom, Lagos.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  "Home",
                  "About",
                  "Event",
                  "Partnerships",
                  "FAQ",
                  "Contact",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">
                Contact
              </h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-start gap-2">
                  <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p>info@onirubusinessnetwork.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p>+234 708 253 0885</p>
                    <p>+234 810 016 0482</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Partners */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">
                Our Partners
              </h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>Oniru Palace</li>
                <li>Lagos State Government</li>
                <li>Lagos State Ministry of Commerce</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center">
            <p className="text-foreground/60">
              © {new Date().getFullYear()} Oniru Business Network. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
