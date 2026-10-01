import React from "react";

// --- INLINE ICONS (Zero external dependencies) ---
function ArrowDown({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  );
}

function ArrowUpRight({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

function GithubIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

// --- PROJECT DATA ---
const flagship = {
  name: "Orinex",
  label: "Integrated Processing Environment",
  status: "Active Focus",
  tagline: "Commercial operations without the rigidity of traditional ERP forms.",
  description:
    "An AI-native operating environment built around independent business artifacts—items, spreadsheets, documents, and dispatches—instead of forcing people through rigid, step-by-step sequences. Designed to replace messy email-and-Excel operational sprawl with structured actions.",
  architecture: [
    {
      title: "Interactive Workspace",
      tech: "Next.js · Univer Sheets",
      desc: "Spreadsheet-first interface with live cell mapping, formula evaluation, dynamic row insertion, and human-in-the-loop editing.",
    },
    {
      title: "Core Service",
      tech: "Spring Boot · PostgreSQL",
      desc: "Multi-tenant engine managing order lifecycles, template schemas, dispatch events, inventory lookups, and state persistence.",
    },
    {
      title: "Document Pipeline",
      tech: "Playwright · LibreOffice",
      desc: "Deterministic document rendering: transforms spreadsheet snapshots into customer-ready, pixel-perfect PDFs.",
    },
    {
      title: "AI Merge & Extraction",
      tech: "LLMs · MCP Architecture",
      desc: "Extracts structured line items from incoming emails and PDFs once, propagating clean data across subsequent operational stages.",
    },
  ],
  stack: ["Java", "Spring Boot", "PostgreSQL", "Next.js", "TypeScript", "Univer", "Docker"],
};

const selectedSystems = [
  {
    name: "Translation Pipeline",
    label: "Multimodal Technical Book Translation",
    status: "Completed",
    description:
      "An automated pipeline for translating Chinese technical books into reconstructed English PDFs while strictly preserving tables, figures, mathematical formulas, and visual layout.",
    highlights: [
      "Dual-channel parsing combining PyMuPDF text extraction with vision-language page analysis",
      "AI reconciliation layer to resolve conflicts between raw OCR and visual layouts",
      "Programmatic PDF reconstruction using ReportLab with custom math and table typography",
      "Automated page-level visual QA with selective re-translation triggers",
    ],
    stack: "Python · PyMuPDF · ReportLab · VLMs · Claude · OpenRouter",
    link: "https://github.com/sujayganorkar/translation",
  },
  {
    name: "XtracT",
    label: "Hybrid Document Intelligence",
    status: "Production Build",
    description:
      "A document extraction system engineered to minimize cloud inference costs by prioritizing local deterministic OCR and escalating only uncertain documents to vision models.",
    highlights: [
      "Cross-validation engine running PaddleOCR and Tesseract in parallel",
      "Confidence-based routing: high-confidence docs finish locally; edge cases route to Qwen2.5-VL",
      "Hallucination detection and field-level consistency checks",
      "Containerized microservice with Docker and automated CI validation",
    ],
    stack: "Node.js · React · Python · PaddleOCR · Tesseract · Qwen2.5-VL · Docker",
    link: "https://github.com/sujayganorkar/XtracT",
  },
  {
    name: "Clover",
    label: "Couple Life Sync & Overlap Engine",
    status: "Shipped",
    description:
      "Cross-platform coordination system designed for long-distance couples living across different time zones, turning loose daily plans into shared schedules and usable overlap.",
    highlights: [
      "Custom timezone-aware overlap computation engine with schedule collision detection",
      "Natural-language event parsing and conversational entry",
      "Offline-first sync architecture with Supabase, PostgreSQL, and Row Level Security",
      "Dual client deployment: Flutter mobile app (iOS/Android) and React PWA",
    ],
    stack: "Flutter · Dart · React · TypeScript · Supabase · PostgreSQL · Edge Functions",
    link: "https://ournest.life",
    linkLabel: "Visit Site",
  },
  {
    name: "Operations Tooling",
    label: "Gate Pass SHPL & Seal Quotation",
    status: "Deployed in Operations",
    description:
      "Custom desktop software deployed for manufacturing and distribution operations to eliminate manual ledger tracking and spreadsheet pricing errors.",
    highlights: [
      "Gate Pass: dimensional stock tracking, inventory issuance, material movement logs, and PDF output",
      "Seal Quotation: live Excel pricing integration, interactive proposal builder, and instant PDF quotation generator",
      "Packaged and automated as standalone Windows desktop executables via PyInstaller & GitHub Actions",
    ],
    stack: "Python · React · Electron · FastAPI · Excel Engine · PyInstaller",
  },
  {
    name: "Code Pulse",
    label: "Developer & Repository Intelligence",
    status: "Completed",
    description:
      "Full-stack analytics system ingesting GitHub repository activity (commits, pull requests, issues, review times) to compute persistent engineering metrics.",
    highlights: [
      "Incremental data synchronization engine respecting GitHub API rate limits",
      "OAuth flow, JWT authentication, and structured PostgreSQL time-series schema",
      "Interactive analytics frontend showing team cadence, cycle time, and workload distribution",
    ],
    stack: "TypeScript · Node.js · Express · PostgreSQL · GitHub REST API · React",
  },
  {
    name: "CarbonLink",
    label: "Supply Chain Emissions Accounting",
    status: "Research Prototype",
    description:
      "Research prototype exploring supplier-level Scope 3 greenhouse gas accounting for Indian corporate and MSME industrial supply chains, turning supplier surveys into verified emission estimates.",
    highlights: [
      "Activity-based emission factor calculations tailored to Indian industrial sectors",
      "Supplier survey interface backed by automated validation APIs",
    ],
    stack: "Next.js · TypeScript · GHG Protocol Modeling · API Integrations",
  },
];

const technicalStack = [
  {
    category: "Languages",
    items: ["Java", "TypeScript", "JavaScript", "Python", "Dart", "SQL"],
  },
  {
    category: "Backend & Systems",
    items: ["Spring Boot", "Node.js / Express", "PostgreSQL", "Supabase", "Docker", "REST / MCP"],
  },
  {
    category: "Frontend & Clients",
    items: ["Next.js", "React", "Flutter", "Electron", "Vite", "PWA"],
  },
  {
    category: "Document & AI Tooling",
    items: ["Univer Sheets", "ReportLab", "PyMuPDF", "PaddleOCR", "Tesseract", "VLMs & LLMs"],
  },
];

export default function Home() {
  return (
    <main className="container">
      {/* HEADER */}
      <header className="siteHeader">
        <a href="#" className="brandName">
          Sujay Ganorkar
        </a>
        <nav className="headerNav">
          <a href="#flagship">Flagship</a>
          <a href="#work">Systems</a>
          <a href="#stack">Stack</a>
          <a href="mailto:hello@sujayganorkar.in" className="headerContact">
            hello@sujayganorkar.in ↗
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="heroBadge">
          <span className="badgeDot"></span>
          <span>Currently Building Orinex</span>
        </div>

        <h1 className="heroTitle">
          Building software for business operations, document processing, and human-in-the-loop systems.
        </h1>

        <p className="heroSubtitle">
          I design and build software around messy real-world workflows—turning unstructured documents,
          disjointed operations, and complex coordination problems into reliable, working software.
        </p>

        <div className="heroActions">
          <a href="#flagship" className="btnPrimary">
            Explore Systems <ArrowDown size={15} />
          </a>
          <a
            href="https://github.com/sujayganorkar"
            target="_blank"
            rel="noreferrer"
            className="btnSecondary"
          >
            <GithubIcon size={16} /> GitHub <ArrowUpRight size={14} />
          </a>
          <a href="mailto:hello@sujayganorkar.in" className="btnSecondary">
            Get in touch <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* FLAGSHIP: ORINEX */}
      <section className="section" id="flagship">
        <div className="sectionHeader">
          <span className="sectionNumber">01 / FLAGSHIP SYSTEM</span>
          <span className="statusPill">{flagship.status}</span>
        </div>

        <div className="flagshipMain">
          <div className="flagshipHeader">
            <div>
              <p className="projectCategory">{flagship.label}</p>
              <h2 className="flagshipTitle">{flagship.name}</h2>
            </div>
            <p className="flagshipTagline">{flagship.tagline}</p>
          </div>

          <p className="flagshipDescription">{flagship.description}</p>

          <div className="architectureGrid">
            {flagship.architecture.map((arch) => (
              <div className="archCard" key={arch.title}>
                <div className="archHeader">
                  <h3>{arch.title}</h3>
                  <span className="archTech">{arch.tech}</span>
                </div>
                <p>{arch.desc}</p>
              </div>
            ))}
          </div>

          <div className="tagList">
            {flagship.stack.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED SYSTEMS */}
      <section className="section" id="work">
        <div className="sectionHeader">
          <span className="sectionNumber">02 / SELECTED SYSTEMS</span>
          <span className="sectionMeta">Production builds &amp; completed software</span>
        </div>

        <div className="systemsGrid">
          {selectedSystems.map((project, idx) => (
            <article className="systemCard" key={project.name}>
              <div className="systemCardTop">
                <span className="systemIndex">0{idx + 1}</span>
                <span className="systemStatus">{project.status}</span>
              </div>

              <div className="systemHeading">
                <h3 className="systemTitle">{project.name}</h3>
                <span className="systemCategory">{project.label}</span>
              </div>

              <p className="systemDesc">{project.description}</p>

              <ul className="systemHighlights">
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="systemFooter">
                <div className="systemStack">{project.stack}</div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="systemLink"
                  >
                    {(project as any).linkLabel ?? "View Code"} <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STACK & FOCUS */}
      <section className="section" id="stack">
        <div className="sectionHeader">
          <span className="sectionNumber">03 / TECHNICAL STACK &amp; FOCUS</span>
          <span className="sectionMeta">Where I spend time</span>
        </div>

        <div className="stackGrid">
          {technicalStack.map((group) => (
            <div className="stackCard" key={group.category}>
              <h3>{group.category}</h3>
              <div className="stackItems">
                {group.items.map((item) => (
                  <span className="stackBadge" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT & FOOTER */}
      <section className="contactSection">
        <div className="contactLeft">
          <span className="sectionNumber">04 / CONTACT</span>
          <h2>Building something operational or document-heavy?</h2>
          <p>
            I like talking with founders, engineers, and operators about messy business problems, applied AI,
            and software systems built for the real world.
          </p>
        </div>

        <div className="contactRight">
          <a href="mailto:hello@sujayganorkar.in" className="contactEmail">
            hello@sujayganorkar.in ↗
          </a>
          <div className="contactLinks">
            <a
              href="https://github.com/sujayganorkar"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <span>Nagpur, India</span>
          </div>
        </div>
      </section>

      <footer className="siteFooter">
        <span>Sujay Ganorkar</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
