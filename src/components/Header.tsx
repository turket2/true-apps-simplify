import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/f55975cb-5c51-49fb-9db1-9c81c2eebe0f.png" 
              alt="True Apps Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-foreground">True Apps</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <button 
              onClick={() => {
                if (window.location.pathname === '/') {
                  document.getElementById('extensions')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#extensions';
                }
              }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Extensions
            </button>
            <button 
              onClick={() => {
                if (window.location.pathname === '/') {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#features';
                }
              }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </button>
            <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="hero" size="sm" asChild>
              <a href="/all-apps">
                View All Extensions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;