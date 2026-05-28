/**
 * Editorial Performance Programme — Footer
 * - Three-column layout: company essence, quick links, contact
 * - Hairline rules above, small caps section labels
 * - Quiet, programme-back-cover feel
 */
import { Link } from "wouter";
import { LINKS } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-20 md:mt-32 border-t border-border bg-background relative z-10">
      <div className="container-editorial py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {/* Company essence — left, wider column */}
          <div className="md:col-span-5">
            <h3 className="font-display text-2xl md:text-[1.75rem] leading-tight">
              Raiford Rogers
              <span className="block text-muted-foreground">
                Modern Ballet
              </span>
            </h3>
            <p className="mt-5 text-sm md:text-[15px] leading-relaxed text-muted-foreground max-w-sm">
              Dedicated to creating and performing original contemporary ballet works
              at the Luckman Fine Arts Complex in Los Angeles.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <div className="caption-sm mb-5">Quick Links</div>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <span className="text-[15px] link-editorial">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/biography">
                  <span className="text-[15px] link-editorial">About</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <div className="caption-sm mb-5">Connect</div>
            <ul className="space-y-3">
              <li>
                <a
                  href={LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] link-editorial"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${LINKS.email}`}
                  className="text-[15px] link-editorial break-all"
                >
                  {LINKS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Hairline rule with ornament */}
        <div className="mt-14 md:mt-20 rule-ornament" />

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="caption-sm">
            © {new Date().getFullYear()} Raiford Rogers Modern Ballet
          </p>
          <p className="caption-sm">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
