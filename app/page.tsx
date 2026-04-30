import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsKurinu from "@/components/WhatIsKurinu";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import TakeALook from "@/components/TakeALook";
import HowToOrder from "@/components/HowToOrder";
import Commissions from "@/components/Commissions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIsKurinu />
        <About />
        <Gallery />
        <Features />
        <TakeALook />
        <HowToOrder />
        <Commissions />
      </main>
      <Footer />
    </>
  );
}
