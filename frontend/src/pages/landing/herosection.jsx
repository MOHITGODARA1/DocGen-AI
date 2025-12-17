function HeroSection() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center text-center px-4 pt-32 pb-24">

      {/* Badge */}
      <div className="mb-6 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full">
        <span className="text-xs font-semibold text-green-400">NEW</span>
        <span className="text-sm text-gray-200">
          AI-powered code understanding & optimization
        </span>
      </div>

      {/* Heading */}
      <h1 className="max-w-4xl text-4xl md:text-6xl font-semibold text-white leading-tight">
        The Intelligent <br />
        Code Analysis Platform
      </h1>

      {/* Subheading */}
      <p className="mt-6 max-w-2xl text-gray-300 text-sm md:text-sm">
        OptiCode helps developers understand, analyze, and optimize codebases
        using AI-driven insights, documentation, and performance suggestions.
      </p>

      {/* CTA */}
      <div className="mt-10 flex items-center gap-4">
        <button
          className="
            relative overflow-hidden
            px-7 py-2
            rounded-3xl
            bg-white
            text-black
            font-medium
            group
            cursor-pointer
          "
        >
          <span
            className="
              absolute inset-0
              bg-green-500
              transform scale-x-0
              origin-left
              transition-transform duration-300 ease-out
              group-hover:scale-x-100
            "
          ></span>

          <span className="relative z-10">
            Get Started
          </span>
        </button>

        <button
          className="
            px-7 py-2
            rounded-3xl
            border border-white/20
            text-white
            hover:bg-white/10
            transition
            cursor-pointer
          "
        >
          View Demo
        </button>
      </div>

      {/* Dashboard Image (SCROLLS NATURALLY) */}
      <div className="relative mt-24 w-full max-w-6xl">

        {/* Precise fade mask */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,0) 0%,
                rgba(0,0,0,0) 70%,
                rgba(0,0,0,0.6) 85%,
                rgba(0,0,0,1) 90%,
                rgba(0,0,0,1) 100%
              )
            `,
          }}
        />

        <img
          src="./dashboard-preview.png"
          alt="OptiCode Dashboard Preview"
          className="
            w-full
            rounded-xl
            border border-white/10
            shadow-2xl
          "
        />
      </div>

    </section>
  );
}

export default HeroSection;
