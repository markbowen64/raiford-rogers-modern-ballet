/**
 * Editorial Performance Programme — Home page
 * - Cinematic hero with editorial title card
 * - Asymmetric photo strip with side-margin caption (Photos by Steve Cohen)
 * - Two-column About with image carousel (Photos by A. Trelease)
 * - Press section with three editorial quote cards, roman-numeral label
 * - Hairline rules with ornamental motif between sections
 */
import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronLeft, ChevronRight, Youtube } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";
import {
  IMAGES,
  PRESS_QUOTES,
  CAROUSEL_IMAGES,
  PHOTO_STRIP,
  LINKS,
} from "@/lib/content";

export default function Home() {
  useReveal();
  const [carouselIndex, setCarouselIndex] = useState(0);

  const next = useCallback(() => {
    setCarouselIndex((i) => (i + 1) % CAROUSEL_IMAGES.length);
  }, []);
  const prev = useCallback(() => {
    setCarouselIndex((i) => (i - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  }, []);

  // Auto-advance carousel slowly (8s)
  useEffect(() => {
    const t = setInterval(next, 8000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1">
        {/* ============ HERO ============ */}
        <section className="relative">
          <div className="container-editorial pt-8 md:pt-12">
            {/* Programme heading */}
            <div className="flex items-start justify-between gap-6 mb-6 md:mb-10">
              <div>
                <div className="caption-sm">Raiford Rogers Modern Ballet</div>
                <div className="caption-sm mt-1 text-foreground/50">
                  Programme · Los Angeles
                </div>
              </div>
              <div className="caption-sm text-right">
                Est. <span className="font-display-italic normal-case tracking-normal text-sm">2002</span>
              </div>
            </div>

            {/* Hero image with editorial title overlay */}
            <div className="relative reveal-image">
              <div className="relative overflow-hidden bg-muted aspect-[16/10] md:aspect-[16/9]">
                <img
                  src={IMAGES.heroDancer}
                  alt="Raiford Rogers Modern Ballet dancer performing an elegant arabesque pose against vibrant yellow-green backdrop"
                  className="w-full h-full object-cover img-editorial"
                />
                {/* Title card — bottom left */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 bg-gradient-to-t from-black/55 via-black/10 to-transparent">
                  <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-white max-w-4xl">
                    Raiford Rogers
                    <span className="block">Modern Ballet</span>
                  </h1>
                </div>
              </div>

              {/* Photo credit + featured links — caption left, Luckman logo centered, Watch Us right; all bottom-aligned */}
              <div className="mt-4 md:mt-6 grid grid-cols-3 gap-4 md:gap-8 items-end">
                <div className="caption self-end">
                  Photograph — A. Trelease
                </div>

                <div className="flex justify-center self-end">
                  <a
                    href={LINKS.luckman}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-col items-center gap-2 group"
                    aria-label="The Luckman Fine Arts Complex — Box Office & Tickets"
                  >
                    <img
                      src={IMAGES.luckmanLogo}
                      alt="The Luckman Fine Arts Complex at Cal State LA"
                      className="h-9 md:h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity block"
                    />
                    <span className="caption-sm link-editorial whitespace-nowrap">
                      Box Office · Tickets
                    </span>
                  </a>
                </div>

                <div className="flex justify-end self-end">
                  <a
                    href={LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 group"
                  >
                    <Youtube
                      className="h-5 w-5 transition-colors"
                      style={{ color: "#FF0033" }}
                      fill="#FF0033"
                      stroke="#ffffff"
                      strokeWidth={1.6}
                    />
                    <span className="caption-sm link-editorial">Watch Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PHOTO STRIP — Steve Cohen ============ */}
        <section className="mt-12 md:mt-16">
          <div className="container-editorial">
            <div className="rule-ornament mb-8 md:mb-10" />

            <div className="grid grid-cols-12 gap-3 md:gap-4">
              {/* Asymmetric: staggered heights echo a corps formation */}
              <div className="col-span-12 md:col-span-4 reveal-image stagger-1">
                <div className="aspect-[3/4] overflow-hidden bg-muted md:mt-8">
                  <img
                    src={PHOTO_STRIP[0].src}
                    alt={PHOTO_STRIP[0].alt}
                    className="w-full h-full object-cover img-editorial"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 reveal-image stagger-3">
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={PHOTO_STRIP[1].src}
                    alt={PHOTO_STRIP[1].alt}
                    className="w-full h-full object-cover img-editorial"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 reveal-image stagger-5">
                <div className="aspect-[3/4] overflow-hidden bg-muted md:mt-16">
                  <img
                    src={PHOTO_STRIP[2].src}
                    alt={PHOTO_STRIP[2].alt}
                    className="w-full h-full object-cover img-editorial"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 caption text-center reveal stagger-6">Photographs — Steve Cohen</div>
          </div>
        </section>

        {/* ============ I. ABOUT ============ */}
        <section className="mt-14 md:mt-20">
          <div className="container-editorial">
            <div className="rule-ornament mb-8 md:mb-12" />

            <div className="grid grid-cols-12 gap-8 md:gap-12 lg:gap-20 items-start">
              {/* Left — heading + text */}
              <div className="col-span-12 md:col-span-5">
                <div className="roman-label mb-5 reveal-left">I. About the Company</div>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-8 reveal-left stagger-1">
                  About
                </h2>

                <p className="text-lg md:text-[19px] leading-relaxed text-foreground/85 max-w-md reveal-left stagger-3">
                  Founded with a vision to push the boundaries of ballet while
                  honoring its classical roots, Raiford Rogers Modern Ballet has
                  established itself as a pioneering force in contemporary dance.
                </p>

                <Link href="/biography">
                  <span className="mt-10 inline-flex items-center gap-2 group cursor-pointer reveal-left stagger-5">
                    <span className="caption link-editorial group-hover:text-primary transition-colors">
                      Read Our Story
                    </span>
                    <ArrowRight
                      className="h-3.5 w-3.5 text-primary transition-transform duration-400 group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </span>
                </Link>
              </div>

              {/* Right — carousel */}
              <div className="col-span-12 md:col-span-7 reveal-image stagger-2">
                <div className="relative">
                  <div className="relative overflow-hidden bg-muted aspect-[4/5]">
                    {CAROUSEL_IMAGES.map((img, i) => (
                      <img
                        key={img.src}
                        src={img.src}
                        alt={img.alt}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                          i === carouselIndex ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ transitionTimingFunction: "var(--ease-editorial)" }}
                      />
                    ))}
                  </div>

                  {/* Carousel controls */}
                  <div className="mt-5 flex items-center justify-between">
                    <div className="caption">
                      {String(carouselIndex + 1).padStart(2, "0")}
                      <span className="text-foreground/30 mx-1.5">/</span>
                      {String(CAROUSEL_IMAGES.length).padStart(2, "0")}
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={prev}
                        aria-label="Previous slide"
                        className="h-9 w-9 flex items-center justify-center border border-border hover:border-foreground transition-colors"
                      >
                        <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
                      </button>
                      <button
                        onClick={next}
                        aria-label="Next slide"
                        className="h-9 w-9 flex items-center justify-center border border-border hover:border-foreground transition-colors"
                      >
                        <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-3 caption">Photographs — A. Trelease</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ II. PRESS ============ */}
                <section className="mt-14 md:mt-20">
          <div className="container-editorial">
            <div className="rule-ornament mb-8 md:mb-12" />
            <div className="grid grid-cols-12 gap-8 md:gap-12 mb-10 md:mb-14">
              <div className="col-span-12 md:col-span-4">
                <div className="roman-label mb-5 reveal-left">II. Press</div>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] reveal-left stagger-1">
                  Press
                </h2>
              </div>
              <div className="col-span-12 md:col-span-7 md:col-start-6 reveal-right stagger-2">
                <p className="text-base md:text-[17px] leading-relaxed text-muted-foreground max-w-lg md:mt-6">
                  Selected critical writings on the company's repertoire and
                  performances across nearly four decades of original work.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {PRESS_QUOTES.map((q, i) => (
                <article
                  key={i}
                  className="press-card reveal flex flex-col"
                  style={{ transitionDelay: `${i * 140}ms` }}
                >
                  {/* Corner ornaments */}
                  <span className="press-card__corner press-card__corner--tl" aria-hidden />
                  <span className="press-card__corner press-card__corner--tr" aria-hidden />
                  <span className="press-card__corner press-card__corner--bl" aria-hidden />
                  <span className="press-card__corner press-card__corner--br" aria-hidden />

                  <div className="flex items-center justify-between mb-5">
                    <div className="caption-sm text-primary">№ 0{i + 1}</div>
                    <div className="h-px flex-1 ml-4 bg-border press-card__rule" />
                  </div>
                  <div className="font-display-italic text-primary text-4xl leading-none mb-4 press-card__quote-mark">
                    “
                  </div>
                  <blockquote className="font-display text-[1.3rem] md:text-[1.4rem] leading-[1.35] text-foreground/90 relative z-10">
                    {q.quote}
                  </blockquote>
                  <div className="mt-auto pt-8 relative z-10">
                    <div className="h-px w-10 bg-foreground/30 mb-3 press-card__byline-rule" />
                    <cite className="caption not-italic">— {q.source}</cite>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
