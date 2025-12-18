function ShowAnalyze() {
  return (
    <div className="w-full">

      {/* Grid Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

        {/* LEFT COLUMN (2 cards stacked) */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Card 1 */}
          <div className="bg-black border border-white/15 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-green-500 text-lg font-serif">
                Repository Overview
              </h3>
              <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-400">
                Overview
              </span>
            </div>

            <p className="mt-3 text-gray-300 text-sm max-w-xl">
              Get a comprehensive analysis of your codebase including tech stack,
              dependencies, and key metrics.
            </p>

            <div className="mt-6 flex items-center gap-6 text-sm text-gray-300">
              <span>📁 Files analyzed</span>
              <span>🌿 Branch insights</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-black border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-green-500 text-lg font-serif">
                File Structure & Insights
              </h3>
              <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-400">
                Structure
              </span>
            </div>

            <p className="mt-3 text-gray-300 text-sm max-w-xl">
              Visualize your project architecture with interactive file trees
              and dependency graphs.
            </p>

            <div className="mt-6 flex items-center gap-6 text-sm text-gray-300">
              <span>⌘ Code quality</span>
              <span>🧩 Module analysis</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (auto-adjust height) */}
        <div className="bg-black border border-white/10 rounded-2xl p-6 flex flex-col justify-between">

          {/* Top */}
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-green-500 text-lg font-serif">
                Architecture Summary
              </h3>
              <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-400">
                Architecture
              </span>
            </div>

            <p className="mt-3 text-gray-300 text-sm">
              Deep dive into your application's architecture with AI-powered
              recommendations for improvements.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>• Application layer separation and responsibility mapping</li>
              <li>• Data flow between services, APIs, and persistence layers</li>
              <li>• Dependency direction and coupling analysis</li>
            </ul>
          </div>

          <div className="mt-6 space-y-3">
            
          </div>

        </div>

      </div>
    </div>
  );
}

export default ShowAnalyze;
