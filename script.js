const roadmap = [
  {
    id: "foundations",
    number: 1,
    title: "Foundations",
    label: "Base skills",
    goal: "Learn the language, the ML vocabulary, and the tools you will use every day.",
    explainer: "This stage is about getting comfortable with Python, notebook-based experimentation, and the difference between common ML problem types.",
    project: "Create a notebook that loads a small dataset, explores it with Pandas, and explains whether the task is classification or regression.",
    ready: "You can read a dataset, inspect columns, run basic analysis, and explain what problem you are solving.",
    why: "Without strong foundations, later model-building feels like memorizing recipes instead of understanding how systems behave.",
    outcomes: [
      "Use Python syntax comfortably for data tasks.",
      "Manipulate tables with NumPy and Pandas.",
      "Recognize classification and regression problems.",
      "Use Jupyter Notebook for experiments."
    ],
    topics: [
      "Python (NumPy, Pandas)",
      "ML Basics: Classification vs Regression",
      "Tools: Jupyter Notebook"
    ],
    tags: ["Python", "Notebook", "Data Basics"]
  },
  {
    id: "data-handling",
    number: 2,
    title: "Data Handling",
    label: "Prepare input",
    goal: "Turn messy raw data into something models can actually learn from.",
    explainer: "Most AI work begins here. You clean broken rows, remove duplicate values, create stronger features, and encode categories into numbers.",
    project: "Take a CSV with missing values and categories, clean it, engineer a few useful columns, and prepare it for training.",
    ready: "Your training data is consistent, usable, and stored in a repeatable preprocessing workflow.",
    why: "A simple model with clean data often beats a complex model trained on noisy inputs.",
    outcomes: [
      "Detect missing values and duplicates.",
      "Create better predictive columns from raw inputs.",
      "Apply one-hot and label encoding correctly.",
      "Build a preprocessing pipeline you can reuse."
    ],
    topics: [
      "Data Cleaning (missing, duplicates)",
      "Feature Engineering",
      "Encoding (One-hot, Label)"
    ],
    tags: ["Cleaning", "Features", "Encoding"]
  },
  {
    id: "core-models",
    number: 3,
    title: "Core ML Models",
    label: "First models",
    goal: "Understand the main model families and when to use each one.",
    explainer: "You do not need dozens of algorithms at first. Learn what classification, regression, and clustering are trying to do, then build confidence with a small core set.",
    project: "Train one classification model, one regression model, and one clustering model on separate toy datasets, then compare their outputs.",
    ready: "You can choose a model type based on the task and explain the result in simple language.",
    why: "This is where ML stops being abstract and becomes a working prediction system.",
    outcomes: [
      "Use logistic regression and random forest for classification.",
      "Use linear regression for numeric prediction.",
      "Use K-Means for grouping unlabeled data.",
      "Compare outputs and basic performance."
    ],
    topics: [
      "Classification: Logistic Regression, Random Forest",
      "Regression: Linear Regression",
      "Clustering: K-Means"
    ],
    tags: ["Classification", "Regression", "Clustering"]
  },
  {
    id: "build-first-tools",
    number: 4,
    title: "Build First Tools",
    label: "Project practice",
    goal: "Convert model knowledge into small user-facing tools.",
    explainer: "Projects make the roadmap feel real. Pick simple tools with clear input and output so you learn how ML behaves in context.",
    project: "Build one small app such as an email classifier, resume screener, or rule-assisted chatbot with a basic interface.",
    ready: "Someone else can try your tool and understand what it does without reading your code.",
    why: "Projects reveal practical gaps in data handling, evaluation, and UX that theory alone will not show.",
    outcomes: [
      "Wrap ML logic inside a simple application flow.",
      "Handle user input and show predictions clearly.",
      "Choose one problem and ship a basic version.",
      "Document what your model can and cannot do."
    ],
    topics: [
      "Email Classifier",
      "Resume Screener",
      "Basic Chatbot"
    ],
    tags: ["Projects", "Apps", "UX"]
  },
  {
    id: "backend-integration",
    number: 5,
    title: "Backend Integration",
    label: "Serve models",
    goal: "Expose your models through APIs so other apps can use them.",
    explainer: "This stage connects ML to real software. Instead of running notebooks manually, you turn prediction logic into endpoints that frontend apps and services can call.",
    project: "Build an API endpoint that receives input, runs model inference, and returns a clean JSON response to a frontend page.",
    ready: "Your model runs outside a notebook and can be accessed through a stable API.",
    why: "Deployment begins when your model becomes a service, not just a local experiment.",
    outcomes: [
      "Build APIs with FastAPI or Node.",
      "Connect a frontend form to model inference.",
      "Return predictable JSON responses.",
      "Deploy the endpoint for external use."
    ],
    topics: [
      "Build APIs (FastAPI / Node)",
      "Connect frontend to ML models",
      "Deploy endpoints"
    ],
    tags: ["API", "Backend", "Deployment"]
  },
  {
    id: "automation-layer",
    number: 6,
    title: "Automation Layer",
    label: "Decide and trigger",
    goal: "Combine models with rules, schedules, and decision flows.",
    explainer: "Automation is where AI becomes operational. You blend predictions with logic, timing, and actions that trigger without constant manual input.",
    project: "Create a scheduled workflow that reads new data, applies rules plus AI logic, and sends a decision or alert automatically.",
    ready: "Your system can run repeatedly on its own and make controlled decisions from incoming data.",
    why: "Many useful AI products are not just smart models; they are dependable automated workflows.",
    outcomes: [
      "Mix rules with AI-generated decisions.",
      "Use cron-like scheduling for repeated jobs.",
      "Design automated decision paths.",
      "Track what happened after each run."
    ],
    topics: [
      "Rules + AI combination",
      "Cron jobs for scheduling",
      "Auto decision systems"
    ],
    tags: ["Automation", "Scheduling", "Decisioning"]
  },
  {
    id: "llm-tools",
    number: 7,
    title: "LLM Tools",
    label: "Language systems",
    goal: "Use large language models for prompt-based tools and knowledge workflows.",
    explainer: "This stage shifts from traditional ML into language-first systems. You learn prompting, API usage, and retrieval-based setups that make responses more grounded.",
    project: "Build a small assistant that uses prompts, calls an LLM API, and optionally answers questions from a custom document set.",
    ready: "You can design prompts, call an LLM service, and explain when to use RAG instead of pure prompting.",
    why: "LLMs unlock chat, summarization, extraction, and agent-like workflows that are now central to modern AI products.",
    outcomes: [
      "Write purposeful prompts.",
      "Use an LLM API inside an app.",
      "Understand RAG system basics.",
      "Decide when external context is needed."
    ],
    topics: [
      "Prompt Engineering",
      "OpenAI API usage",
      "RAG systems"
    ],
    tags: ["LLM", "Prompting", "RAG"]
  },
  {
    id: "vector-databases",
    number: 8,
    title: "Vector Databases",
    label: "Retrieve meaning",
    goal: "Store and search embeddings so language tools can find relevant context.",
    explainer: "Vector databases power semantic search and many retrieval systems. You learn what embeddings are and how similarity search helps LLM apps become more useful.",
    project: "Index a small document collection, generate embeddings, and build semantic search that returns the most relevant passages.",
    ready: "You can explain embeddings, build similarity search, and connect retrieved results back into an app.",
    why: "Once you work with large document sets, keyword search becomes limiting and semantic retrieval matters more.",
    outcomes: [
      "Understand embedding vectors.",
      "Use tools such as Pinecone or FAISS.",
      "Build semantic search flows.",
      "Feed relevant context into LLM tools."
    ],
    topics: [
      "Embeddings concept",
      "Tools: Pinecone, FAISS",
      "Semantic search systems"
    ],
    tags: ["Embeddings", "Vector DB", "Search"]
  },
  {
    id: "advanced-systems",
    number: 9,
    title: "Advanced Systems",
    label: "End-to-end design",
    goal: "Design full-stack AI products that connect every layer together.",
    explainer: "At this point you are thinking in systems, not isolated components. Frontend, backend, model, database, and deployment all need to work together cleanly.",
    project: "Plan and build an end-to-end AI product with a UI, an API layer, model logic, storage, and deployment workflow.",
    ready: "You can diagram the architecture, explain how data flows through it, and identify the weak points before launch.",
    why: "Production AI work depends on system design just as much as model choice.",
    outcomes: [
      "Design a complete AI architecture.",
      "Connect frontend, backend, ML, and database layers.",
      "Plan deployment pipelines.",
      "Reason about scale, latency, and maintainability."
    ],
    topics: [
      "Full stack AI architecture",
      "Frontend + Backend + ML + DB",
      "Deployment pipelines"
    ],
    tags: ["Architecture", "Full Stack", "Pipelines"]
  },
  {
    id: "scale-monitor",
    number: 10,
    title: "Scale & Monitor",
    label: "Keep it healthy",
    goal: "Measure production behavior and improve the system over time.",
    explainer: "A shipped model is not finished. You need monitoring, feedback loops, and ways to react when data changes or model quality drops.",
    project: "Add logs, dashboards, and review signals to an existing AI system so you can spot failures, drift, and improvement opportunities.",
    ready: "You have a process for observing quality, detecting drift, and shipping better versions safely.",
    why: "Reliable AI products depend on maintenance and iteration, not just first-release accuracy.",
    outcomes: [
      "Monitor system performance in production.",
      "Detect and respond to model drift.",
      "Set up continuous improvement loops.",
      "Use real feedback to guide retraining or prompt updates."
    ],
    topics: [
      "Monitor performance",
      "Handle model drift",
      "Continuous improvement"
    ],
    tags: ["Monitoring", "Drift", "Iteration"]
  }
];

