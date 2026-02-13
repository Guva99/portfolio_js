import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/scroll-to-top";
import Technologies from "@/pages/technologies";
import ProjectHealthcare from "@/pages/project-healthcare";
import ProjectTravel from "@/pages/project-travel";
import ProjectSmartHome from "@/pages/project-smarthome";
import ProjectWise from "@/pages/project-wise";
import ProjectApeiron from "@/pages/project-apeiron";
import ProjectMedia from "@/pages/project-media";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/technologies" component={Technologies} />
      <Route path="/projects/healthcare" component={ProjectHealthcare} />
      <Route path="/projects/travel" component={ProjectTravel} />
      <Route path="/projects/smarthome" component={ProjectSmartHome} />
      <Route path="/projects/wise" component={ProjectWise} />
      <Route path="/projects/apeiron" component={ProjectApeiron} />
      <Route path="/projects/media" component={ProjectMedia} />
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
