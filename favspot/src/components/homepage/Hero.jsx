import React, { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { hero } from "../../data/content";
import backgroundImg from "../../assets/background.png";
import backgroundImg2 from "../../assets/background2.png";
import backgroundImg3 from "../../assets/background3.png";

function Hero() {
  const backgrounds = useMemo(
    () => [backgroundImg, backgroundImg2, backgroundImg3].filter(Boolean),
    []
  );
  const [activeBgIndex, setActiveBgIndex] = useState(0);
  const bgUrl = backgrounds[activeBgIndex] ?? backgroundImg;

  const showPrevBackground = () => {
    setActiveBgIndex((current) =>
      backgrounds.length
        ? (current - 1 + backgrounds.length) % backgrounds.length
        : 0
    );
  };

  const showNextBackground = () => {
    setActiveBgIndex((current) =>
      backgrounds.length ? (current + 1) % backgrounds.length : 0
    );
  };

  const scrollToContent = () => {
    const destinationsSection = document.getElementById("destinations");
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollTo({ top: window.innerHeight, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (backgrounds.length <= 1) return;
    const interval = window.setInterval(showNextBackground, 9000);
    return () => window.clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backgrounds.length]);

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center text-center text-white"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={bgUrl}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          style={{
            backgroundImage: bgUrl ? `url(${bgUrl})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {hero.title}
        </h1>

        <p className="mt-5 text-md md:text-lg max-w-2xl text-white/90">
          {hero.subtitle}
        </p>

        {hero.ctaText && (
          <a
            href={hero.ctaLink}
            className="inline-block mt-8 px-6 py-3 bg-[#829442] hover:bg-[#6f8036] transition rounded-xl font-medium shadow-lg"
          >
            {hero.ctaText}
          </a>
        )}
      </div>

      <div className="absolute left-0 right-0 bottom-6 z-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="border-t border-white/40 pt-4 flex items-end justify-between">
            <button
              type="button"
              onClick={scrollToContent}
              aria-label="Scroll down"
              className="icon-scroll-button flex flex-col items-center gap-2"
            >
              <span className="icon-scroll" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">
                Scroll
              </span>
            </button>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={showPrevBackground}
                aria-label="Previous background"
                className="h-10 w-10 grid place-items-center rounded-full  text-white/90 hover:bg-white/10 transition"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={showNextBackground}
                aria-label="Next background"
                className="h-10 w-10 grid place-items-center rounded-full  text-white/90 hover:bg-white/10 transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
