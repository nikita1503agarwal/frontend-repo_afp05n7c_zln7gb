import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-300">
              AI Native HR & Payroll • Secure • Real-time
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Payroll, benefits, and people ops—reimagined for the AI era
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Benefito automates payroll, compliance, and benefits administration with an AI-native core. Faster onboarding, zero manual spreadsheets, and insights that actually drive decisions.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:scale-[1.01] active:scale-[0.99]">
                Get a live demo
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white/90 hover:bg-white/10">
                Explore features
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-slate-300/80">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                SOC 2 Type II
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
                GDPR-ready
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                Real-time payroll engine
              </div>
            </div>
          </div>

          <div className="relative h-[420px] w-full rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-2 shadow-2xl lg:h-[520px]">
            <div className="absolute -inset-24 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/10 to-blue-500/10 blur-3xl" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_20%_-10%,rgba(59,130,246,0.15),transparent),radial-gradient(800px_500px_at_90%_0%,rgba(99,102,241,0.12),transparent)]" />
    </section>
  );
}
