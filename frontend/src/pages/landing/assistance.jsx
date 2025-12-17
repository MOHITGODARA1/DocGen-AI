/* ===============================
   Animated Border Wrapper
================================ */

function AnimatedBorder({ children, glow = false }) {
  return (
    <div className="relative rounded-xl p-0.5 overflow-hidden">
      
      {/* Rotating border */}
      <div
        className={`
          absolute inset-0
          animate-borderSpin
          ${glow ? "opacity-90 blur-md" : "opacity-70 blur-sm"}
        `}
        style={{
          background: `
            conic-gradient(
              from 0deg,
              transparent 0deg,
              transparent 300deg,
              rgba(34,197,94,1) 330deg,
              transparent 360deg
            )
          `,
        }}
      />

      {/* Card content */}
      <div className="relative z-10 rounded-xl bg-[#0b0b0b]">
        {children}
      </div>
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
  return (
    <section className="relative w-full bg-black py-24 px-6 overflow-hidden">

      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]
        bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),
            linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)]
        bg-[size:80px_80px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-green-400 text-xs font-semibold tracking-widest mb-4">
            ASSISTANT
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Intelligent assistance for your users
          </h2>

          <p className="mt-4 text-gray-400 text-sm md:text-base">
            Turn every documentation visit into a guided conversation.
            Your AI assistant understands context and delivers what users need.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

          {/* Left */}
          <div className="space-y-6 opacity-40">
            <MockCard title="Quick Start Guide" />
            <MockCard title="MCP Server" />
            <MockCard title="Updates" />
          </div>

          {/* Center (Main Assistant Card) */}
          <AnimatedBorder glow>
            <div className="p-6 border border-green-500/30 rounded-2xl shadow-xl">
              <div className="h-10 w-3/4 bg-green-400 rounded-md mb-6" />
              <div className="space-y-3">
                <div className="h-3 bg-white/10 rounded w-full" />
                <div className="h-3 bg-white/10 rounded w-5/6" />
                <div className="h-3 bg-white/10 rounded w-4/6" />
              </div>

              <div className="mt-6 flex items-center justify-between bg-black/40 border border-white/10 rounded-lg px-4 py-3">
                <span className="text-gray-400 text-sm">
                  Ask AI anything…
                </span>
                <div className="h-6 w-6 bg-green-400 rounded-full" />
              </div>
            </div>
          </AnimatedBorder>

          {/* Right */}
          <div className="space-y-6 opacity-60">
            <HighlightedCard title="API Reference" />
            <MockCard title="Insights" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default AssistantSection;
