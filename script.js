const tools = [
  {
    name: "Cursor",
    short: "CU",
    category: "AI IDE",
    launched: 2022,
    maturity: "Production-ready",
    standout: "Great for existing codebases",
    history:
      "Built by Anysphere around the idea that the editor itself should be redesigned for AI-native coding, not just patched with autocomplete.",
    summary:
      "Cursor combines natural-language edits, codebase awareness, inline completion, and agent-style workflows in a familiar editor surface.",
    bestFor: ["Large repos", "Professional devs", "Fast refactors"],
    workflow: [
      "Open an existing project and let Cursor index the codebase.",
      "Use chat or agent mode to describe a feature or bugfix.",
      "Review multi-file edits, then run and test locally.",
      "Keep iterating with smaller follow-up prompts."
    ],
    website: "https://www.cursor.com/",
    docs: "https://docs.cursor.com/",
    youtube: "https://www.youtube.com/results?search_query=Cursor+AI+editor+tutorial",
    videoTitle: "Cursor guides on YouTube"
  },
  {
    name: "Windsurf",
    short: "WS",
    category: "AI IDE",
    launched: 2024,
    maturity: "Production-ready",
    standout: "Strong flow-state editing",
    history:
      "Windsurf grew out of Codeium's work and pushed hard into the idea of an agentic IDE with Cascade, Command, and context-aware suggestions.",
    summary:
      "A full IDE built for chat-driven coding, inline commands, rich context retrieval, and quick project generation.",
    bestFor: ["Daily IDE work", "Context-aware changes", "Teams standardizing on one editor"],
    workflow: [
      "Install the editor and import settings from VS Code or Cursor if needed.",
      "Use Cascade for planning, file edits, and codebase Q&A.",
      "Use Command for targeted changes directly at the cursor.",
      "Run, preview, and polish inside the same workspace."
    ],
    website: "https://windsurf.com/editor",
    docs: "https://docs.windsurf.com/windsurf",
    youtube: "https://www.youtube.com/results?search_query=Windsurf+Cascade+tutorial",
    videoTitle: "Windsurf Cascade walkthroughs"
  },
  {
    name: "Lovable",
    short: "LO",
    category: "Prompt-to-app",
    launched: 2024,
    maturity: "Fast-growing",
    standout: "Excellent for non-coders",
    history:
      "Lovable rode the shift from AI code assistants to full-stack app generation, especially for founders who want to ship without bootstrapping everything manually.",
    summary:
      "You describe a web app or website and Lovable builds frontend, backend, database wiring, and deployment-ready code you can keep iterating on.",
    bestFor: ["MVPs", "Founders", "Internal tools"],
    workflow: [
      "Describe the app, workflow, and style in plain language.",
      "Let Lovable generate the first working version.",
      "Refine screens, data models, and integrations through follow-up prompts.",
      "Sync code to GitHub or continue collaborating in the workspace."
    ],
    website: "https://lovable.dev/",
    docs: "https://docs.lovable.dev/",
    youtube: "https://www.youtube.com/watch?v=xhW9up0Gi2E",
    videoTitle: "Lovable intro video"
  },
  {
    name: "Bolt.new",
    short: "BO",
    category: "Prompt-to-app",
    launched: 2024,
    maturity: "Production-ready",
    standout: "Very fast browser-based prototyping",
    history:
      "StackBlitz turned its WebContainers advantage into Bolt, a prompt-first app builder that runs a full dev environment directly in the browser.",
    summary:
      "Bolt can generate websites, web apps, and mobile app prototypes from a single prompt, then host them quickly with built-in publishing.",
    bestFor: ["Hackathons", "Demo apps", "Rapid idea validation"],
    workflow: [
      "Start with a clear prompt describing the product and audience.",
      "Generate the first app version in the browser workspace.",
      "Edit by chat, adjust layout and logic, and connect any data source you need.",
      "Publish to a bolt.host URL or continue exporting the code."
    ],
    website: "https://bolt.new/",
    docs: "https://support.bolt.new/docs/getting-started",
    youtube: "https://www.youtube.com/results?search_query=Bolt.new+tutorial",
    videoTitle: "Bolt.new tutorials"
  },
  {
    name: "v0",
    short: "V0",
    category: "Frontend builder",
    launched: 2023,
    maturity: "Production-ready",
    standout: "Great UI and React output",
    history:
      "Vercel introduced v0 as a natural-language path into interface generation, then expanded it toward production-grade full-stack app workflows.",
    summary:
      "v0 is especially strong at generating polished React and Next.js UI with an easy path to Vercel deployment.",
    bestFor: ["Frontend teams", "React apps", "Design-to-code"],
    workflow: [
      "Prompt with a screen idea, user flow, or uploaded mockup.",
      "Ask v0 to generate the initial UI and component structure.",
      "Iterate on spacing, content, state, and interactions through chat.",
      "Deploy directly or export into an existing codebase."
    ],
    website: "https://v0.dev/",
    docs: "https://vercel.com/docs/v0",
    youtube: "https://www.youtube.com/watch?v=hlLRN8D_xPc",
    videoTitle: "v0 beginner guide"
  },
  {
    name: "Replit Agent",
    short: "RA",
    category: "Prompt-to-app",
    launched: 2024,
    maturity: "Production-ready",
    standout: "All-in-one browser workspace",
    history:
      "Replit evolved from browser IDE and education roots into a platform where Agent can plan, build, debug, and deploy apps from natural language.",
    summary:
      "Agent can create apps, designs, slides, and more inside Replit's hosted environment, making it approachable for both beginners and teams.",
    bestFor: ["Learning", "Hosted builds", "All-in-one app creation"],
    workflow: [
      "Open a Replit workspace and describe the app or site you want.",
      "Pick a build mode and let Agent scaffold the first version.",
      "Refine features, database structure, and styling through chat.",
      "Deploy and share from the same platform."
    ],
    website: "https://replit.com/products/agent",
    docs: "https://docs.replit.com/core-concepts/agent/",
    youtube: "https://www.youtube.com/watch?v=aWBiZc5XKJM",
    videoTitle: "Replit Agent intro"
  },
  {
    name: "GitHub Copilot",
    short: "GC",
    category: "AI assistant",
    launched: 2021,
    maturity: "Established",
    standout: "Fits existing developer workflows",
    history:
      "Copilot helped normalize AI pair programming, starting with inline suggestions and growing into chat, terminal help, and agent workflows across GitHub.",
    summary:
      "For many teams, Copilot is the least disruptive way to add AI help to an editor, terminal, PR workflow, and the GitHub platform itself.",
    bestFor: ["Existing IDEs", "Incremental adoption", "PR-centric teams"],
    workflow: [
      "Install Copilot in your editor or enable it in GitHub.",
      "Use inline suggestions for speed and chat for explanations.",
      "Ask Copilot to draft edits, terminal commands, or PR summaries.",
      "Review code carefully and fold its output into normal team processes."
    ],
    website: "https://github.com/features/copilot",
    docs: "https://docs.github.com/en/copilot/overview-of-github-copilot/about-github-copilot",
    youtube: "https://www.youtube.com/results?search_query=GitHub+Copilot+tutorial",
    videoTitle: "GitHub Copilot walkthroughs"
  },
  {
    name: "Claude Code",
    short: "CC",
    category: "Terminal agent",
    launched: 2025,
    maturity: "Fast-moving",
    standout: "Strong codebase-wide execution",
    history:
      "Claude Code pushed the coding-agent idea deeper into the terminal, focusing on reading the whole repo, making coordinated edits, and running real tools.",
    summary:
      "It is designed for people who want an agentic collaborator inside the terminal with approval controls, test loops, and multi-file changes.",
    bestFor: ["Terminal-first workflows", "Deep repo work", "Automation-heavy tasks"],
    workflow: [
      "Install Claude Code and start it inside a project folder.",
      "Describe a task in plain language and let it inspect the codebase.",
      "Approve edits and commands while it implements and tests changes.",
      "Use focused follow-ups to tighten edge cases or polish output."
    ],
    website: "https://www.anthropic.com/product/claude-code",
    docs: "https://docs.anthropic.com/en/docs/claude-code/overview",
    youtube: "https://www.youtube.com/results?search_query=Claude+Code+tutorial",
    videoTitle: "Claude Code demos"
  },
  {
    name: "Codex",
    short: "OX",
    category: "Cloud coding agent",
    launched: 2025,
    maturity: "Fast-moving",
    standout: "Parallel cloud tasks",
    history:
      "OpenAI reintroduced Codex as a cloud-based software engineering agent built for delegated tasks, isolated execution, and multi-agent workflows.",
    summary:
      "Codex is built for feature work, bug fixing, repo Q&A, and background execution through an app, CLI, and IDE integrations.",
    bestFor: ["Parallel task execution", "Background coding work", "Agent-first teams"],
    workflow: [
      "Open Codex in the app, CLI, or IDE extension and point it at a repo or task.",
      "Assign a bounded request such as a feature, bugfix, migration, or investigation.",
      "Let Codex work in an isolated environment while you monitor progress.",
      "Review diffs, test results, and follow-up tasks before shipping."
    ],
    website: "https://openai.com/codex",
    docs: "https://help.openai.com/en/articles/11369540-codex-in-chatgpt",
    youtube: "https://www.youtube.com/results?search_query=OpenAI+Codex+tutorial",
    videoTitle: "Codex tutorials"
  },
  {
    name: "Cline",
    short: "CL",
    category: "Open-source agent",
    launched: 2024,
    maturity: "Open-source favorite",
    standout: "Model choice and explicit approval",
    history:
      "Cline grew quickly among developers who wanted a transparent, model-agnostic coding agent that could live in the editor or terminal without platform lock-in.",
    summary:
      "It lets you bring your own model provider, review each action, and work in VS Code, Cursor, JetBrains, or the CLI.",
    bestFor: ["Open workflows", "Provider flexibility", "Power users"],
    workflow: [
      "Install Cline in your editor or use the CLI.",
      "Connect your preferred model provider and set usage preferences.",
      "Ask it to plan, edit files, run commands, and explain tradeoffs.",
      "Approve or reject each action to keep the loop transparent."
    ],
    website: "https://cline.bot/",
    docs: "https://docs.cline.bot/",
    youtube: "https://www.youtube.com/results?search_query=Cline+tutorial",
    videoTitle: "Cline guides"
  },
  {
    name: "Firebase Studio",
    short: "FS",
    category: "Cloud IDE",
    launched: 2025,
    maturity: "Preview",
    standout: "Browser-based full-stack AI workspace",
    history:
      "Firebase Studio extends Google's hosted development push by blending Firebase workflows, Project IDX roots, and Gemini-powered app building in the browser.",
    summary:
      "It helps teams prototype and ship full-stack AI apps from a cloud workspace with templates, imports, and integrated Firebase services.",
    bestFor: ["Firebase-heavy stacks", "Cloud-first teams", "Hosted app building"],
    workflow: [
      "Start from a template, import a project, or bring in a design.",
      "Use built-in AI help to scaffold app structure and implementation.",
      "Refine frontend, backend, and integrations inside the hosted workspace.",
      "Ship through Firebase services once the app is stable."
    ],
    website: "https://firebase.google.com/docs/studio",
    docs: "https://firebase.google.com/docs/studio",
    youtube: "https://www.youtube.com/results?search_query=Firebase+Studio+tutorial",
    videoTitle: "Firebase Studio videos"
  },
  {
    name: "Devin",
    short: "DE",
    category: "Autonomous agent",
    launched: 2024,
    maturity: "Enterprise-focused",
    standout: "Long-running delegated tasks",
    history:
      "Cognition positioned Devin as an AI software engineer that can own longer arcs of work, moving beyond assistive coding into delegated execution.",
    summary:
      "Devin is aimed at teams that want a more autonomous agent for implementation, investigation, and parallel task handling.",
    bestFor: ["Delegated tasks", "Parallel execution", "Enterprise experiments"],
    workflow: [
      "Define a bounded task with a clear end result.",
      "Let Devin investigate, code, and report back over a longer session.",
      "Review its outputs, assumptions, and tests carefully.",
      "Use it where ownership is clear and human checkpoints stay intact."
    ],
    website: "https://cognition.ai/",
    docs: "https://knowledge.cognition.ai/",
    youtube: "https://www.youtube.com/results?search_query=Devin+AI+software+engineer+tutorial",
    videoTitle: "Devin explainers"
  }
];

