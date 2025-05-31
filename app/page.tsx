import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { Project } from "./components/Projects";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Project />
    </div>
  );
}
