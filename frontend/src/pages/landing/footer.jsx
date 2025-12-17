import { Github, Linkedin, X, Moon, Sun, MessageCircle } from "lucide-react";

function Footer() {
  return (
    <footer className="relative w-full bg-black px-6 pt-24 pb-10">

      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

      <div className="max-w-7xl mx-auto">

        {/* Logo + Socials */}
        <div className="flex items-center justify-between mb-14">
          <div className="flex items-center gap-2">
            <img src="./DocgenLogo.png" alt="logo" className="h-10"/>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <Linkedin className="h-5 w-5 hover:text-white cursor-pointer" />
            <X className="h-5 w-5 hover:text-white cursor-pointer" />
            <Github className="h-5 w-5 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 text-sm">

          {/* Explore */}
          <div>
            <h4 className="text-gray-400 mb-4 tracking-wide">EXPLORE</h4>
            <ul className="space-y-3 text-white">
              <li>Startups</li>
              <li>Enterprise</li>
              <li>Switch</li>
              <li>OSS Program</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-gray-400 mb-4 tracking-wide">RESOURCES</h4>
            <ul className="space-y-3 text-white">
              <li>Customers</li>
              <li>Blog</li>
              <li>Pricing</li>
              <li>Guides</li>
              <li>Feature Requests</li>
            </ul>
          </div>

          {/* Documentation */}
          <div>
            <h4 className="text-gray-400 mb-4 tracking-wide">DOCUMENTATION</h4>
            <ul className="space-y-3 text-white">
              <li>Getting Started</li>
              <li>API Reference</li>
              <li>Components</li>
              <li>Changelog</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gray-400 mb-4 tracking-wide">COMPANY</h4>
            <ul className="space-y-3 text-white">
              <li>Careers</li>
              <li>Wall of Love</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-gray-400 mb-4 tracking-wide">LEGAL</h4>
            <ul className="space-y-3 text-white">
              <li>Privacy Policy</li>
              <li>Responsible Disclosure</li>
              <li>Terms of Service</li>
              <li>Security</li>
              <li>DSR/DSAR</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">

          {/* Status */}
          <div className="flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span className="text-gray-300">
              All systems normal
            </span>
          </div>

          {/* Copyright */}
          <p className="text-gray-400">
            © 2025 OptiCode, Inc.
          </p>

          {/* Controls */}
          <div className="flex items-center gap-3 bg-white/5 px-3 py-1.5 rounded-full text-gray-400">
            <MessageCircle className="h-4 w-4 hover:text-white cursor-pointer" />
            <Sun className="h-4 w-4 hover:text-white cursor-pointer" />
            <Moon className="h-4 w-4 hover:text-white cursor-pointer" />
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
