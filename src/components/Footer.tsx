import { Chrome, Mail, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/f55975cb-5c51-49fb-9db1-9c81c2eebe0f.png" 
                alt="True Apps Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">True Apps</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Simplifying your digital life with powerful Chrome extensions that enhance productivity and streamline everyday tasks.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Extensions */}
          <div>
            <h3 className="font-semibold mb-4">Extensions</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="/all-apps" className="hover:text-primary-foreground transition-colors">Easy PDF Viewer</a></li>
              <li><a href="/all-apps" className="hover:text-primary-foreground transition-colors">Easy Login</a></li>
              <li><a href="/all-apps" className="hover:text-primary-foreground transition-colors">Quick Print</a></li>
              <li><a href="/all-apps" className="hover:text-primary-foreground transition-colors">View All</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="/about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="/privacy-policy" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
              <li><a href="/contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="/help-center" className="hover:text-primary-foreground transition-colors">Help Center</a></li>
              <li><a href="/installation-guide" className="hover:text-primary-foreground transition-colors">Installation Guide</a></li>
              <li><a href="/bug-reports" className="hover:text-primary-foreground transition-colors">Bug Reports</a></li>
              <li><a href="/feature-requests" className="hover:text-primary-foreground transition-colors">Feature Requests</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 True Apps. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mt-4 md:mt-0">
            <Chrome className="w-4 h-4" />
            <span>Available on Chrome Web Store</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;