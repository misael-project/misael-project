import AboutSection from "@/components/About";
import Carousel from "@/components/Carousel";
import ContactSection from "@/components/Contact";
import ContentTemplate from "@/components/content-template";
import Divider from "@/components/divider";
import Navbar from "@/components/Header";
import IntroSection from "@/components/Intro";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center font-sans">
      <Navbar />
      <IntroSection />
      <AboutSection />
      <Carousel />
      <ContactSection />
    </main>
  );
}
