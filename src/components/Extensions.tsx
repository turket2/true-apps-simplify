import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Shield, Printer, Download, Star } from "lucide-react";

const extensions = [
  {
    icon: FileText,
    name: "Easy PDF Viewer",
    description: "Bring simplicity to viewing and converting PDFs right from your browser! Enhanced browsing experience with easy PDF management.",
    rating: 4.5,
    downloads: "3K+",
    color: "bg-brand-red",
    chromeStoreUrl: "https://chromewebstore.google.com/detail/easy-pdf-viewer/jgdddeonphekfhicmnpffkfpboalmcjd"
  },
  {
    icon: Shield,
    name: "Easy Login",
    description: "Tired of encountering fake or dangerous login pages? Instantly redirects you to verified and authentic login pages. Advanced security checks protect your data.",
    rating: 4.8,
    downloads: "2K+", 
    color: "bg-brand-blue",
    chromeStoreUrl: "https://chromewebstore.google.com/detail/easy-login/cpmjnpalighpdecgankobogpcmbceaig"
  },
  {
    icon: Printer,
    name: "Quick Print",
    description: "Clean, clutter-free printing in one click! Automatically removes ads, navigation menus, and sidebars for optimized paper printing.",
    rating: 4.6,
    downloads: "3K+",
    color: "bg-brand-yellow",
    chromeStoreUrl: "https://chromewebstore.google.com/detail/quick-print/ebgcanfjipfcdnjgpbagblmgebkpbhoo"
  }
];

const Extensions = () => {
  return (
    <section id="extensions" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Powerful Extensions at Your Fingertips
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect any app from the True Apps library in just one click and enhance 
            your browser with our free Chrome extensions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {extensions.map((extension, index) => {
            const IconComponent = extension.icon;
            return (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card border-border">
                <CardHeader>
                  <div className={`w-16 h-16 ${extension.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{extension.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                    {extension.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-gradient-primary group-hover:text-white group-hover:border-transparent transition-all"
                    onClick={() => window.open(extension.chromeStoreUrl, '_blank')}
                  >
                    Add to Chrome
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.location.href = '/all-apps'}
          >
            View All Extensions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Extensions;