const logos = [
  { name: 'Stripe', src: 'https://images.unsplash.com/photo-1628699265231-97b2a3e7b9ae?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHJpcGV8ZW58MHwwfHx8MTc2MzQ2NTYxMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Slack', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg' },
  { name: 'Okta', src: 'https://images.unsplash.com/photo-1628699265231-97b2a3e7b9ae?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHJpcGV8ZW58MHwwfHx8MTc2MzQ2NTYxMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'QuickBooks', src: 'https://images.unsplash.com/photo-1628699265231-97b2a3e7b9ae?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHJpcGV8ZW58MHwwfHx8MTc2MzQ2NTYxMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Rippling', src: 'https://images.unsplash.com/photo-1628699265231-97b2a3e7b9ae?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHJpcGV8ZW58MHwwfHx8MTc2MzQ2NTYxMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Gusto', src: 'https://images.unsplash.com/photo-1628699265231-97b2a3e7b9ae?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHJpcGV8ZW58MHwwfHx8MTc2MzQ2NTYxMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
];

export default function Logos() {
  return (
    <section className="bg-slate-950/40 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70">
          {logos.map((logo) => (
            <img key={logo.name} src={logo.src} alt={logo.name} className="h-6 invert" />
          ))}
        </div>
      </div>
    </section>
  );
}