const timeline = [
  {
    year: "2021",
    copy:
      "GitHub Copilot makes AI pair programming mainstream by turning autocomplete into a daily development habit."
  },
  {
    year: "2022",
    copy:
      "Cursor starts the AI-native IDE wave by treating the editor itself as the product, not just the model integration."
  },
  {
    year: "2023",
    copy:
      "v0 shows how prompt-driven UI generation can collapse the gap between design ideas and shipped frontend code."
  },
  {
    year: "2024",
    copy:
      "Bolt, Lovable, Windsurf, Replit Agent, Cline, and Devin accelerate the jump from copilots to true building agents."
  },
  {
    year: "2025-2026",
    copy:
      "Terminal agents, browser builders, cloud agents, and hosted studios converge. The frontier shifts from writing code to orchestrating systems."
  }
];

const themes = [
  {
    id: "aurora",
    name: "Aurora",
    colors: ["#0c1220", "#17223a", "#78a9ff", "#8b5cf6"]
  },
  {
    id: "sunset",
    name: "Sunset",
    colors: ["#1a1010", "#3a2024", "#ff9470", "#ffcc70"]
  },
  {
    id: "mint",
    name: "Mint",
    colors: ["#091617", "#143334", "#41d6a4", "#5eead4"]
  },
  {
    id: "dawn",
    name: "Dawn",
    colors: ["#15131f", "#2b2642", "#c084fc", "#60a5fa"]
  },
  {
    id: "sand",
    name: "Sand",
    colors: ["#171410", "#352d1d", "#f6b26b", "#f97316"]
  }
];

