// Mark this file as a Client Component
"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

// Create a singleton QueryClient outside the component to persist across renders
const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {children} {/* Renders the rest of the application */}
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
