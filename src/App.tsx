import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import HowItWorks from "./pages/HowItWorks";
import WhyThisWorks from "./pages/WhyThisWorks";
import ContactUs from "./pages/ContactUs";
import ExpertRegister from "./pages/ExpertRegister";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/why-this-works" element={<WhyThisWorks />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/register" element={<ExpertRegister />} />
            <Route path="/experts" element={<Index />} />
            <Route path="/login" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