const cookie = {
  set(name, value, days = 365) {
    const maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
  },
  get(name) {
    const prefix = `${name}=`;
    const value = document.cookie
      .split("; ")
      .find((item) => item.startsWith(prefix))
      ?.slice(prefix.length);
    return value ? decodeURIComponent(value) : undefined;
  }
};

const state = {
  query: "",
  category: "All",
  theme: cookie.get("vibe-tools-theme") || "aurora",
  compact: cookie.get("vibe-tools-compact") === "true"
};

const toolGrid = document.getElementById("toolGrid");
const filterRow = document.getElementById("filterRow");
const searchInput = document.getElementById("searchInput");
const timelineList = document.getElementById("timelineList");
const heroStats = document.getElementById("heroStats");
const videoGrid = document.getElementById("videoGrid");
const themeGrid = document.getElementById("themeGrid");
const body = document.body;
const settingsDrawer = document.getElementById("settingsDrawer");
const drawerScrim = document.getElementById("drawerScrim");
const compactToggle = document.getElementById("compactToggle");

function renderHeroStats() {
  const categories = new Set(tools.map((tool) => tool.category));
  const earliest = Math.min(...tools.map((tool) => tool.launched));
  const stats = [
    { label: "Tools tracked", value: tools.length },
    { label: "Categories", value: categories.size },
    { label: "History span", value: `${earliest}-2026` }
  ];

  heroStats.innerHTML = stats
    .map(
      (stat) => `
        <div class="stat-chip">
          <strong>${stat.value}</strong>
          <span>${stat.label}</span>
        </div>
      `
    )
    .join("");
}