const stageNav = document.getElementById("stageNav");
const roadmapList = document.getElementById("roadmapList");
const detailTitle = document.getElementById("detailTitle");
const detailContent = document.getElementById("detailContent");
const searchInput = document.getElementById("searchInput");
const stageCount = document.getElementById("stageCount");
const visibleStageCount = document.getElementById("visibleStageCount");
const currentFocus = document.getElementById("currentFocus");
const expandToggle = document.getElementById("expandToggle");
const template = document.getElementById("stageCardTemplate");

let activeId = roadmap[0].id;
let expandAll = false;
let filteredRoadmap = [...roadmap];

function renderNavigation(stages) {
  stageNav.innerHTML = "";

  stages.forEach((stage) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `nav-link${stage.id === activeId ? " active" : ""}`;
    button.dataset.stageId = stage.id;
    button.innerHTML = `
      <strong>${stage.number}. ${stage.title}</strong>
      <span>${stage.label}</span>
    `;
    button.addEventListener("click", () => {
      activeId = stage.id;
      renderAll();
      scrollStageIntoView(stage.id);
    });
    stageNav.appendChild(button);
  });
}

function renderRoadmap(stages) {
  roadmapList.innerHTML = "";

  if (!stages.length) {
    roadmapList.innerHTML = `
      <div class="empty-state">
        <p>No stages match that search yet. Try a topic like <strong>RAG</strong>, <strong>API</strong>, or <strong>Python</strong>.</p>
      </div>
    `;
    return;
  }

  stages.forEach((stage) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".stage-card");
    const summary = fragment.querySelector(".stage-summary");
    const chip = fragment.querySelector(".stage-chip");
    const title = fragment.querySelector("h3");
    const goal = fragment.querySelector(".stage-goal");
    const topics = fragment.querySelector(".topic-list");
    const explainer = fragment.querySelector(".stage-explainer");
    const project = fragment.querySelector(".stage-project");
    const ready = fragment.querySelector(".stage-ready");

    card.id = stage.id;
    card.classList.toggle("active", stage.id === activeId);
    card.classList.toggle("expanded", expandAll || stage.id === activeId);

    chip.textContent = `Stage ${stage.number}`;
    title.textContent = stage.title;
    goal.textContent = stage.goal;
    explainer.textContent = stage.explainer;
    project.textContent = stage.project;
    ready.textContent = stage.ready;

    stage.topics.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      topics.appendChild(li);
    });

    summary.addEventListener("click", () => {
      activeId = stage.id;
      renderAll();
    });

    roadmapList.appendChild(fragment);
  });
}

