import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Image, Settings, Download, Star } from "lucide-react";

const extensions = [
  {
    icon: FileText,
    name: "PDF Master",
    description: "Convert, view, and edit PDF files with ease. Merge, split, and compress PDFs directly in your browser.",
    rating: 4.8,
    downloads: "50K+",
    color: "bg-brand-red"
  },
  {
    icon: Image,
    name: "Image Tools Pro",
    description: "Resize, compress, and convert images instantly. Support for all major formats including PNG, JPG, WebP.",
    rating: 4.9,
    downloads: "35K+", 
    color: "bg-brand-blue"
  },
  {
    icon: Settings,
    name: "Productivity Suite",
    description: "All-in-one toolkit for enhanced productivity. Task management, note-taking, and workflow automation.",
    rating: 4.7,
    downloads: "28K+",
    color: "bg-brand-yellow"
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
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                      <span>{extension.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      <span>{extension.downloads}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                    {extension.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full group-hover:bg-gradient-primary group-hover:text-white group-hover:border-transparent transition-all">
                    Add to Chrome
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            View All Extensions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Extensions;