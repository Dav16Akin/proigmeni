"use client";

// Proigmeni · Liquid (after the monopo saigon style reference, with ode.com's structure and voice)
// A black-and-white editorial page floating on liquid light: one grained iridescent hero (sage → amber →
// oxblood), whisper-weight type, office photographs in true colour, abstract gradient art in the dark
// "why us" section, full-pill ghost buttons and patient cubic-bezier(0.19,1,0.22,1) motion.

import { useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { ContactForm } from "@/components/site/contact-form";
import Image from "next/image";
import { Banknote, Building2, ConciergeBell, Factory, GraduationCap, Landmark, ShieldCheck, ShoppingBag, Sprout, Stethoscope, Truck, Zap } from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Marquee } from "@/components/ui/marquee";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { automations, brand, closing, credits, faqs, hero, mission, reasons, sectors, sectorsFootnote, sectorsIntro, services, steps } from "@/content/proigmeni";

const glide = [0.19, 1, 0.22, 1] as const;

const nav = [
  ["What we do", "#services"],
  ["Why us", "#why"],
  ["Sectors", "#sectors"],
  ["Contact", "#contact"],
] as const;

function GhostPill({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <a
      href={href}
      className={`inline-flex w-fit items-center rounded-[75px] border px-[33px] py-[11px] font-roobert text-[16px] transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] hover:tracking-[0.04em] active:scale-[0.98] ${
        dark ? "border-white/30 text-white hover:border-white" : "border-black text-black hover:border-black/40"
      }`}
    >
      {children}
    </a>
  );
}

function Label({ n, children, dark = false }: { n: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`font-roobert text-[11px] uppercase tracking-[0.04em] ${dark ? "text-white/60" : "text-[#6d6d6d]"}`}>
      <span className="mr-3">{n}</span>
      {children}
    </p>
  );
}

function ScrollBadge() {
  return (
    <motion.svg aria-hidden viewBox="0 0 100 100" className="h-[92px] w-[92px] text-white" animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}>
      <defs>
        <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
      </defs>
      <text className="fill-current font-roobert text-[10.5px] uppercase tracking-[0.18em]">
        <textPath href="#badge-circle">Scroll down · Scroll down · Scroll down ·</textPath>
      </text>
    </motion.svg>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white mix-blend-difference">
      <div className="flex h-[66px] items-center justify-between px-5 md:px-10">
        <a href="#main" className="font-roobert text-[16px]">
          proigmeni lagos
        </a>
        <nav aria-label="Main" className="flex gap-5 font-roobert text-[11px] uppercase tracking-[0.04em] md:gap-8">
          {nav.map(([l, h]) => (
            <a key={h} href={h} className="hidden py-3 transition-opacity duration-500 hover:opacity-60 md:block">
              {l}
            </a>
          ))}
          <a href="#contact" className="py-3 md:hidden">
            {brand.primary}
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black">
      {/* Aceternity · Background Gradient Animation, recoloured to the sage → amber → oxblood wash. Follows the pointer. */}
      <BackgroundGradientAnimation
        containerClassName="absolute inset-0 h-full w-full"
        gradientBackgroundStart="rgb(8, 8, 6)"
        gradientBackgroundEnd="rgb(52, 12, 9)"
        firstColor="160, 224, 171"
        secondColor="255, 172, 46"
        thirdColor="165, 45, 37"
        fourthColor="110, 170, 120"
        fifthColor="232, 110, 40"
        pointerColor="255, 190, 90"
        size="90%"
        blendingValue="hard-light"
        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.6, ease: glide }}
          className="px-5 text-center font-roobert text-[clamp(44px,8.6vw,138px)] font-normal leading-[0.95] tracking-[-0.03em] text-white"
        >
          {hero.title[0]}
          <br />
          {hero.title[1]}
        </motion.h1>
      </BackgroundGradientAnimation>
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.5)_100%)]" />
      {/* Analog film grain over the gradient: SVG feTurbulence, no image file. */}
      <div aria-hidden className="grain pointer-events-none absolute inset-0 z-[2] opacity-[0.35] mix-blend-overlay" />
      <div className="absolute bottom-6 left-5 z-20 hidden md:left-10 md:block">
        <ScrollBadge />
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1.25 }} className="absolute bottom-10 right-5 z-20 flex flex-col items-end gap-4 md:right-10">
        <p className="max-w-[34ch] text-right font-roobert text-[12px] leading-[1.45] text-white/80">{hero.sub}</p>
        <GhostPill href="#contact" dark>
          {brand.primary}
        </GhostPill>
      </motion.div>
    </section>
  );
}

