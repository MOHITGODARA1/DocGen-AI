import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center px-6">

      {/* Main Container */}
      <div className="w-full max-w-6xl h-150 grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">

        {/* LEFT – Welcome */}
        <div className="relative hidden md:flex flex-col justify-center px-10 bg-black">

          <div className="absolute -top-32 -left-32 h-80 w-80 bg-green-500/20 blur-[120px]" />

          <div className="relative z-10">
            <h2 className="text-4xl font-semibold text-white leading-tight">
              Welcome to docGen AI
            </h2>

            <p className="mt-4 text-gray-400 text-sm max-w-sm">
              Generate intelligent documentation, understand codebases,
              and accelerate development with AI-powered insights.
            </p>

            <div className="mt-8 space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                AI-powered documentation
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Smart code insights
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Faster onboarding
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT – Signup */}
        <div className="flex flex-col justify-center px-8 md:px-10">

          <h3 className="text-2xl font-semibold text-white">
            Create account
          </h3>
          <p className="mt-1 text-sm text-gray-400">
            Start using DocGen AI today
          </p>

          {/* Google */}
          <button
            className="
              mt-5 w-full flex items-center justify-center gap-3
              py-2 rounded-xl
              border border-white/10
              text-white text-sm
              hover:bg-white/10 transition
            "
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5 w-5"
            />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-gray-500">OR</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Form */}
          <form className="space-y-4">

            <input
              type="text"
              placeholder="Full name"
              className="
                w-full px-4 py-2 rounded-xl
                bg-black border border-white/10
                text-white text-sm
                placeholder-gray-500
                focus:outline-none focus:border-green-400
              "
            />

            <input
              type="email"
              placeholder="Email address"
              className="
                w-full px-4 py-2 rounded-xl
                bg-black border border-white/10
                text-white text-sm
                placeholder-gray-500
                focus:outline-none focus:border-green-400
              "
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="
                  w-full px-4 py-2 rounded-xl
                  bg-black border border-white/10
                  text-white text-sm
                  placeholder-gray-500
                  focus:outline-none focus:border-green-400
                "
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            {/* Confirm */}
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm password"
                className="
                  w-full px-4 py-2 rounded-xl
                  bg-black border border-white/10
                  text-white text-sm
                  placeholder-gray-500
                  focus:outline-none focus:border-green-400
                "
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            <button
              className="
                w-full mt-2 py-2.5 rounded-xl
                bg-white text-black font-medium
                hover:bg-gray-100 transition
              "
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <p className="mt-4 text-sm text-gray-400">
            Already have an account?{" "}
            <span
              className="text-green-400 cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
