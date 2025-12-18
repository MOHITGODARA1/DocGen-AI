import { Search, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

function Searchbar() {
  const [value, setValue] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  const texts = [
    "Paste a GitHub repository URL...",
    "Search a project to analyze...",
    "Understand any codebase instantly...",
  ];

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    function typeEffect() {
      const currentText = texts[textIndex];

      if (!isDeleting) {
        // Typing
        setPlaceholder(currentText.slice(0, charIndex + 1));
        charIndex++;

        if (charIndex === currentText.length) {
          timeoutId = setTimeout(() => (isDeleting = true), 1500);
        }
      } else {
        // Deleting
        setPlaceholder(currentText.slice(0, charIndex - 1));
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
        }
      }

      timeoutId = setTimeout(typeEffect, isDeleting ? 40 : 70);
    }

    if (!value) {
      typeEffect();
    }

    return () => clearTimeout(timeoutId);
  }, [value]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-3 px-4">

      <div className="flex items-center gap-4">

        {/* Input */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            className="
              w-full pl-11 pr-4 py-3
              bg-black rounded-xl
              text-white text-sm
              placeholder-gray-300
              border border-white/10

              shadow-[0_10px_30px_rgba(0,0,0,0.7)]
              ring-1 ring-green-500/20

              focus:outline-none
              focus:border-green-400
              focus:ring-green-400/40
              focus:shadow-[0_12px_36px_rgba(34,197,94,0.25)]

              transition-all
            "
          />
        </div>

        {/* Button */}
        <button
          disabled={!value}
          className="
            flex items-center gap-2
            px-6 py-3 rounded-xl
            text-sm font-medium
            bg-white text-black
            shadow-[0_8px_24px_rgba(0,0,0,0.6)]
            hover:bg-gray-100
            disabled:opacity-50
            disabled:cursor-not-allowed
            transition
            whitespace-nowrap
          "
        >
          Analyze
          <ArrowRight size={16} />
        </button>

      </div>

      <p className="mt-3 text-xs text-gray-500 text-center">
        Supports public GitHub repositories and local project names
      </p>

    </div>
  );
}

export default Searchbar;
