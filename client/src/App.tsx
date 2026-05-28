/**
 * Raiford Rogers Modern Ballet
 * Design: Editorial Performance Programme — warm parchment, Cormorant Garamond + Inter Tight
 * Switchable light/dark theme matches the existing site's theme toggle behavior.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Biography from "./pages/Biography";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/biography"} component={Biography} />
      <Route path={"/about"} component={Biography} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
