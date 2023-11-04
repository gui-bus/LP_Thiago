import Gallery from "@/components/sections/gallerySection";
import HeroSection from "@/components/sections/heroSection";
import AboutSection from "@/components/sections/aboutSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <Gallery />
    </main>
  );
}