function renderTimeline() {
  timelineList.innerHTML = timeline
    .map(
      (item) => `
        <article class="timeline-card">
          <div class="timeline-year">${item.year}</div>
          <p>${item.copy}</p>
        </article>
      `
    )
    .join("");
}

function renderFilters() {
  const categories = ["All", ...new Set(tools.map((tool) => tool.category))];
  filterRow.innerHTML = categories
    .map(
      (category) => `
        <button
          class="filter-chip ${state.category === category ? "active" : ""}"
          type="button"
          data-filter="${category}"
        >
          ${category}
        </button>
      `
    )
    .join("");

  filterRow.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.filter;
      renderFilters();
      renderTools();
    });
  });
}

function matchesSearch(tool, query) {
  const haystack = [
    tool.name,
    tool.category,
    tool.summary,
    tool.history,
    tool.bestFor.join(" "),
    tool.workflow.join(" ")
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query.toLowerCase());
}

function renderTools() {
  const filtered = tools.filter((tool) => {
    const categoryOk = state.category === "All" || tool.category === state.category;
    const queryOk = !state.query || matchesSearch(tool, state.query);
    return categoryOk && queryOk;
  });

  if (!filtered.length) {
    toolGrid.innerHTML = `
      <article class="tool-card">
        <div class="tool-copy">
          <h3>No tools matched that search yet</h3>
          <p>Try a broader term like AI IDE, prompt-to-app, terminal, React, or open-source.</p>
        </div>
      </article>
    `;
    return;
  }

  toolGrid.innerHTML = filtered
    .map(
      (tool) => `
        <article class="tool-card">
          <div class="tool-header">
            <div class="tool-copy">
              <div class="tool-meta">
                <span class="meta-pill"><strong>${tool.category}</strong><span>${tool.launched}</span></span>
                <span class="meta-pill"><strong>${tool.maturity}</strong><span>${tool.standout}</span></span>
              </div>
              <h3>${tool.name}</h3>
              <p>${tool.summary}</p>
            </div>
            <div class="tool-mark" aria-hidden="true">${tool.short}</div>
          </div>

          <section>
            <div class="tool-section-title">History</div>
            <p>${tool.history}</p>
          </section>

          <section>
            <div class="tool-section-title">How to use it</div>
            <ol class="workflow-list">
              ${tool.workflow.map((step) => `<li>${step}</li>`).join("")}
            </ol>
          </section>

          <section>
            <div class="tool-section-title">Best for</div>
            <div class="tool-tags">
              ${tool.bestFor.map((tag) => `<span class="tool-tag">${tag}</span>`).join("")}
            </div>
          </section>

          <div class="tool-links">
            <a href="${tool.website}" target="_blank" rel="noreferrer">Website</a>
            <a href="${tool.docs}" target="_blank" rel="noreferrer">Docs</a>
            <a href="${tool.youtube}" target="_blank" rel="noreferrer">${tool.videoTitle}</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderVideos() {
  videoGrid.innerHTML = tools
    .map(
      (tool) => `
        <article class="video-card">
          <p class="eyebrow">${tool.category}</p>
          <h3>${tool.name}</h3>
          <p>${tool.videoTitle}</p>
          <div class="video-links">
            <a href="${tool.youtube}" target="_blank" rel="noreferrer">Open YouTube</a>
            <a href="${tool.website}" target="_blank" rel="noreferrer">Visit tool</a>
          </div>
        </article>
      `
    )
    .join("");
}

function applyTheme(themeId) {
  state.theme = themes.some((theme) => theme.id === themeId) ? themeId : "aurora";
  body.dataset.theme = state.theme;
  cookie.set("vibe-tools-theme", state.theme);
  renderThemes();
}

function renderThemes() {
  themeGrid.innerHTML = themes
    .map(
      (theme) => `
        <button
          class="theme-option ${theme.id === state.theme ? "active" : ""}"
          type="button"
          data-theme="${theme.id}"
        >
          <div class="theme-preview">
            ${theme.colors.map((color) => `<span style="background:${color}"></span>`).join("")}
          </div>
          <strong>${theme.name}</strong>
        </button>
      `
    )
    .join("");

  themeGrid.querySelectorAll("[data-theme]").forEach((button) => {
    button.addEventListener("click", () => applyTheme(button.dataset.theme));
  });
}

function applyCompact(enabled) {
  state.compact = enabled;
  body.classList.toggle("compact", enabled);
  compactToggle.checked = enabled;
  cookie.set("vibe-tools-compact", String(enabled));
}

function openSettings() {
  settingsDrawer.classList.add("open");
  settingsDrawer.setAttribute("aria-hidden", "false");
  drawerScrim.hidden = false;
}

function closeSettings() {
  settingsDrawer.classList.remove("open");
  settingsDrawer.setAttribute("aria-hidden", "true");
  drawerScrim.hidden = true;
}

function cycleTheme() {
  const index = themes.findIndex((theme) => theme.id === state.theme);
  const nextTheme = themes[(index + 1) % themes.length];
  applyTheme(nextTheme.id);
}

document.getElementById("openSettings").addEventListener("click", openSettings);
document.getElementById("closeSettings").addEventListener("click", closeSettings);
document.getElementById("themeToggle").addEventListener("click", cycleTheme);
drawerScrim.addEventListener("click", closeSettings);
compactToggle.addEventListener("change", (event) => applyCompact(event.target.checked));

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderTools();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && settingsDrawer.classList.contains("open")) {
    closeSettings();
  }
});

renderHeroStats();
renderTimeline();
renderFilters();
renderTools();
renderVideos();
renderThemes();
applyTheme(state.theme);
applyCompact(state.compact);