function renderDetails(stage) {
  if (!stage) {
    detailTitle.textContent = "No matching stage";
    detailContent.innerHTML = `
      <div class="empty-state">
        <p>Choose a roadmap stage to view a detailed explanation.</p>
      </div>
    `;
    currentFocus.textContent = "None";
    return;
  }

  detailTitle.textContent = `${stage.number}. ${stage.title}`;
  currentFocus.textContent = stage.title;

  detailContent.innerHTML = `
    <div class="detail-summary">
      <p class="detail-copy"><span class="detail-label">Goal:</span> ${stage.goal}</p>
      <p class="detail-copy"><span class="detail-label">Why it matters:</span> ${stage.why}</p>
    </div>

    <section class="detail-section">
      <h3>What You Should Understand</h3>
      <p class="detail-copy">${stage.explainer}</p>
    </section>

    <section class="detail-section">
      <h3>Key Outcomes</h3>
      <ul class="outcome-list">
        ${stage.outcomes.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <section class="detail-section">
      <h3>Topics From The Roadmap</h3>
      <ul class="detail-list">
        ${stage.topics.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <section class="detail-section">
      <h3>Suggested Practice Build</h3>
      <p class="detail-copy">${stage.project}</p>
    </section>

    <section class="detail-section">
      <h3>Signals You Are Ready To Move On</h3>
      <p class="detail-copy">${stage.ready}</p>
    </section>

    <section class="detail-section">
      <h3>Focus Tags</h3>
      <div class="detail-tags">
        ${stage.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
    </section>
  `;
}

function renderStats(stages) {
  stageCount.textContent = roadmap.length.toString();
  visibleStageCount.textContent = stages.length.toString();
}

function renderAll() {
  const selected = filteredRoadmap.find((stage) => stage.id === activeId) || filteredRoadmap[0];

  if (selected) {
    activeId = selected.id;
  }

  renderNavigation(filteredRoadmap);
  renderRoadmap(filteredRoadmap);
  renderDetails(selected);
  renderStats(filteredRoadmap);
}

function scrollStageIntoView(stageId) {
  const stageElement = document.getElementById(stageId);
  stageElement?.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

searchInput.addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();

  filteredRoadmap = roadmap.filter((stage) => {
    const haystack = [
      stage.title,
      stage.label,
      stage.goal,
      stage.explainer,
      stage.project,
      stage.ready,
      stage.why,
      ...stage.topics,
      ...stage.outcomes,
      ...stage.tags
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  });

  renderAll();
});

expandToggle.addEventListener("click", () => {
  expandAll = !expandAll;
  expandToggle.title = expandAll ? "Collapse all stages" : "Expand all stages";
  expandToggle.setAttribute("aria-label", expandAll ? "Collapse all stages" : "Expand all stages");
  renderRoadmap(filteredRoadmap);
});

renderAll();
