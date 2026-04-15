import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Experience from "./components/Experience";
import CaseStudies from "./components/CaseStudies";
import Tools from "./components/Tools";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="scanlines dot-grid min-h-screen bg-bg text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Experience />
        <CaseStudies />
        <Tools />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
