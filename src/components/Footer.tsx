import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-warm flex items-center justify-center">
              <span className="text-white font-bold text-xs">NP</span>
            </div>
            <span className="text-sm font-semibold text-stone-300">Nonprofit Template</span>
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-stone-800" />

          {/* Copyright */}
          <p className="text-sm text-stone-500">
            &copy; {new Date().getFullYear()} Nonprofit Template. All rights reserved.
          </p>

          {/* Credit */}
          <p className="text-sm text-stone-600 flex items-center gap-1.5">
            Made with
            <Heart size={14} className="fill-amber-500 text-amber-500 inline" />
            by <span className="text-stone-400 font-medium">Sean G</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
