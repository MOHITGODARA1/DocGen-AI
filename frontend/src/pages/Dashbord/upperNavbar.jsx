function UpperNavbar() {
  return (
    <header className="w-full h-16 px-6 bg-black border-b border-white/10 flex items-center justify-between">
      
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/DocgenLogo.png"   // replace with your logo path
          alt="Logo"
          className="h-10 w-auto"
        />
      </div>

      {/* Right: Profile */}
      <div className="flex items-center gap-4">
        <button className="text-sm text-gray-300 hover:text-white transition">
          Profile Name
        </button>

        <img
          src="/profile.jpg" // replace with profile image
          alt="Profile"
          className="h-9 w-9 rounded-full object-cover border border-white/20 cursor-pointer"
        />
      </div>

    </header>
  );
}

export default UpperNavbar;
