// Single source of truth for the site's copy.
// Voice: short statements, first-person plural, plain verbs. No prices on the site: costs are
// scoped per client and shared in the proposal. No invented clients, quotes or statistics.

export const brand = {
  name: "Proigmeni",
  say: "pro-ig-MEH-nee",
  meaning: "Greek for “advanced”",
  city: "Lagos",
  email: "hello@proigmeni.example", // stand-in until the real domain is set up
  primary: "Get started",
};

export const hero = {
  title: ["Putting AI to work", "in Nigerian business"],
  sub: "We design, build and run AI systems and automations for companies in every sector, from the first conversation to daily use.",
};

export const mission = {
  label: "Our mission",
  statement: "Most Nigerian companies can see what AI could do for them. Few have the team to make it real.",
  body: [
    "Proigmeni is that team. We find the work in your business where AI pays off, build it into the tools and channels you already use, and stay on to run and improve it.",
    "We work from Lagos, beside your staff, and our agents speak the languages your customers do: English, Pidgin, Yoruba, Hausa and Igbo.",
  ],
};

export const languages = ["English", "Pidgin", "Yoruba", "Hausa", "Igbo"];

export const services = [
  {
    id: "strategy",
    title: "AI strategy and discovery",
    short: "We study how your business runs and rank the places where AI will save the most time, money or risk.",
  },
  {
    id: "agents",
    title: "AI agents",
    short: "Agents that answer customers, qualify leads, follow up on payments and book appointments on WhatsApp, voice, web chat and email.",
  },
  {
    id: "workflow",
    title: "Workflow automation",
    short: "Approvals, hand-offs, reconciliations and reports that run on their own and call a person in when judgement is needed.",
  },
  {
    id: "documents",
    title: "Document intelligence",
    short: "Read invoices, contracts, claims, IDs and forms, pull out what matters and post it to the right system.",
  },
  {
    id: "assistant",
    title: "Private AI assistants",
    short: "An assistant that knows your company’s documents and data, shows its sources and respects who can see what.",
  },
  {
    id: "data",
    title: "Data and forecasting",
    short: "Forecasts, dashboards and early warnings built on the data you already collect.",
  },
  {
    id: "integration",
    title: "Systems integration",
    short: "AI connected to your core banking, ERP, CRM, payment and spreadsheet systems, through APIs or exports where none exist.",
  },
  {
    id: "governance",
    title: "Governance and training",
    short: "Data-protection paperwork with every build, and training that helps your teams use AI well and safely.",
  },
];

export const reasons = [
  {
    id: "production",
    label: "Production",
    title: "Built for daily use.",
    body: "We ship systems your staff and customers rely on every day, measured against targets we agree with you before any build starts.",
    image: "/images/abstract-arc.jpg",
  },
  {
    id: "local",
    label: "Local",
    title: "Built for how Nigeria works.",
    body: "Our agents switch between English, Pidgin, Yoruba, Hausa and Igbo. Every build allows for patchy connections, naira payments and the channels your customers already use.",
    image: "/images/abstract-horizon.jpg",
  },
  {
    id: "engineering",
    label: "Engineering",
    title: "The people who scope it build it.",
    body: "A small team of engineers takes each project from the first workshop to the systems it runs on, so nothing is lost between the plan and the build.",
    image: "/images/abstract-grain.jpg",
  },
  {
    id: "compliance",
    label: "Compliance",
    title: "Your data stays protected.",
    body: "Each build ships with a data-protection impact assessment, a data-flow map and a local hosting option, written against the NDPA and the Central Bank’s data rules.",
    image: "/images/abstract-wave.jpg",
  },
  {
    id: "partnership",
    label: "Partnership",
    title: "We stay after launch.",
    body: "We monitor, maintain and improve what we build, and plan the next piece of work with you as your business changes.",
    image: "/images/abstract-lime.jpg",
  },
];

export const sectorsIntro = "The same building blocks, set to the work each industry does every day.";

export const sectors = [
  { id: "finance", name: "Banking and finance" },
  { id: "insurance", name: "Insurance" },
  { id: "health", name: "Healthcare" },
  { id: "logistics", name: "Logistics" },
  { id: "manufacturing", name: "Manufacturing" },
  { id: "retail", name: "Retail and e‑commerce" },
  { id: "education", name: "Education" },
  { id: "property", name: "Real estate" },
  { id: "energy", name: "Energy and telecoms" },
  { id: "agriculture", name: "Agriculture" },
  { id: "hospitality", name: "Hospitality" },
  { id: "public", name: "Public sector" },
];

export const sectorsFootnote = "And legal and professional services, media, and any team with repeated work to hand over.";

export const steps = [
  { n: "01", title: "Conversation", body: "Tell us where your team loses time. We tell you where AI can help, and where it can’t." },
  { n: "02", title: "Discovery", body: "We map the processes, data and systems involved and agree what success looks like." },
  { n: "03", title: "Build", body: "We build and test with your real data and your people, then put it into daily use." },
  { n: "04", title: "Run and improve", body: "We host, monitor and improve it, and plan what to automate next." },
];

export const automations = [
  "Customer support agents",
  "Lead qualification",
  "Loan collections",
  "Claims processing",
  "Patient follow-up",
  "KYC checks",
  "Invoice matching",
  "Contract review",
  "Demand forecasting",
  "Order tracking",
  "School fee reminders",
  "Bank reconciliation",
  "Sales reports",
  "Staff knowledge assistants",
];

export const faqs = [
  {
    q: "Which industries do you work with?",
    a: "Any business with repeated tasks, customer conversations or documents to process. The same building blocks apply in finance, health, logistics, retail, education, energy and the public sector.",
  },
  {
    q: "Do we need our own AI team?",
    a: "No. We build, host and look after the systems. Your side needs one person who owns the process and tells us when it changes.",
  },
  {
    q: "Where is our data kept?",
    a: "Sensitive data can stay in Nigeria on local hosting. Only the minimum needed is sent to an AI model, and every build documents what goes where.",
  },
  {
    q: "Will it work with the software we already use?",
    a: "Usually, yes. We connect to core banking, ERPs, CRMs, spreadsheets and payment providers through their APIs, and work from exports where there is no API.",
  },
  {
    q: "How is a project priced?",
    a: "Every project is scoped to your business. After our first conversation we send a written proposal with the plan, the timeline and the cost.",
  },
];

export const closing = {
  title: "Let’s put AI to work in your business.",
  body: "Tell us what slows your team down. We’ll reply to set up a first conversation.",
};

export const credits = "Images: Lummi (lummi.ai).";
