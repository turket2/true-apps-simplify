import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Users, FileText, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    helpType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Contact Form: ${formData.helpType || 'General Inquiry'}`;
    const body = `Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Help Type: ${formData.helpType}

Message:
${formData.message}`;
    
    const mailtoLink = `mailto:support@trueapps.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-foreground mb-4">Thank You!</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Thank you for your feedback. We will get back to you when we are able to.
            </p>
            <Button 
              variant="hero" 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ firstName: "", lastName: "", email: "", helpType: "", message: "" });
              }}
            >
              Send Another Message
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Contact <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team. We're here to help with any questions about our Chrome extensions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-card border-border shadow-glow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <Mail className="w-6 h-6 text-brand-blue" />
                  Get in touch with Support
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Real humans, we promise. Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter your first name" 
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter your last name" 
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email address" 
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="helpType">How can we help?</Label>
                    <Select value={formData.helpType} onValueChange={(value) => setFormData(prev => ({ ...prev, helpType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="bug">Bug Report</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="message">Tell us more</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your question or issue in detail..."
                      className="min-h-32"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      required
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" className="w-full" size="lg">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Contact Options */}
            <div className="space-y-8">
              {/* Press Inquiries */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold flex items-center gap-2">
                    <FileText className="w-5 h-5 text-brand-red" />
                    Press Inquiries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Please contact our team with a request or click the link below to browse recent press coverage and access brand assets.
                  </p>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full" asChild>
                      <a href="mailto:press@trueapps.com">
                        Contact Press Team
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Partnership Opportunities */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold flex items-center gap-2">
                    <Users className="w-5 h-5 text-brand-yellow" />
                    Partnership Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Could you see your brand or app partnering with True Apps? We're always looking for exciting collaboration opportunities.
                  </p>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full" asChild>
                      <a href="mailto:partnerships@trueapps.com">
                        Contact Partnerships Team
                      </a>
                    </Button>
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium mb-2">Partnership types we're interested in:</p>
                      <ul className="space-y-1 text-xs">
                        <li>• Integration partnerships</li>
                        <li>• Chrome Web Store collaborations</li>
                        <li>• Technology partnerships</li>
                        <li>• Marketing partnerships</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="bg-gradient-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <h3 className="text-lg font-semibold">Need immediate help?</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-2xl font-bold text-brand-blue">24h</div>
                        <div className="text-muted-foreground">Response time</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-brand-yellow">99%</div>
                        <div className="text-muted-foreground">Satisfaction rate</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;