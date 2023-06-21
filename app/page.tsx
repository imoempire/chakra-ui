"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "../Components/HeroSection";
import Features from "../Components/Features";
import Footer from "@/Components/Footer";
import ClientTestimonial from "@/Components/Testimonial";
import Contact from "@/Components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="testimonies">
        <ClientTestimonial />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
