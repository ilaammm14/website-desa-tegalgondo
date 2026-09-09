import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import About from "@/components/About";
import History from "@/components/History";
import VisionMission from "@/components/VisionMission";
import Government from "@/components/Government";
import Potentials from "@/components/Potentials";
import Dusun from "@/components/Dusun";
import VillageData from "@/components/VillageData";
import Gallery from "@/components/Gallery";
import Activities from "@/components/Activities";
import MapSection from "@/components/MapSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="w-full max-w-full overflow-x-hidden">
      {/* Sticky Navbar */}
      <Navbar />

      {/* 1. Hero — Full screen */}
      <Hero />

      {/* 2. Quick Statistics */}
      <Statistics />

      {/* 3. Tentang Desa */}
      <About />

      {/* 4. Sejarah Desa */}
      <History />

      {/* 5. Visi & Misi */}
      <VisionMission />

      {/* 6. Pemerintahan Desa */}
      <Government />

      {/* 7. Potensi Desa */}
      <Potentials />

      {/* 8. 5 Dusun */}
      <Dusun />

      {/* 9. Data Desa */}
      <VillageData />

      {/* 10. Galeri */}
      <Gallery />

      {/* 11. Kegiatan Desa */}
      <Activities />

      {/* 12. Peta */}
      <MapSection />

      {/* 13. Kontak */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
