import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import TakeALook from "@/components/TakeALook";
import HowToOrder from "@/components/HowToOrder";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Features />
        <TakeALook />
        <HowToOrder />
      </main>
      <Footer />
    </>
  );
}
