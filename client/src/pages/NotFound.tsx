/**
 * Editorial 404 — keeps the programme aesthetic
 */
import { Link } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 container-editorial py-24 md:py-40">
        <div className="max-w-2xl">
          <div className="roman-label mb-5">Programme Note</div>
          <h1 className="font-display text-7xl md:text-9xl leading-none mb-6">
            404
          </h1>
          <p className="font-display-italic text-2xl md:text-3xl text-muted-foreground mb-10 leading-snug">
            The page you sought has slipped behind the curtain.
          </p>
          <Link href="/">
            <span className="caption link-editorial">Return Home</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
