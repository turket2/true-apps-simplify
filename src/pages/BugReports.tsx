import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bug, Mail, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BugReports = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    extension: "",
    severity: "",
    subject: "",
    description: "",
    steps: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.extension || !formData.subject || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Bug Report Submitted",
      description: "Thank you for your report. We'll investigate this issue promptly.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      extension: "",
      severity: "",
      subject: "",
      description: "",
      steps: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Bug className="w-12 h-12 text-destructive" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Bug Reports
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Found a bug? Help us improve our extensions by reporting issues you encounter.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Bug Report Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bug className="w-6 h-6 text-destructive" />
                  Report a Bug
                </CardTitle>
                <CardDescription>
                  Please provide as much detail as possible to help us resolve the issue quickly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Extension and Severity */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="extension">Extension *</Label>
                      <Select value={formData.extension} onValueChange={(value) => handleInputChange("extension", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select extension" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="easy-pdf-viewer">Easy PDF Viewer</SelectItem>
                          <SelectItem value="easy-login">Easy Login</SelectItem>
                          <SelectItem value="quick-print">Quick Print</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="severity">Severity</Label>
                      <Select value={formData.severity} onValueChange={(value) => handleInputChange("severity", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select severity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low - Minor inconvenience</SelectItem>
                          <SelectItem value="medium">Medium - Affects functionality</SelectItem>
                          <SelectItem value="high">High - Prevents normal use</SelectItem>
                          <SelectItem value="critical">Critical - Extension unusable</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Bug Details */}
                  <div className="space-y-2">
                    <Label htmlFor="subject">Bug Summary *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Brief description of the issue"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Detailed Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Describe what happened, what you expected to happen, and any error messages you saw..."
                      className="min-h-32"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="steps">Steps to Reproduce</Label>
                    <Textarea
                      id="steps"
                      value={formData.steps}
                      onChange={(e) => handleInputChange("steps", e.target.value)}
                      placeholder="1. Go to...&#10;2. Click on...&#10;3. Observe that..."
                      className="min-h-24"
                    />
                  </div>

                  <Button type="submit" className="w-full" variant="destructive">
                    Submit Bug Report
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tips Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  Reporting Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <h4 className="font-medium text-foreground mb-1">Be Specific</h4>
                  <p className="text-muted-foreground">Include exact error messages and describe what you were doing when the bug occurred.</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Steps to Reproduce</h4>
                  <p className="text-muted-foreground">List the exact steps someone else could follow to see the same issue.</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Environment Details</h4>
                  <p className="text-muted-foreground">Mention your Chrome version, operating system, and extension version if known.</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Need Urgent Help?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  For critical issues that prevent you from working, contact us directly.
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Support
                </Button>
              </CardContent>
            </Card>

            {/* Status Card */}
            <Card>
              <CardHeader>
                <CardTitle>Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Critical:</span>
                    <span className="font-medium">24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">High:</span>
                    <span className="font-medium">48 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Medium:</span>
                    <span className="font-medium">3-5 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Low:</span>
                    <span className="font-medium">1-2 weeks</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BugReports;