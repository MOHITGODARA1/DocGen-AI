function LeftNavbar({ onManageAccount }) {
  const searchHistory = [
    "Analyze React Project",
    "Node API Structure",
    "MongoDB Schema Review",
    "Tailwind Optimization",
    "Authentication Flow",
  ];

  return (
    <aside
      className="
        w-64
        bg-black
        border-r border-white/10
        h-[calc(100vh-4rem)]
        flex flex-col
      "
    >
      {/* Top */}
      <div className="px-5 py-4 border-b border-white/10">
        <h2 className="text-sm font-semibold text-white">
          Search History
        </h2>
      </div>

      {/* History */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-2">
        {searchHistory.map((item, index) => (
          <button
            key={index}
            className="
              w-full text-left
              px-3 py-2
              rounded-md
              text-sm
              text-gray-400
              hover:text-white
              hover:bg-white/5
              transition
            "
          >
            {item}
          </button>
        ))}
      </div>

      {/* Manage Account */}
      <div className="px-4 py-4 border-t border-white/10">
        <button
          onClick={onManageAccount}
          className="
            w-full
            px-4 py-2
            rounded-md
            text-sm font-medium
            text-white
            bg-white/10
            hover:bg-white/20
            transition
          "
        >
          Manage Account
        </button>
      </div>
    </aside>
  );
}

export default LeftNavbar;