// Magic UI · Marquee: a running line of the work we automate, across sectors.
function WorkStrip() {
  return (
    <section aria-labelledby="work-strip" className="border-b border-black py-5">
      <h2 id="work-strip" className="sr-only">
        Work we automate
      </h2>
      <Marquee pauseOnHover className="[--duration:60s] [--gap:3rem]">
        {automations.map((a) => (
          <span key={a} className="flex items-center gap-12 font-roobert text-[clamp(18px,1.6vw,22px)] font-light text-black">
            {a}
            <span aria-hidden className="h-[5px] w-[5px] rounded-full bg-black" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}

function Mission() {
  return (
    <section className="mx-auto flex min-h-[100svh] max-w-[1078px] flex-col justify-center px-5 py-[152px] md:px-0">
      <Label n="01">{mission.label}</Label>
      {/* Aceternity · Text Generate Effect: the statement resolves word by word when it scrolls in. */}
      <TextGenerateEffect
        as="h2"
        words={mission.statement}
        duration={1.1}
        staggerBy={0.06}
        className="mt-10 font-roobert text-[clamp(36px,5.6vw,78px)] font-light leading-[1.1] tracking-[-0.02em] text-black"
      />
      <div className="mt-16 grid gap-10 md:ml-[40%] md:grid-cols-2">
        {mission.body.map((p) => (
          <p key={p.slice(0, 24)} className="font-roobert text-[16px] leading-[1.58] text-[#181818]">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1078px] scroll-mt-16 px-5 py-24 md:px-0">
      <Label n="02">What we do</Label>
      <h2 className="mt-10 font-roobert text-[clamp(56px,8.6vw,94px)] font-normal leading-[0.86] tracking-[-0.03em] text-black">
        What we
        <br />
        build
      </h2>
      <ul className="mt-20 border-b border-black">
        {services.map((s, i) => (
          <motion.li
            key={s.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.25, delay: (i % 3) * 0.06, ease: glide }}
            className="group grid gap-2 border-t border-black py-6 md:grid-cols-[60px_1fr_1fr] md:gap-8"
          >
            <span className="font-roobert text-[11px] text-[#6d6d6d]">0{i + 1}</span>
            <h3 className="font-roobert text-[clamp(24px,2.6vw,30px)] font-light leading-[1.15] text-black transition-transform duration-[1250ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-3">{s.title}</h3>
            <p className="font-roobert text-[16px] leading-[1.45] text-[#181818]">{s.short}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

// Scroll-driven: the section pins while you scroll through it; each stretch of scroll makes the next
// reason active and swaps its visual. After the last one the page carries on. Clicking a reason scrolls to it.
function Why() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const n = reasons.length;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(n - 1, Math.max(0, Math.floor(v * n)));
    setActive((prev) => (prev === i ? prev : i));
  });
  const goTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const span = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + span * ((i + 0.5) / n), behavior: reduce ? "auto" : "smooth" });
  };
  const r = reasons[active];
  return (
    <section id="why" ref={ref} className="relative bg-black text-white" style={{ height: `${100 + n * 70}svh` }}>
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1078px] px-5 pt-16 md:px-0 md:pt-0">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Label n="03" dark>
                Why Proigmeni
              </Label>
              <h2 className="mt-4 font-roobert text-[clamp(32px,5vw,72px)] font-light leading-[1.05] tracking-[-0.02em] text-white md:mt-8">Why work with us</h2>
            </div>
            <p aria-hidden className="font-roobert text-[11px] tabular-nums text-white/60">
              0{active + 1} / 0{n}
            </p>
          </div>
          <div className="mt-6 grid gap-5 md:mt-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:gap-16">
            <div role="tablist" aria-label="Reasons to work with Proigmeni" className="relative flex flex-col border-t border-white/25">
              {reasons.map((x, i) => (
                <button
                  key={x.id}
                  role="tab"
                  id={`why-tab-${x.id}`}
                  aria-selected={i === active}
                  aria-controls="why-panel"
                  onClick={() => goTo(i)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown" || e.key === "ArrowRight") goTo(Math.min(n - 1, i + 1));
                    if (e.key === "ArrowUp" || e.key === "ArrowLeft") goTo(Math.max(0, i - 1));
                  }}
                  tabIndex={i === active ? 0 : -1}
                  className="group relative flex items-baseline gap-6 border-b border-white/25 py-2 text-left md:py-4"
                >
                  {i === active && <motion.span layoutId="why-bar" aria-hidden className="absolute -left-px bottom-[-1px] top-0 w-[2px] bg-white" transition={{ duration: 0.6, ease: glide }} />}
                  <span className="w-6 pl-3 font-roobert text-[11px] text-white/50">0{i + 1}</span>
                  <span
                    className={`pl-3 font-roobert text-[clamp(19px,2.4vw,30px)] font-light leading-[1.15] transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
                      i === active ? "translate-x-2 text-white" : "text-white/35 group-hover:text-white/70"
                    }`}
                  >
                    {x.label}
                  </span>
                </button>
              ))}
            </div>
            <div id="why-panel" role="tabpanel" aria-labelledby={`why-tab-${r.id}`} aria-live="polite">
              <div className="relative aspect-[16/8] overflow-hidden md:aspect-[16/10]">
                <AnimatePresence initial={false}>
                  <motion.div key={r.id} className="absolute inset-0" initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.9, ease: glide }}>
                    <Image src={r.image} alt="" fill sizes="(min-width: 1078px) 600px, 100vw" className="object-cover" />
                  </motion.div>
                </AnimatePresence>
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={r.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.5, ease: glide }}>
                  <h3 className="mt-5 font-roobert text-[clamp(22px,2.6vw,30px)] font-light leading-[1.15] text-white md:mt-8">{r.title}</h3>
                  <p className="mt-2 max-w-[52ch] font-roobert text-[15px] leading-[1.5] text-white/70 md:mt-4 md:text-[16px] md:leading-[1.58]">{r.body}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sector wall: set like a client-logo grid. Twelve badges on hairlines, each a line icon and a name.
// Hover inverts a badge to black; the cells enter in a short stagger.
const sectorIcons = { finance: Banknote, insurance: ShieldCheck, health: Stethoscope, logistics: Truck, manufacturing: Factory, retail: ShoppingBag, education: GraduationCap, property: Building2, energy: Zap, agriculture: Sprout, hospitality: ConciergeBell, public: Landmark } as const;

function Sectors() {
  return (
    <section id="sectors" className="mx-auto max-w-[1078px] scroll-mt-16 px-5 py-24 md:px-0 md:py-[152px]">
      <Label n="04">Sectors</Label>
      <div className="mt-10 grid gap-6 md:grid-cols-[1.3fr_1fr] md:items-end md:gap-16">
        <h2 className="max-w-[16ch] font-roobert text-[clamp(36px,5.6vw,78px)] font-light leading-[1.1] tracking-[-0.02em] text-black">AI for every kind of business</h2>
        <p className="max-w-[36ch] font-roobert text-[16px] leading-[1.58] text-[#181818]">{sectorsIntro}</p>
      </div>
      <ul className="mt-16 grid grid-cols-2 border-l border-t border-black md:mt-20 md:grid-cols-4">
        {sectors.map((s, i) => {
          const Icon = sectorIcons[s.id as keyof typeof sectorIcons];
          return (
            <motion.li
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: (i % 4) * 0.06, ease: glide }}
              className="group relative flex aspect-[4/3] flex-col items-center justify-center gap-4 border-b border-r border-black px-3 text-center transition-colors duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)] hover:bg-black md:aspect-[3/2]"
            >
              <Icon aria-hidden strokeWidth={1.1} className="h-8 w-8 text-black transition-colors duration-[600ms] group-hover:text-white md:h-10 md:w-10" />
              <span className="font-roobert text-[15px] font-light leading-[1.2] tracking-[-0.01em] text-black transition-colors duration-[600ms] group-hover:text-white md:text-[20px]">{s.name}</span>
            </motion.li>
          );
        })}
      </ul>
      <p className="mt-8 font-roobert text-[14px] leading-[1.5] text-[#6d6d6d]">{sectorsFootnote}</p>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="bg-black text-white">
      <div className="mx-auto flex min-h-[100svh] max-w-[1078px] flex-col justify-center px-5 py-24 md:px-0">
        <Label n="05" dark>
          How we work
        </Label>
        <h2 className="mt-10 max-w-[18ch] font-roobert text-[clamp(36px,5.6vw,78px)] font-light leading-[1.1] tracking-[-0.02em]">From first call to daily use.</h2>
        <ol className="mt-20 grid gap-y-14 md:grid-cols-4 md:gap-x-8">
          {steps.map((s, i) => (
            <motion.li key={s.n} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 1.25, delay: i * 0.1, ease: glide }}>
              <span className="block font-roobert text-[clamp(64px,7vw,94px)] leading-[0.86] tracking-[-0.03em]">{s.n}</span>
              <h3 className="mt-8 font-roobert text-[18px]">{s.title}</h3>
              <p className="mt-3 font-roobert text-[16px] leading-[1.45] text-white/65">{s.body}</p>
            </motion.li>
          ))}
        </ol>
        <div className="mt-20">
          <GhostPill href="#contact" dark>
            {brand.primary}
          </GhostPill>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-[1078px] px-5 py-[152px] md:px-0">
      <Label n="06">Questions</Label>
      <div className="mt-10 grid gap-12 md:grid-cols-[1fr_1.6fr]">
        <h2 className="font-roobert text-[clamp(36px,5.6vw,78px)] font-light leading-[1.1] tracking-[-0.02em] text-black">Good to know</h2>
        <div className="border-b border-black">
          {faqs.map((f) => (
            <details key={f.q} className="group border-t border-black">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-roobert text-[18px] text-black [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden className="relative h-3 w-3 shrink-0">
                  <span className="absolute inset-x-0 top-1/2 h-px bg-black" />
                  <span className="absolute inset-y-0 left-1/2 w-px bg-black transition-transform duration-500 group-open:rotate-90" />
                </span>
              </summary>
              <p className="max-w-[56ch] pb-6 font-roobert text-[16px] leading-[1.58] text-[#6d6d6d]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto grid min-h-[100svh] max-w-[1078px] scroll-mt-16 content-center gap-16 px-5 py-[152px] md:grid-cols-2 md:px-0">
      <div>
        <Label n="07">Contact</Label>
        <h2 className="mt-10 font-roobert text-[clamp(36px,5.6vw,78px)] font-light leading-[1.1] tracking-[-0.02em] text-black">{closing.title}</h2>
        <p className="mt-8 max-w-[34ch] font-roobert text-[16px] leading-[1.58] text-[#181818]">{closing.body}</p>
        <a href={`mailto:${brand.email}`} className="mt-8 inline-block font-roobert text-[16px] text-black underline decoration-black/30 underline-offset-4 transition-colors hover:decoration-black">
          {brand.email}
        </a>
      </div>
      <ContactForm />
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto grid max-w-[1078px] gap-8 border-t border-black px-5 pb-16 pt-12 font-roobert text-[11px] leading-[1.36] text-[#6d6d6d] md:grid-cols-3 md:px-0">
      <div>
        <p className="text-[16px] text-black">proigmeni</p>
        <p className="mt-2">AI solutions and automation</p>
      </div>
      <div>
        <p className="text-black">{brand.city}</p>
        <p className="mt-2">Nigeria</p>
      </div>
      <div>
        <p>© {new Date().getFullYear()} Proigmeni · Privacy · Terms</p>
        <p className="mt-2">{credits}</p>
      </div>
    </footer>
  );
}

export function LiquidHome() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white font-roobert text-black selection:bg-black selection:text-white">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">
          <Hero />
          <WorkStrip />
          <Mission />
          <Services />
          <Why />
          <Sectors />
          <Process />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
