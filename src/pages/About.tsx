import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Chrome, Zap, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About True Apps
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to <span className="text-primary font-semibold">simplify your digital life</span> with powerful Chrome extensions that enhance productivity and streamline everyday tasks.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              In today's fast-paced digital world, we believe technology should work for you, not against you. That's why we create Chrome extensions that eliminate friction from your daily workflows.
            </p>
            <p className="text-muted-foreground mb-6">
              From simplifying PDF viewing to streamlining login processes, our extensions are designed with one goal in mind: making your digital experience effortless and efficient.
            </p>
            <Button variant="hero" size="lg">
              Explore Our Extensions
            </Button>
          </div>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/f55975cb-5c51-49fb-9db1-9c81c2eebe0f.png" 
              alt="True Apps" 
              className="w-48 h-48 object-contain"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">What Drives Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Simplicity First</h3>
              <p className="text-muted-foreground">
                We believe the best solutions are the simplest ones. Our extensions are designed to be intuitive and easy to use.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Privacy & Security</h3>
              <p className="text-muted-foreground">
                Your data and privacy are paramount. We build with security in mind and never compromise on user trust.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">User-Centered</h3>
              <p className="text-muted-foreground">
                Every feature we build starts with understanding real user needs and solving genuine problems.
              </p>
            </div>
          </div>
        </div>

        {/* Chrome Web Store Section */}
        <div className="text-center bg-primary/5 rounded-lg p-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Chrome className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Available on Chrome Web Store</h2>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            All our extensions are available through the official Chrome Web Store, ensuring security, 
            automatic updates, and seamless integration with your browser.
          </p>
          <Button variant="hero" size="lg">
            View Our Extensions
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;