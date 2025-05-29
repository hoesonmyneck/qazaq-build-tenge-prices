
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
