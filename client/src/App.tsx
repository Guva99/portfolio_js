import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/ui/loading-screen";
import ScrollToTop from "@/components/scroll-to-top";
import Technologies from "@/pages/technologies";
import ProjectHealthcare from "@/pages/project-healthcare";
import ProjectTravel from "@/pages/project-travel";
import ProjectSmartHome from "@/pages/project-smarthome";
import ProjectWise from "@/pages/project-wise";
import ProjectApeiron from "@/pages/project-apeiron";
import ProjectMedia from "@/pages/project-media";
import ProjectTrueForTwo from "@/pages/project-truefortwo";
import Project2Sky from "@/pages/project-2sky";
import Experience from "@/pages/experience";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/technologies" component={Technologies} />
      <Route path="/experience" component={Experience} />
      <Route path="/projects/healthcare" component={ProjectHealthcare} />
      <Route path="/projects/travel" component={ProjectTravel} />
      <Route path="/projects/smarthome" component={ProjectSmartHome} />
      <Route path="/projects/wise" component={ProjectWise} />
      <Route path="/projects/apeiron" component={ProjectApeiron} />
      <Route path="/projects/media" component={ProjectMedia} />
      <Route path="/projects/truefortwo" component={ProjectTrueForTwo} />
      <Route path="/projects/2sky" component={Project2Sky} />
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll during loading
    document.body.style.overflow = "hidden";

    // Detect mobile device (crude check, but effective for this purpose)
    const isMobile = window.innerWidth <= 768;
    const loadTime = isMobile ? 800 : 2000; // Shorter load time on mobile for better UX perception

    // Artificial delay to ensure the loading screen is visible and assets have time to load
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    }, loadTime);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen key="loader" />}
        </AnimatePresence>

        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
