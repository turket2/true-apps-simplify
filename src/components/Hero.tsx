import { Button } from "@/components/ui/button";
import { Chrome, Download, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">
                <Chrome className="w-4 h-4" />
                Chrome Extensions Made Simple
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Extensions to 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> simplify </span>
              your everyday tasks
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Looking for a PDF converter? Need to enhance your productivity? We've made it 
              incredibly easy to do that and more—right from your browser—with True Apps extensions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                <Download className="w-5 h-5 mr-2" />
                Download Extensions
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Zap className="w-5 h-5 mr-2" />
                View All Apps
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                Free to use forever
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main circular design inspired by Shift */}
              <div className="relative w-96 h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-xl"></div>
                <div className="absolute inset-4 bg-gradient-accent rounded-full opacity-30"></div>
                <div className="absolute inset-8 bg-background rounded-full shadow-elegant"></div>
                
                {/* Floating extension icons */}
                <div className="absolute top-12 right-16 w-16 h-16 bg-brand-red rounded-xl shadow-lg flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform">
                  <span className="text-white font-bold text-xs">PDF</span>
                </div>
                
                <div className="absolute bottom-16 left-12 w-14 h-14 bg-brand-blue rounded-xl shadow-lg flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform">
                  <Chrome className="w-6 h-6 text-white" />
                </div>
                
                <div className="absolute top-1/3 right-4 w-12 h-12 bg-brand-yellow rounded-xl shadow-lg flex items-center justify-center transform rotate-45 hover:rotate-0 transition-transform">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                
                <div className="absolute bottom-1/3 left-8 w-10 h-10 bg-accent rounded-lg shadow-lg flex items-center justify-center transform -rotate-45 hover:rotate-0 transition-transform">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;