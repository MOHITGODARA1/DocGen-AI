import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ===============================
   Typing Animation Hook
================================ */

function useTypingText(text, speed = 80, pause = 1200) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
      }, speed);
    } else if (!isDeleting && index === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index - 1));
        setIndex(index - 1);
      }, speed / 1.5);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, pause]);

  return displayed;
}

/* ===============================
   Animated Border Wrapper
================================ */

function AnimatedBorder({ children, glow = false }) {
  return (
    <div className="relative rounded-xl p-[1.5px] overflow-hidden">
      <div
        className={`absolute inset-0 animate-borderSpin ${
          glow ? "opacity-90 blur-md" : "opacity-70 blur-sm"
        }`}
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(34,197,94,1) 330deg, transparent 360deg)",
        }}
      />
      <div className="relative z-10 rounded-xl bg-[#0b0b0b]">
        {children}
      </div>
    </div>
  );
}

/* ===============================
   Inner Scan Animation
================================ */

function InnerScan() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-xl">
      <div className="absolute -top-full left-0 h-full w-full bg-linear-to-b from-transparent via-green-400/25 to-transparent animate-scan" />
    </div>
  );
}

/* ===============================
   Card Components
================================ */

function MockCard({ title }) {
  return (
    <AnimatedBorder>
      <div className="p-5 border border-white/10 rounded-xl">
        <p className="text-xs text-gray-400 mb-4">{title}</p>
        <div className="space-y-3">
          <div className="h-3 bg-white/10 rounded w-full" />
          <div className="h-3 bg-white/10 rounded w-5/6" />
          <div className="h-3 bg-white/10 rounded w-4/6" />
        </div>
      </div>
    </AnimatedBorder>
  );
}

function HighlightedCard({ title }) {
  return (
    <AnimatedBorder glow>
      <div className="p-5 border border-green-400/40 rounded-xl shadow-lg">
        <p className="text-xs text-green-400 mb-4">{title}</p>
        <div className="space-y-3">
          <div className="h-3 bg-green-400 rounded w-full" />
          <div className="h-3 bg-green-400/80 rounded w-5/6" />
          <div className="h-3 bg-green-400/60 rounded w-4/6" />
        </div>
      </div>
    </AnimatedBorder>
  );
}

/* ===============================
   Main Assistant Section
================================ */

function AssistantSection() {
  const typedText = useTypingText("Ask AI anything");

  return (
    <section className="relative w-full bg-black py-24 px-6 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-size-[80px_80px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-green-400 text-xs font-semibold tracking-widest mb-4">
            ASSISTANT
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Intelligent assistance for your users
          </h2>
          <p className="mt-4 text-gray-400 text-sm md:text-base">
            Turn every documentation visit into a guided conversation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <MockCard title="Quick Start Guide" />
            <MockCard title="MCP Server" />
            <MockCard title="Updates" />
          </motion.div>

          {/* Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <AnimatedBorder glow>
              <div className="relative p-6 border border-green-500/30 rounded-2xl shadow-xl overflow-hidden bg-[#0b0b0b]">
                <InnerScan />

                <div className="h-10 w-3/4 bg-green-400 rounded-md mb-6 animate-pulseSlow" />

                <div className="space-y-3">
                  <div className="h-3 bg-white/10 rounded w-full" />
                  <div className="h-3 bg-white/10 rounded w-5/6" />
                  <div className="h-3 bg-white/10 rounded w-4/6" />
                </div>

                {/* Typing Input */}
                <div className="mt-6 flex items-center justify-between bg-black/40 border border-white/10 rounded-lg px-4 py-3">
                  <span className="text-gray-400 text-sm flex items-center gap-1">
                    {typedText}
                    <span className="inline-block w-0.5 h-4 bg-green-400 animate-pulse" />
                  </span>

                  <div className="relative h-6 w-6">
                    <span className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-40" />
                    <span className="absolute inset-0 bg-green-400 rounded-full" />
                  </div>
                </div>
              </div>
            </AnimatedBorder>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 opacity-80"
          >
            <HighlightedCard title="API Reference" />
            <MockCard title="Insights" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default AssistantSection;
