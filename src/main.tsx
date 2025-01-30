import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./context/Auth.context.tsx";
import Router from "./router/router.tsx";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Router />
        </SkeletonTheme>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
