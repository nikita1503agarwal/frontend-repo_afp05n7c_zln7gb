import { ShieldCheck, BotMessageSquare, Clock, DollarSign, FileCheck2, Handshake } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Compliance on autopilot",
    desc: "Automated tax filings, dynamic labor-law checks, and SOC 2-ready controls built in.",
  },
  {
    icon: BotMessageSquare,
    title: "AI-native copilots",
    desc: "Draft policies, answer HR questions, and summarize performance signals instantly.",
  },
  {
    icon: Clock,
    title: "Instant payroll",
    desc: "Run payroll in real time with pro-rated accruals, retroactive adjustments, and zero spreadsheets.",
  },
  {
    icon: DollarSign,
    title: "Benefits that flex",
    desc: "Global stipends, reimbursements, and smart plans—configured once, managed automatically.",
  },
  {
    icon: FileCheck2,
    title: "Paperwork, handled",
    desc: "E-sign onboarding, I-9, W-4, and document workflows with audit trails and approvals.",
  },
  {
    icon: Handshake,
    title: "Plug-and-play integrations",
    desc: "Sync with ATS, accounting, and identity providers in minutes—not months.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative border-t border-white/10 bg-slate-950/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Built for lean HR teams that move fast</h2>
          <p className="mt-3 text-slate-300">Everything you need to onboard, pay, and support your team—without the busywork.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg transition-transform hover:-translate-y-0.5">
              <div className="absolute -inset-24 -z-0 bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-blue-500/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/90">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_400px_at_20%_20%,rgba(59,130,246,0.08),transparent),radial-gradient(600px_400px_at_80%_0%,rgba(99,102,241,0.08),transparent)]" />
    </section>
  );
}
