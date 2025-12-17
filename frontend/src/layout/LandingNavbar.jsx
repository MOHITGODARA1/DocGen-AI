import { useNavigate } from "react-router-dom";

function LandingNavbar() {
  const navigate = useNavigate();

  return (
    <header className="w-full absolute top-0 left-0 z-20">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* Logo */}
        <img
          src="/DocgenLogo.png"
          alt="DocGen AI Logo"
          className="h-10 w-auto cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Actions */}
        <div className="flex items-center gap-5">
          <button
            className="
              text-white text-sm font-medium
              transition-colors
            "
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button
            className="
              relative overflow-hidden
              px-6 py-1.5
              rounded-2xl
              text-sm font-medium
              text-black
              bg-white
              group
            "
            onClick={() => navigate("/signup")}
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
              Sign Up
            </span>
          </button>
        </div>

      </div>
    </header>
  );
}

export default LandingNavbar;
