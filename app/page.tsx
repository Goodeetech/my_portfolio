import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { Project } from "./components/Projects";
import Tape from "./components/layers/Tape";
import Testimonial from "./components/layers/Testimonial";
import About from "./components/layers/About";
import PreFooter from "./components/layers/PreFooter";
import Footer from "./components/layers/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Project />
      <Tape />
      <Testimonial />
      <About />
      <PreFooter />
      <Footer />
    </div>
  );
}
