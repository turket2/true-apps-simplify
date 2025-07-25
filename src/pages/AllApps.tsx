import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Shield, Printer, Star, Download, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AllApps = () => {
  const extensions = [
    {
      icon: FileText,
      name: "Easy PDF Viewer",
      description: "Convert, view, and manage PDF files directly in your browser. Edit text, merge documents, and extract pages with ease.",
      rating: 4.8,
      downloads: "50,000+",
      color: "bg-brand-red",
      features: [
        "PDF to Word conversion",
        "Merge multiple PDFs",
        "Extract specific pages",
        "Add annotations and comments",
        "Password protection"
      ],
      chromeStoreUrl: "https://chromewebstore.google.com/detail/easy-pdf-viewer/jgdddeonphekfhicmnpffkfpboalmcjd"
    },
    {
      icon: Shield,
      name: "Easy Login",
      description: "Secure password manager with autofill capabilities. Generate strong passwords and keep your accounts safe with encrypted storage.",
      rating: 4.9,
      downloads: "75,000+",
      color: "bg-brand-blue",
      features: [
        "Password generation",
        "Secure autofill",
        "Encrypted storage",
        "Two-factor authentication",
        "Cross-device sync"
      ],
      chromeStoreUrl: "https://chromewebstore.google.com/detail/easy-login/cpmjnpalighpdecgankobogpcmbceaig"
    },
    {
      icon: Printer,
      name: "Quick Print",
      description: "Advanced printing controls for web pages. Remove ads, select specific content, and optimize layouts for perfect printing results.",
      rating: 4.7,
      downloads: "30,000+",
      color: "bg-brand-yellow",
      features: [
        "Ad-free printing",
        "Content selection",
        "Print preview",
        "Layout optimization",
        "Save as PDF"
      ],
      chromeStoreUrl: "https://chromewebstore.google.com/detail/quick-print/ebgcanfjipfcdnjgpbagblmgebkpbhoo"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                All Chrome Extensions
              </Badge>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Powerful Apps for
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Every Need</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover our complete collection of Chrome extensions designed to boost your productivity 
              and simplify your digital workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Extensions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {extensions.map((extension, index) => {
              const IconComponent = extension.icon;
              return (
                <Card key={index} className="group relative overflow-hidden transition-all duration-300 hover:shadow-elegant hover:-translate-y-2">
                  <div className="p-8">
                    {/* Icon Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 ${extension.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-brand-yellow mb-1">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="font-semibold">{extension.rating}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{extension.downloads} downloads</p>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-foreground mb-3">{extension.name}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{extension.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {extension.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        className="flex-1"
                        onClick={() => window.open(extension.chromeStoreUrl, '_blank')}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Install Extension
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(extension.chromeStoreUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-accent/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to boost your productivity?
              </h3>
              <p className="text-muted-foreground mb-6">
                Install all our extensions and transform your browsing experience today.
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open("https://chrome.google.com/webstore", '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Get All Extensions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllApps;