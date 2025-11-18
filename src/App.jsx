import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(56,189,248,0.15),transparent),radial-gradient(900px_500px_at_90%_-10%,rgba(99,102,241,0.12),transparent)]" />

      <Navbar />
      <Hero />
      <Logos />
      <Features />

      <section id="get-started" className="relative overflow-hidden border-t border-white/10 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 sm:p-12">
            <div className="absolute -inset-24 bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-blue-500/10 blur-2xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-semibold tracking-tight">See Benefito in action</h3>
                <p className="mt-2 max-w-2xl text-slate-300">
                  Get a personalized walkthrough of AI-native payroll, benefits, and HR automation. No pressure—just possibilities.
                </p>
              </div>
              <div className="flex justify-start lg:justify-end">
                <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:scale-[1.01] active:scale-[0.99]">
                  Request a demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 bg-slate-950/80 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 via-cyan-400 to-indigo-500">
                <span className="text-xs font-bold">B</span>
              </div>
              <span className="text-sm text-slate-300">Benefito • AI Native HR & Payroll</span>
            </div>
            <div className="text-xs text-slate-400">
              © {new Date().getFullYear()} Benefito, Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
