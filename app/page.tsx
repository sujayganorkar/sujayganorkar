import React from "react";

// --- INLINE ICONS ---
function ArrowDown({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
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

function ArrowUpRight({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
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

// --- PROJECT DATA ---

const flagship = {
  name: "Orinex",
  label: "Integrated Processing Environment",
  status: "Current Focus",
  tagline:
    "An operating system for businesses that run on messy documents and emails.",
  description:
    "Built to solve real bottlenecks in a manufacturing business. Orinex replaces manual data entry and fragmented tools with an AI-native workspace. It treats emails, PDFs, and inventory lookups as independent objects that humans and AI agents can process in tandem, without rigid workflows.",
  architecture: [
    {
      title: "Interactive Workspace",
      tech: "Next.js · Univer",
      desc: "Interfaces for reviewing items, working with spreadsheet-backed documents, editing data, and handling operational work.",
    },
    {
      title: "Core Service",
      tech: "Spring Boot · PostgreSQL",
      desc: "Workspace-scoped backend handling templates, processing state, document data, inventory lookups, and persistence.",
    },
    {
      title: "Document System",
      tech: "Univer · Rendering Pipeline",
      desc: "Structured spreadsheet documents hydrated from backend data and prepared for operational output.",
    },
    {
      title: "Agent Layer",
      tech: "LLMs · Human Review",
      desc: "Agents prepare, extract, and transform work while people remain in control at judgment-heavy points.",
    },
  ],
  stack: [
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Next.js",
    "TypeScript",
    "Univer",
    "Docker",
  ],
  link: "https://orinex.in",
};

const selectedSystems = [
  {
    name: "Translation Pipeline",
    label: "Technical Document Translation",
    status: "Complete",
    description:
      "A pipeline for translating Chinese technical PDFs into reconstructed English documents while preserving tables, figures, formulas, and page structure.",
    highlights: [
      "Dual-source processing: raw text extraction + async parallel VLM page analysis",
      "Claude Sonnet merge layer reconciles conflicts between OCR and vision output",
      "Programmatic PDF reconstruction via ReportLab with formula and table handling",
      "Page-level QA pass with Haiku — flags pages for selective retranslation",
    ],
    stack: "Python · PyMuPDF · ReportLab · Claude · Gemini · OpenRouter",
    link: "https://github.com/sujayganorkar/translation",
  },
  {
    name: "Clover",
    label: "Couple Life OS",
    status: "Built",
    description:
      "A cross-platform product for long-distance couples: shared schedules, timezone-aware free-window overlap, Cal.com calendar sync, and a full suite of couple-specific features across Flutter and a React PWA.",
    highlights: [
      "Custom overlap engine: converts both partners' blocks to UTC, intersects free windows, returns results in the requester's local timezone",
      "DST-aware: daily cron detects upcoming timezone transitions and alerts affected couples",
      "Natural-language schedule parsing — heuristic first, Gemini fallback for ambiguous input",
      "40+ Supabase Edge Functions — calendar sync, push notifications, bookings, stories, music, shared spaces",
    ],
    stack: "Flutter · Dart · React · TypeScript · Supabase · PostgreSQL · Deno · Edge Functions",
    link: "https://ournest.life",
    linkLabel: "Visit Site",
  },
  {
    name: "XtracT",
    label: "Hybrid Document Extraction",
    status: "Built",
    description:
      "A hybrid OCR system that runs PaddleOCR and Tesseract in parallel, measures per-field confidence and cross-engine agreement, then decides whether to invoke a vision model — and in what mode.",
    highlights: [
      "5-gate confidence routing: skip Qwen above 98%, validation mode 95–98%, zoom-reads below 93%",
      "Hallucination filter using Levenshtein similarity — flags Qwen output unsupported by OCR regions",
      "Agentic judge layer for final field-level consistency checks",
      "Dockerized with GitHub Actions CI and packaged startup scripts",
    ],
    stack: "Node.js · Express · Python · PaddleOCR · Tesseract · Qwen2.5-VL · Docker",
    link: "https://github.com/sujayganorkar/XtracT",
  },
  {
    name: "Operations Tooling",
    label: "Gate Pass / Inventory · Quotation",
    status: "Operational",
    description:
      "Two pieces of internal software built for a manufacturing operation: dimensional inventory tracking with gate-pass PDF generation, and an Excel-backed quotation builder.",
    highlights: [
      "Dimensional stock model: tracks items by L/B/H/ID/OD across multiple sheet types",
      "Gate-pass PDFs generated from ReportLab — company header, item table, issuance log, sign-off fields",
      "FastAPI backend with watchdog thread: auto-exits if frontend closes, preventing orphaned processes",
      "Packaged as Windows executables via PyInstaller with GitHub Actions build automation",
    ],
    stack: "Python · FastAPI · React · Vite · ReportLab · Excel · PyInstaller",
  },
];


const technicalStack = [
  {
    category: "Coding Agents",
    items: ["Claude Code", "Codex", "Antigravity", "OpenCode"],
  },
  {
    category: "Core Technologies",
    items: ["Next.js + TypeScript", "Python", "Spring Boot", "Supabase"],
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
          <a href="#flagship">Orinex</a>
          <a href="#work">Work</a>
          <a href="#agents">Agents</a>
          <a
            href="mailto:sujayganorkar@gmail.com"
            className="headerContact"
          >
            Contact ↗
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="heroBadge">
          <span className="badgeDot" />
          <span>Currently building Orinex</span>
        </div>

        <h1 className="heroTitle">
          Software for messy business operations.
        </h1>

        <p className="heroSubtitle">
          Document-heavy workflows, operational tooling, and
          human-supervised AI systems. Built around real problems rather
          than predefined software categories.
        </p>

        <div className="heroActions">
          <a href="#flagship" className="btnPrimary">
            See the work <ArrowDown size={15} />
          </a>

          <a
            href="mailto:sujayganorkar@gmail.com"
            className="btnSecondary"
          >
            Get in touch <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* FLAGSHIP */}
      <section className="section" id="flagship">
        <div className="sectionHeader">
          <span className="sectionNumber">01 / CURRENT FOCUS</span>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span className="statusPill">{flagship.status}</span>
            <a
              href={flagship.link}
              target="_blank"
              rel="noreferrer"
              className="systemLink"
            >
              Visit Site <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        <div className="flagshipMain">
          <div className="flagshipHeader">
            <div>
              <p className="projectCategory">{flagship.label}</p>
              <h2 className="flagshipTitle">{flagship.name}</h2>
            </div>

            <p className="flagshipTagline">{flagship.tagline}</p>
          </div>

          <p className="flagshipDescription">
            {flagship.description}
          </p>

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
            {flagship.stack.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="section" id="work">
        <div className="sectionHeader">
          <span className="sectionNumber">02 / SELECTED WORK</span>
          <span className="sectionMeta">
            Products, operational software, and experiments
          </span>
        </div>

        <div className="systemsGrid">
          {selectedSystems.map((project, idx) => (
            <article className="systemCard" key={project.name}>
              <div className="systemCardTop">
                <span className="systemIndex">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <span className="systemStatus">
                  {project.status}
                </span>
              </div>

              <div className="systemHeading">
                <h3 className="systemTitle">{project.name}</h3>
                <span className="systemCategory">
                  {project.label}
                </span>
              </div>

              <p className="systemDesc">{project.description}</p>

              <ul className="systemHighlights">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="systemFooter">
                <div className="systemStack">{project.stack}</div>
                {"link" in project && project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="systemLink"
                  >
                    {"linkLabel" in project && project.linkLabel
                      ? project.linkLabel
                      : "View Code"}{" "}
                    <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section className="section" id="agents">
        <div className="sectionHeader">
          <span className="sectionNumber">03 / HOW I BUILD</span>
          <span className="sectionMeta">Everything is built with coding agents</span>
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

      {/* CONTACT */}
      <section className="contactSection">
        <div className="contactLeft">
          <span className="sectionNumber">04 / CONTACT</span>

          <h2>Working on a messy operational problem?</h2>

          <p>
            Especially interested in software around documents,
            business operations, human review, and applied AI.
          </p>
        </div>

        <div className="contactRight">
          <a
            href="mailto:sujayganorkar@gmail.com"
            className="contactEmail"
          >
            sujayganorkar@gmail.com ↗
          </a>

          <div className="contactLinks">
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