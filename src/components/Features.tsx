import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Users, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure & Private",
    description: "All processing happens locally in your browser. Your data never leaves your device.",
    color: "text-brand-red"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance ensures quick processing without slowing down your browser.",
    color: "text-brand-blue"
  },
  {
    icon: Users,
    title: "User-Friendly",
    description: "Intuitive interfaces designed for users of all technical backgrounds.",
    color: "text-brand-yellow"
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Compatible with all major websites and platforms. Use anywhere on the web.",
    color: "text-accent-foreground"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Simple Interface Through Which 
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Tasks Can Be Easily Managed
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience seamless productivity with our thoughtfully designed Chrome extensions 
            that integrate perfectly into your workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center p-6 hover:shadow-elegant transition-all duration-300 bg-background border-border group">
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center group-hover:bg-gradient-primary group-hover:scale-110 transition-all duration-300">
                      <IconComponent className={`w-8 h-8 ${feature.color} group-hover:text-white transition-colors`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Excellent way to use your time smartly
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Easy Installation</h4>
                  <p className="text-muted-foreground">One-click installation from the Chrome Web Store. No complex setup required.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Always Updated</h4>
                  <p className="text-muted-foreground">Regular updates ensure compatibility and new features are added continuously.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">24/7 Support</h4>
                  <p className="text-muted-foreground">Our dedicated support team is here to help whenever you need assistance.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-80 bg-gradient-subtle rounded-2xl shadow-elegant flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Chrome Web Store</h4>
                <p className="text-muted-foreground">Available on the official store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;