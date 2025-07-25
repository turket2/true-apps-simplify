import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import AllApps from "./pages/AllApps";
import About from "./pages/About";
import InstallationGuide from "./pages/InstallationGuide";
import BugReports from "./pages/BugReports";
import FeatureRequests from "./pages/FeatureRequests";
import HelpCenter from "./pages/HelpCenter";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/all-apps" element={<AllApps />} />
          <Route path="/about" element={<About />} />
          <Route path="/installation-guide" element={<InstallationGuide />} />
          <Route path="/bug-reports" element={<BugReports />} />
          <Route path="/feature-requests" element={<FeatureRequests />} />
          <Route path="/help-center" element={<HelpCenter />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
