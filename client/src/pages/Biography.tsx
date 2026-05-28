/**
 * Editorial Performance Programme — Biography page
 * - Programme-style cover with title + subtitle
 * - Two-column editorial spread: biography text + portrait
 * - Credits/positions as elegant typography list
 * - Mike Nava artist section with image
 */
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";
import {
  IMAGES,
  BIOGRAPHY_PARAGRAPHS,
  BIOGRAPHY_CREDITS,
  BIOGRAPHY_EXTRA,
} from "@/lib/content";

export default function Biography() {
  useReveal();

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1">
        {/* ============ COVER ============ */}
        <section className="border-b border-border">
          <div className="container-editorial py-12 md:py-20">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-8">
                <div className="caption-sm mb-6 reveal-left">Programme · Biography</div>
                <h1 className="font-display text-6xl md:text-8xl lg:text-[8.5rem] leading-[0.92] tracking-tight reveal-left stagger-1">
                  About
                </h1>
                <p className="mt-8 md:mt-10 font-display-italic text-2xl md:text-3xl text-muted-foreground max-w-2xl leading-snug reveal-left stagger-3">
                  The story of Raiford Rogers and the evolution of a modern
                  ballet company.
                </p>
              </div>
              <div className="hidden md:flex md:col-span-4 items-end justify-end reveal-right stagger-2">
                <div className="text-right">
                  <div className="caption-sm">Los Angeles</div>
                  <div className="caption-sm mt-2 text-foreground/50">
                    Est. 2002
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ I. CHOREOGRAPHER & ARTISTIC DIRECTOR ============ */}
        <section className="py-12 md:py-20">
          <div className="container-editorial">
            <div className="grid grid-cols-12 gap-8 md:gap-12 lg:gap-16">
              {/* Left — text */}
              <div className="col-span-12 md:col-span-7 lg:col-span-7">
                <div className="roman-label mb-5 reveal-left">
                  I. Choreographer & Artistic Director
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-tight mb-10 reveal-left stagger-1">
                  Raiford Rogers
                </h2>

                <div className="space-y-6 text-[16.5px] md:text-[17px] leading-[1.75] text-foreground/85 max-w-prose">
                  {BIOGRAPHY_PARAGRAPHS.map((p, i) => (
                    <p
                      key={i}
                      className="reveal"
                      style={{ transitionDelay: `${Math.min(i, 4) * 60}ms` }}
                    >
                      {p}
                    </p>
                  ))}
                </div>

                {/* Credits — elegant list */}
                <div className="mt-12 pt-10 border-t border-border">
                  <div className="caption-sm mb-6">Credits & Affiliations</div>
                  <ul className="space-y-4">
                    {BIOGRAPHY_CREDITS.map((credit, i) => {
                      const parts = credit.split(" | ");
                      return (
                        <li
                          key={i}
                          className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-start"
                        >
                          {parts.length > 1 ? (
                            <>
                              <span className="md:col-span-3 caption text-foreground/70">
                                {parts[0]}
                              </span>
                              <span className="md:col-span-9 text-[15.5px] leading-relaxed text-foreground/85">
                                {parts.slice(1).join(" — ")}
                              </span>
                            </>
                          ) : (
                            <span className="md:col-span-12 text-[15.5px] leading-relaxed text-foreground/85 font-display-italic">
                              {credit}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Extra paragraphs */}
                <div className="mt-12 pt-10 border-t border-border space-y-6 text-[16.5px] leading-[1.75] text-foreground/85 max-w-prose">
                  {BIOGRAPHY_EXTRA.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Right — portrait, sticky */}
              <div className="col-span-12 md:col-span-5 lg:col-span-5 reveal-image stagger-2">
                <div className="md:sticky md:top-28">
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img
                      src={IMAGES.raifordPortrait}
                      alt="Raiford Rogers Portrait"
                      className="w-full h-full object-cover img-editorial"
                    />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <div className="font-display-italic text-lg">
                      Raiford Rogers
                    </div>
                    <div className="caption-sm">Artistic Director</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ II. ARTIST MIKE NAVA ============ */}
        <section className="py-12 md:py-20 border-t border-border bg-muted/40">
          <div className="container-editorial">
            <div className="grid grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Image first on desktop */}
              <div className="col-span-12 md:col-span-6 reveal-left order-2 md:order-1">
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={IMAGES.mikeNava}
                    alt="Artist Mike Nava working on colorful artwork"
                    className="w-full h-full object-cover img-editorial"
                  />
                </div>
                <div className="mt-4 caption">
                  Mike Nava — Studio Portrait
                </div>
              </div>

              <div className="col-span-12 md:col-span-6 order-1 md:order-2">
                <div className="roman-label mb-5 reveal-right">II. Collaborating Artist</div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-tight mb-8 reveal-right stagger-1">
                  Mike Nava
                </h2>
                <p className="text-[16.5px] md:text-[17px] leading-[1.75] text-foreground/85 max-w-prose reveal-right stagger-3">
                  Mike Nava is the painter behind the vibrant artwork and
                  painting progressions used in many of Raiford Rogers' ballet
                  productions. His large-scale projections create a multi-sensory
                  environment where dance, music, and art converge — most
                  recently for{" "}
                  <span className="font-display-italic">Islands in the Sea</span>{" "}
                  and{" "}
                  <span className="font-display-italic">Glassworks</span>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
