import { X } from "lucide-react";

function ManageAccountCard({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

      {/* Card */}
      <div className="w-full max-w-lg bg-black border border-white/10 rounded-2xl p-6 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <h2 className="text-xl font-semibold text-white">
          Manage Account
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Update your personal information and security settings
        </p>

        {/* Form */}
        <div className="mt-6 space-y-4">

          {/* Profile Pic */}
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center text-gray-400">
              IMG
            </div>
            <button className="text-sm text-green-400 hover:underline">
              Change profile picture
            </button>
          </div>

          {/* Username */}
          <div>
            <label className="text-sm text-gray-300">Username</label>
            <input
              type="text"
              placeholder="Your username"
              className="w-full mt-1 px-4 py-2 rounded-xl bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-green-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 rounded-xl bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-green-400"
            />
          </div>

          {/* Passwords */}
          <div>
            <label className="text-sm text-gray-300">Old Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 rounded-xl bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-green-400"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">New Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 rounded-xl bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-green-400"
            />
          </div>

        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 text-white text-sm hover:bg-white/20 transition"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded-xl bg-white text-black text-sm font-medium hover:bg-gray-100 transition"
          >
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}

export default ManageAccountCard;
