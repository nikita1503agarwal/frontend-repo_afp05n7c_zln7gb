import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-900/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500 shadow-[0_0_24px_rgba(59,130,246,0.5)]">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">Benefito</span>
            <span className="ml-2 rounded-full bg-blue-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-300/90 ring-1 ring-inset ring-blue-500/20">AI Native</span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-200/80 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#integrations" className="hover:text-white">Integrations</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <div className="hidden md:block">
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:scale-[1.01] active:scale-[0.99]">
              Get started
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="inline-flex items-center justify-center rounded-lg p-2 text-slate-200/80 ring-1 ring-white/10 md:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="space-y-1 border-t border-white/10 p-4 text-sm text-slate-200/80">
            <a onClick={() => setOpen(false)} href="#features" className="block rounded-lg p-2 hover:bg-white/5">Features</a>
            <a onClick={() => setOpen(false)} href="#integrations" className="block rounded-lg p-2 hover:bg-white/5">Integrations</a>
            <a onClick={() => setOpen(false)} href="#pricing" className="block rounded-lg p-2 hover:bg-white/5">Pricing</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block rounded-lg p-2 hover:bg-white/5">Contact</a>
            <a onClick={() => setOpen(false)} href="#get-started" className="mt-2 block rounded-lg bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 p-2 text-center font-semibold text-white">Get started</a>
          </div>
        </div>
      )}
    </header>
  );
}
