/**
 * Editorial Performance Programme — Navigation
 * - Hairline border below, generous whitespace
 * - Cormorant Garamond wordmark, Inter Tight small-caps nav links
 * - Subtle scroll-aware shadow
 */
import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Nav() {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location === "/";
  const isAbout = location === "/biography";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/92 backdrop-blur-md border-b border-border"
          : "bg-background/70 backdrop-blur-sm border-b border-transparent"
      }`}
      style={{ position: "sticky" }}
    >
      <div className="container-editorial">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Wordmark */}
          <Link href="/">
            <span className="font-display text-xl md:text-[1.6rem] tracking-tight leading-none">
              Raiford Rogers
              <span className="hidden sm:inline font-display-italic text-muted-foreground">
                {" "}
                Modern Ballet
              </span>
            </span>
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-7 md:gap-10">
            <Link href="/">
              <span
                className={`caption link-editorial ${
                  isHome ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                } transition-colors duration-300`}
              >
                Home
              </span>
            </Link>
            <Link href="/biography">
              <span
                className={`caption link-editorial ${
                  isAbout ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                } transition-colors duration-300`}
              >
                About
              </span>
            </Link>

            {toggleTheme && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {theme === "light" ? (
                  <Moon className="h-4 w-4" strokeWidth={1.5} />
                ) : (
                  <Sun className="h-4 w-4" strokeWidth={1.5} />
                )}
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
