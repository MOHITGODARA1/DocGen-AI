import { CreditCard, BookOpen } from "lucide-react";

function FinalCTASection() {
  return (
    <section className="relative w-full bg-black py-32 px-6 overflow-hidden">

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-black/90 to-black" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
          Make documentation your <br className="hidden md:block" />
          winning advantage
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Join the leaders of tomorrow to future proof your documentation today.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="px-6 py-2.5 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition">
            Get started for free
          </button>

          <button className="px-6 py-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition">
            Get a demo
          </button>
        </div>

        {/* Bottom Info Blocks */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 relative">

          {/* Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-white/10" />

          {/* Pricing */}
          <div className="text-center px-6">
            <div className="flex justify-center mb-4">
              <div className="h-9 w-9 rounded-md bg-green-400/20 flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-green-400" />
              </div>
            </div>

            <h3 className="text-white font-medium">
              Pricing on your terms
            </h3>

            <p className="mt-2 text-gray-400 text-sm">
              Pick the plan that works best for you
            </p>

            <button className="mt-4 text-green-400 text-sm hover:underline">
              Pricing details →
            </button>
          </div>

          {/* Start Building */}
          <div className="text-center px-6">
            <div className="flex justify-center mb-4">
              <div className="h-9 w-9 rounded-md bg-green-400/20 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-green-400" />
              </div>
            </div>

            <h3 className="text-white font-medium">
              Start building
            </h3>

            <p className="mt-2 text-gray-400 text-sm">
              Deploy your documentation in minutes
            </p>

            <button className="mt-4 text-green-400 text-sm hover:underline">
              Quickstart →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FinalCTASection;
