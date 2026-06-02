import contourBg from "../../assets/contourbg.png";

function Welcome() {
  return (
    <section
      className="relative min-h-screen flex items-center py-20 border-y border-black/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(255,255,255,0.35)]"
      style={{
        backgroundImage: `url(${contourBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-white/85" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.28em] text-[#223441]">
          WELCOME TO ZAZU ADVENTURES
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#161b1d]">
          Your gateway to unforgettable African experiences
        </h2>
        <p className="mt-5 max-w-3xl mx-auto text-sm md:text-base leading-7 text-[#3c4345]">
          From airport transfers to guided tours and multi-day safaris, we plan
          and deliver seamless journeys across Zimbabwe, Zambia, Botswana, and
          beyond — with local insight, trusted partners, and a warm personal
          touch.
        </p>
      </div>
    </section>
  );
}

export default Welcome;
