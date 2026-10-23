import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MotionConfig } from "framer-motion";
import ScrollToTop from "@/components/scroll-to-top";
import { DocumentTitle } from "@/components/document-title";
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
import { Footer } from "@/components/ui/footer";

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
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MotionConfig reducedMotion="user">
          <ScrollToTop />
          <DocumentTitle />
          <Toaster />
          <Router />
          <Footer />
        </MotionConfig>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
