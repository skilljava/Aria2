import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Blog from "@/pages/Blog";
import ServerStatus from "@/pages/ServerStatus";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/:type" component={Services} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={Blog} />
      <Route path="/status" component={ServerStatus} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className={`min-h-screen flex flex-col ${isDark ? "dark" : ""}`}>
          <div className="animated-grid-bg">
            <div className="grid-orb grid-orb-1" />
            <div className="grid-orb grid-orb-2" />
            <div className="grid-orb grid-orb-3" />
          </div>
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          <main className="flex-1 relative z-10">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
