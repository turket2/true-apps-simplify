import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Lightbulb, Sparkles, Users, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const FeatureRequests = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    extension: "",
    priority: "",
    title: "",
    description: "",
    useCase: "",
    benefit: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.extension || !formData.title || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Feature Request Submitted",
      description: "Thank you for your suggestion! We'll review it and consider it for future updates.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      extension: "",
      priority: "",
      title: "",
      description: "",
      useCase: "",
      benefit: ""
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
            <Lightbulb className="w-12 h-12 text-yellow-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Feature Requests
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have an idea for a new feature? Share your suggestions and help us build better extensions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feature Request Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-yellow-500" />
                  Request a Feature
                </CardTitle>
                <CardDescription>
                  Tell us about the feature you'd like to see. The more detail you provide, the better we can understand your needs.
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

                  {/* Extension and Priority */}
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
                          <SelectItem value="new-extension">New Extension Idea</SelectItem>
                          <SelectItem value="general">General Improvement</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority</Label>
                      <Select value={formData.priority} onValueChange={(value) => handleInputChange("priority", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="How important is this?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nice-to-have">Nice to have</SelectItem>
                          <SelectItem value="would-be-helpful">Would be helpful</SelectItem>
                          <SelectItem value="important">Important</SelectItem>
                          <SelectItem value="critical">Critical for my workflow</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Feature Details */}
                  <div className="space-y-2">
                    <Label htmlFor="title">Feature Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      placeholder="Brief, descriptive title for your feature request"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Feature Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Describe the feature you'd like to see. What should it do? How should it work?"
                      className="min-h-32"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="useCase">Use Case</Label>
                    <Textarea
                      id="useCase"
                      value={formData.useCase}
                      onChange={(e) => handleInputChange("useCase", e.target.value)}
                      placeholder="Describe when and how you would use this feature. What problem does it solve?"
                      className="min-h-24"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="benefit">Expected Benefit</Label>
                    <Textarea
                      id="benefit"
                      value={formData.benefit}
                      onChange={(e) => handleInputChange("benefit", e.target.value)}
                      placeholder="How would this feature improve your experience or productivity?"
                      className="min-h-24"
                    />
                  </div>

                  <Button type="submit" className="w-full" variant="hero">
                    Submit Feature Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Guidelines Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-500" />
                  Request Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <h4 className="font-medium text-foreground mb-1">Be Specific</h4>
                  <p className="text-muted-foreground">Clearly describe what the feature should do and how it should behave.</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Explain the Problem</h4>
                  <p className="text-muted-foreground">Help us understand what challenge you're trying to solve.</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Consider Others</h4>
                  <p className="text-muted-foreground">Think about how your feature might benefit other users too.</p>
                </div>
              </CardContent>
            </Card>

            {/* Popular Features Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                  Popular Requests
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-foreground">Dark mode for PDF viewer</p>
                    <p className="text-muted-foreground text-xs">Requested by 234 users</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-foreground">Batch printing options</p>
                    <p className="text-muted-foreground text-xs">Requested by 189 users</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-foreground">Password generator</p>
                    <p className="text-muted-foreground text-xs">Requested by 156 users</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process Card */}
            <Card>
              <CardHeader>
                <CardTitle>Our Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">1</div>
                    <span className="text-muted-foreground">We review all requests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">2</div>
                    <span className="text-muted-foreground">Popular ideas get prioritized</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">3</div>
                    <span className="text-muted-foreground">We update you on progress</span>
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

export default FeatureRequests;