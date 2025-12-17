import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2 } from "lucide-react";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      // navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center px-4">

      {/* Main Card */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

        {/* LEFT – Welcome */}
        <div className="relative hidden md:flex flex-col justify-center p-10 bg-black">

          <div className="absolute -top-32 -left-32 h-96 w-96 bg-green-500/20 blur-[120px]" />

          <div className="relative z-10">
            <h2 className="text-4xl font-semibold text-white leading-tight">
              Welcome Back!
            </h2>
            <p className="mt-3 mb-10 text-gray-400 text-sm max-w-sm">
              Generate intelligent documentation, understand codebases,
              and accelerate development with AI-powered insights.
            </p>
          </div>

          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              AI-powered code analysis
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Auto-generated documentation
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Faster onboarding & reviews
            </div>
          </div>
        </div>

        {/* RIGHT – Login Form */}
        <div className="p-8 md:p-10">

          <h3 className="text-2xl font-semibold text-white">
            Sign in
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            Enter your credentials to continue
          </p>

          {/* 🔹 Google Login (Added) */}
          <button
            type="button"
            className="
              mt-6 w-full flex items-center justify-center gap-3
              py-2.5 rounded-xl
              border border-white/10
              text-white text-sm
              hover:bg-white/10
              transition
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
          <div className="flex items-center gap-4 my-6">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-gray-500">OR</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="
                  mt-1 w-full px-4 py-2.5 rounded-xl
                  bg-black border border-white/10
                  text-white text-sm
                  placeholder-gray-500
                  focus:outline-none focus:border-green-400
                  transition
                "
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-300">Password</label>

              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="
                    w-full px-4 py-2.5 rounded-xl
                    bg-black border border-white/10
                    text-white text-sm
                    placeholder-gray-500
                    focus:outline-none focus:border-green-400
                    transition
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-400">
                <input type="checkbox" className="accent-green-400" />
                Remember me
              </label>

              <span className="text-green-400 cursor-pointer hover:underline">
                Forgot password?
              </span>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full py-2.5 rounded-xl
                bg-white text-black font-medium
                flex items-center justify-center gap-2
                hover:bg-gray-100
                disabled:opacity-70
                transition
              "
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              {loading ? "Signing in..." : "Login"}
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-sm text-gray-400">
            Don’t have an account?{" "}
            <span
              className="text-green-400 cursor-pointer hover:underline"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
