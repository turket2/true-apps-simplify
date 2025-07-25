import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Extensions from "@/components/Extensions";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Handle hash-based navigation when component mounts
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Extensions />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
