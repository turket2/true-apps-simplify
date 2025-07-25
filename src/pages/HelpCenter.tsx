import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  HelpCircle, 
  Book, 
  Bug, 
  Lightbulb, 
  Search, 
  Mail, 
  Phone, 
  MessageCircle,
  Chrome,
  Download,
  Settings
} from "lucide-react";
import { useState } from "react";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const helpCategories = [
    {
      title: "Installation Guide",
      description: "Learn how to install and remove Chrome extensions safely",
      icon: Download,
      link: "/installation-guide",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/30"
    },
    {
      title: "Bug Reports",
      description: "Report issues and problems with our extensions",
      icon: Bug,
      link: "/bug-reports",
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-950/30"
    },
    {
      title: "Feature Requests",
      description: "Suggest new features and improvements",
      icon: Lightbulb,
      link: "/feature-requests",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/30"
    }
  ];

  const quickHelp = [
    {
      question: "How do I install a Chrome extension?",
      answer: "Visit the Chrome Web Store, find the extension, and click 'Add to Chrome'.",
      category: "Installation"
    },
    {
      question: "Why isn't my extension working?",
      answer: "Try refreshing the page or restarting Chrome. Some extensions need a page reload.",
      category: "Troubleshooting"
    },
    {
      question: "How do I remove an extension?",
      answer: "Right-click the extension icon and select 'Remove from Chrome'.",
      category: "Installation"
    },
    {
      question: "Can I use extensions on mobile?",
      answer: "Chrome extensions are only available on desktop versions of Chrome.",
      category: "General"
    }
  ];

  const filteredHelp = quickHelp.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-12 h-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Help Center
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get help with True Apps extensions. Find answers to common questions or get personalized support.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Main Help Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">How Can We Help?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`w-8 h-8 ${category.color}`} />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button variant="outline" asChild className="w-full">
                      <a href={category.link}>Get Help</a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Help Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
          <div className="grid gap-4">
            {filteredHelp.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-bold">Q</span>
                    </div>
                    {item.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-950/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 dark:text-green-400 text-sm font-bold">A</span>
                    </div>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredHelp.length === 0 && searchQuery && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No results found for "{searchQuery}". Try a different search term.</p>
            </div>
          )}
        </div>

        {/* Contact Support Section */}
        <div className="flex justify-center mb-16">
          <Card className="max-w-md w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-6 h-6 text-primary" />
                Email Support
              </CardTitle>
              <CardDescription>
                Get personalized help via email. We typically respond within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                <a href="/contact" className="flex items-center gap-2 w-full justify-center">
                  <Mail className="w-4 h-4" />
                  Contact Support
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Extension-Specific Help */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Extension-Specific Help</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="w-5 h-5 text-blue-500" />
                  Easy PDF Viewer
                </CardTitle>
                <CardDescription>Help with PDF viewing and management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Opening PDF files</li>
                  <li>• Zoom and navigation</li>
                  <li>• Print settings</li>
                  <li>• Keyboard shortcuts</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-green-500" />
                  Easy Login
                </CardTitle>
                <CardDescription>Help with login automation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Setting up auto-login</li>
                  <li>• Security settings</li>
                  <li>• Managing credentials</li>
                  <li>• Troubleshooting</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Chrome className="w-5 h-5 text-purple-500" />
                  Quick Print
                </CardTitle>
                <CardDescription>Help with printing features</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Print setup</li>
                  <li>• Page formatting</li>
                  <li>• Printer selection</li>
                  <li>• Print preview</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Still Need Help */}
        <div className="text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Still Need Help?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <a href="/contact" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact Support
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="/bug-reports" className="flex items-center gap-2">
                <Bug className="w-4 h-4" />
                Report a Bug
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HelpCenter;