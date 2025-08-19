import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UnsubscribeSuccess from "./pages/UnsubscribeSuccess";
import Unsubscribe from "./pages/Unsubscribe";
import { inject } from "@vercel/analytics"
const queryClient = new QueryClient();

const App = () => {
  const [enableCursor, setEnableCursor] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const hasHover = window.matchMedia("(hover: hover)").matches;
    setEnableCursor(hasFinePointer && hasHover && !prefersReducedMotion);
    
    // Initialize Vercel Analytics
    inject();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {enableCursor && <SmoothCursor />}
        <Toaster />

        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/unsubscribe" element={<Unsubscribe />} />
            <Route path="/unsubscribe-success" element={<UnsubscribeSuccess />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
