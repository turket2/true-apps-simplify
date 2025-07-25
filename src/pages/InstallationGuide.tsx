import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Chrome, Download, Settings, Trash2, AlertCircle } from "lucide-react";

const InstallationGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Chrome className="w-12 h-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Installation Guide
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Step-by-step instructions to install and manage Chrome extensions safely and easily.
          </p>
        </div>

        {/* Installation Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Download className="w-8 h-8 text-primary" />
            How to Install Chrome Extensions
          </h2>
          
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  Open Chrome Web Store
                </CardTitle>
                <CardDescription>Navigate to the official Chrome Web Store</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Visit <code className="bg-muted px-2 py-1 rounded text-sm">chrome.google.com/webstore</code> in your Chrome browser, 
                  or search for the extension name directly.
                </p>
                <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-blue-800 dark:text-blue-200">Safety Tip</p>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        Only install extensions from the official Chrome Web Store to ensure security.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Find the Extension
                </CardTitle>
                <CardDescription>Search for True Apps extensions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Use the search bar to find our extensions like "Easy PDF Viewer", "Easy Login", or "Quick Print". 
                  Look for the True Apps developer name to ensure authenticity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  Install the Extension
                </CardTitle>
                <CardDescription>Add the extension to your browser</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Click the blue "Add to Chrome" button on the extension's page. Chrome will show a popup asking for permission to install.
                </p>
                <p className="text-muted-foreground">
                  Click "Add extension" in the confirmation dialog to complete the installation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  Access Your Extension
                </CardTitle>
                <CardDescription>Find and use your new extension</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The extension icon will appear in your Chrome toolbar. You can pin it for easy access by clicking 
                  the puzzle piece icon and then the pin icon next to the extension.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Removal Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Trash2 className="w-8 h-8 text-destructive" />
            How to Remove Chrome Extensions
          </h2>
          
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  Access Extensions Menu
                </CardTitle>
                <CardDescription>Open Chrome's extension management</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Right-click on the extension icon in your toolbar and select "Remove from Chrome", 
                  or go to <code className="bg-muted px-2 py-1 rounded text-sm">chrome://extensions/</code> in your address bar.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Remove the Extension
                </CardTitle>
                <CardDescription>Uninstall the extension completely</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Click the "Remove" button next to the extension you want to uninstall, then confirm by clicking "Remove" 
                  in the popup dialog. The extension will be immediately uninstalled.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Troubleshooting Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Settings className="w-8 h-8 text-primary" />
            Troubleshooting
          </h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Common Issues and Solutions</CardTitle>
              <CardDescription>Having trouble? Here are some common solutions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Extension not working?</h4>
                <p className="text-muted-foreground text-sm">
                  Try refreshing the page or restarting Chrome. Some extensions require a page reload to activate.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Can't find the extension icon?</h4>
                <p className="text-muted-foreground text-sm">
                  Click the puzzle piece icon in your toolbar and pin the extension for easy access.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Installation failed?</h4>
                <p className="text-muted-foreground text-sm">
                  Make sure you're using the latest version of Chrome and have sufficient storage space.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Need More Help?</h2>
          <p className="text-muted-foreground mb-6">
            If you're still having trouble, don't hesitate to reach out to our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Contact Support
            </Button>
            <Button variant="outline" size="lg">
              View All Extensions
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InstallationGuide;