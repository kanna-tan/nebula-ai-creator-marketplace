// Centralized UI Text, Configuration, Options, and Dynamic Builders for NEBULA
// Eliminates hardcoded strings and magic values across all React components.

import { BRIEF_TEMPLATES } from '../data/briefs';

export const BRAND_CONFIG = {
  name: 'NEBULA',
  tagline: 'The Ethereal Creator Exchange',
  logoMark: 'N',
  logoIcon: 'N',
  currencySymbol: '₹',
  currencyCode: 'INR',
  currencyLocale: 'en-IN',
  footerNote: 'Designed for Celestial Creative Production • 2026',
  defaultBrandName: 'Lumina Atelier',
  defaultBrandLogo: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=150&q=80',
  footerLinks: {
    dataModel: 'Data Model Architecture Spec',
    pitchDeck: 'Pitch & Demo Slides',
    aiBuilder: 'Bonus AI Brief Builder'
  }
};

export const TABS = {
  CREATORS: 'creators',
  BRIEFS: 'briefs',
  AI_BUILDER: 'ai-builder',
  ENGAGEMENTS: 'engagements'
};

export const NAV_ITEMS = [
  {
    id: TABS.CREATORS,
    label: 'Creators & Portfolios',
    mobileLabel: 'Creators',
    iconKey: 'compass'
  },
  {
    id: TABS.BRIEFS,
    label: 'Brand Briefs',
    mobileLabel: 'Briefs',
    iconKey: 'briefcase'
  },
  {
    id: TABS.AI_BUILDER,
    label: 'AI Brief Studio',
    mobileLabel: 'AI Studio',
    iconKey: 'sparkles',
    badge: 'Bonus'
  },
  {
    id: TABS.ENGAGEMENTS,
    label: 'Engagements',
    mobileLabel: 'Projects',
    iconKey: 'layers',
    showPulse: true
  }
];

export const COLOR_GRADES = {
  ORDER: ['champagne', 'amethyst', 'aurora'],
  PRESETS: {
    champagne: { label: 'Celestial Champagne', icon: '🌟', badge: 'Warm Cream' },
    amethyst: { label: 'Mystic Amethyst', icon: '🔮', badge: 'Cosmic Violet' },
    aurora: { label: 'Aurora Stardust', icon: '🌌', badge: 'Moonstone Jade' }
  }
};

export const NAVBAR_TEXT = {
  colorGradeTooltipPrefix: 'Active Atmosphere:',
  colorGradeTooltipSuffix: '(Click to change color grading)',
  mobileGradeLabel: 'Grade',
  mobileGradeTooltip: 'Cycle Atmosphere Color Grade',
  dataModelBtn: 'Data Model',
  dataModelTooltip: 'Deliverable: Profile & Brief Data Model Note',
  pitchSlidesBtn: 'Pitch Slides',
  pitchSlidesTooltip: 'Deliverable: Presentation & Demo Slides (10% criteria)',
  postBriefBtn: 'Post Brief'
};

export const HERO_CONFIG = {
  pillBadge: 'The Celestial Creative Economy • ₹ INR Settlements',
  headlineLine1: 'Where Generative Vision',
  headlineHighlight: 'Meets Celestial Craft',
  subtitle:
    'Discover vetted AI filmmakers, virtual fashion creators, and procedural artists. Inspect multi-model ComfyUI pipelines, verify generation seeds, and license commercial-ready IP.',
  searchPlaceholder:
    'Search by model (e.g. Flux.1, Runway Gen-3), skill, or style (e.g. Celestial, Fashion)...',
  clearBtn: 'Clear',
  exploreBtn: 'Explore',
  popularPromptsLabel: 'Popular prompts:',
  popularPrompts: [
    { label: 'Flux.1 Pro', query: 'Flux.1 Pro' },
    { label: 'Runway Gen-3', query: 'Runway Gen-3' },
    { label: 'ComfyUI Workflows', query: 'ComfyUI' },
    { label: 'Haute Couture', query: 'Haute Couture' }
  ],
  trustBadges: [
    {
      id: 'nodes',
      iconKey: 'cpu',
      title: 'Reproducible Nodes',
      subtitle: 'ComfyUI Graph Verified'
    },
    {
      id: 'clearance',
      iconKey: 'shield',
      title: 'Commercial Clearance',
      subtitle: '100% IP Warrantied'
    },
    {
      id: 'consistency',
      iconKey: 'award',
      title: 'Identity Consistency',
      subtitle: '99%+ 10-Shot Benchmark'
    },
    {
      id: 'ai-studio',
      iconKey: 'sparkles',
      title: 'AI Brief Studio',
      tag: 'New',
      subtitle: 'Generate Brief in 10s →',
      isAction: true
    }
  ]
};

export const DIRECTORY_CONFIG = {
  sectionId: 'creators-section',
  defaults: {
    contentType: 'All Types',
    tool: 'All Tools',
    specialization: 'All Specializations',
    sortBy: 'rating'
  },
  labels: {
    filterMedium: 'Filter Medium:',
    allToolsOption: 'All AI Tools & Models',
    verifiedOnlyToggle: 'Verified Workflows Only',
    creatorSingular: 'creator found',
    creatorPlural: 'creators found',
    resetFiltersTooltip: 'Reset all filters'
  },
  sortOptions: [
    { value: 'rating', label: 'Highest Rated' },
    { value: 'jobs', label: 'Most Completed Jobs' },
    { value: 'rate_asc', label: 'Starting Rate: Low to High' }
  ],
  emptyState: {
    icon: '🌌',
    title: 'No Creators Matching Your Cosmic Query',
    descriptionPrefix:
      "We couldn't find verified AI creators with the exact combination of filters:",
    resetBtn: 'Reset All Filters',
    fallbackSearchLabel: 'Search "Flux.1"',
    fallbackSearchQuery: 'Flux.1'
  },
  card: {
    verifiedTooltip: 'Verified AI Workflow: ComfyUI & Seed Reproducibility Tested',
    reviewsSuffix: 'reviews',
    startingProjectLabel: 'starting project',
    verifiedToolchainBadge: 'Verified Toolchain',
    commercialClearedBadge: '100% Commercial IP Cleared',
    toolchainHeader: 'Generative Toolchain & Models:',
    apiVerifiedTooltip: 'API Verified',
    portfolioHeader: 'Selected AI Generations:',
    portfolioSubheader: 'Click to inspect workflow & prompts',
    jobsDeliveredSuffix: 'commercial jobs delivered',
    viewProfileBtn: 'View Profile & Nodes'
  }
};

export const CREATOR_MODAL_CONFIG = {
  verifiedTooltip: 'Verified Pipeline: ComfyUI node graphs verified by Nebula',
  reviewsSuffix: 'verified reviews',
  engageBtn: 'Engage Creator',
  verificationBannerTitle: 'Nebula Cryptographic & Manual Verification Signals',
  verificationMetrics: {
    consistency: {
      label: 'Identity Consistency',
      subtext: '10-shot multi-angle facial lock benchmark'
    },
    clearance: {
      label: 'Commercial Clearance',
      value: '100% IP Warrantied',
      subtext: 'Zero copyright flags, clean base models'
    },
    trackRecord: {
      label: 'Track Record',
      valueSuffix: 'Brand Deliveries',
      subtext: '100% on-time milestone release'
    }
  },
  visionHeader: 'Creative Vision & Workflow Philosophy',
  toolchainHeader: 'Verified Toolchain',
  toolchainBadge: 'Enterprise API Active',
  skillsHeader: 'Granular AI Competencies',
  revisionLabel: 'Average Revision Rounds:',
  turnaroundLabel: 'Average Turnaround:',
  portfolioHeader: 'Verified Portfolio & Workflow Graphs',
  portfolioSubtitle:
    'Every piece contains verifiable generation seeds, positive/negative prompts, and node graphs.',
  showcasesSuffix: 'showcases',
  clientPrefix: 'Client:',
  stackPrefix: 'Stack:',
  inspectBtn: 'Inspect Nodes →'
};

export const PORTFOLIO_MODAL_CONFIG = {
  createdByPrefix: 'Created by',
  forClientPrefix: 'for',
  stackLabel: 'Stack:',
  savesSuffix: 'saves',
  reproducibleBadge: 'Reproducible Graph',
  ctaTitle: 'Want similar aesthetic for your campaign?',
  ctaSubtitlePrefix: 'Engage',
  ctaSubtitleSuffix: 'through Nebula Escrow',
  hireBtn: 'Hire This Creator',
  tabs: {
    workflow: { id: 'workflow', label: 'Workflow Pipeline' },
    prompt: { id: 'prompt', label: 'Prompt Architecture' }
  },
  workflowHeader: 'Multi-Model Node Sequence:',
  workflowBadge: 'ComfyUI Graph Verified',
  nodePrefix: 'Node #',
  paramsHeader: 'Generation Parameters & Seeds',
  paramLabels: {
    seed: 'Seed:',
    sampler: 'Sampler:',
    cfgScale: 'CFG Scale:',
    steps: 'Steps:'
  },
  positivePromptHeader: 'Positive Prompt Engineering:',
  copyPromptBtn: 'Copy Prompt',
  copiedBtn: 'Copied!',
  negativePromptHeader: 'Negative Tokens (Artifact Pruning):',
  ipVerifiedTitle: 'Commercial IP Clearance Verified',
  ipVerifiedBody:
    'Generated using commercially licensed base models. The client received full intellectual property buyout with indemnified copyright representations.'
};

export const BRIEFS_HUB_CONFIG = {
  badge: 'Marketplace RFPs & Briefs',
  title: 'Brand & Agency Creative Briefs',
  subtitle:
    'Browse verified commercial commissions from global brands. Every brief includes clear aspect ratios, IP buyout terms, and deliverable specs.',
  aiBuilderBtn: 'AI Brief Builder',
  publishBtn: 'Publish New Brief',
  defaultFilter: 'All',
  filterCategories: ['All', 'Video', 'Still Photography', 'Animation'],
  allCategoryLabel: 'All Active Briefs',
  openBriefsSuffix: 'briefs open',
  proposalsSuffix: 'proposals',
  formatLabel: 'Format & Aspect Ratio:',
  typeStyleLabel: 'Content Type & Style:',
  licensingLabel: 'Commercial IP Licensing:',
  requirementPrefix: 'Requirement:',
  toolStackLabel: 'Tool Stack:',
  submitProposalBtn: 'Submit Proposal',
  modal: {
    successTitle: 'Proposal Transmitted to Starlight Vault',
    successSubtitlePrefix:
      'Your creative pitch, ComfyUI workflow architecture, and rate have been presented to',
    headerBadge: 'Submit Creative Proposal',
    brandPrefix: 'Brand:',
    budgetPrefix: 'Budget:',
    bidTurnaroundLabel: 'Your Bid & Turnaround',
    bidPlaceholder: 'Bid Amount (₹)',
    turnaroundPlaceholder: 'Turnaround (e.g. 4 Days)',
    toolchainLabel: 'Proposed AI Toolchain & Models',
    toolchainPlaceholder: 'e.g. Flux.1 LoRA + Runway Gen-3 + Topaz Video AI',
    pitchLabel: 'Pitch & Consistency Assurance',
    pitchPlaceholder:
      'Explain how you will achieve consistency, your pipeline reproducibility, and deliverables...',
    escrowNotice:
      'By submitting, you agree to escrow-backed milestone releases and Nebula Commercial IP Indemnification.',
    cancelBtn: 'Cancel',
    sendBtn: 'Send Proposal'
  }
};

// Dynamic proposal builder based on selected brief and active creator
export function buildDefaultProposal(brief, defaultCreator) {
  const budgetMatch = brief?.budget?.match(/₹[\d,]+/);
  const suggestedBid = budgetMatch ? budgetMatch[0] : defaultCreator?.startingProjectRate || '';
  const suggestedTools = brief?.requiredTools?.length
    ? brief.requiredTools.join(' + ')
    : defaultCreator?.tools?.map((t) => t.name).slice(0, 3).join(' + ') || '';
  const turnaround = defaultCreator?.metrics?.avgTurnaround || '';
  const consistency = defaultCreator?.verificationSignals?.consistencyScore || '99%+ Identity Lock';

  return {
    creatorName: defaultCreator?.name || '',
    bidAmount: suggestedBid,
    turnaroundDays: turnaround,
    toolPipeline: suggestedTools,
    pitchMessage: brief
      ? `Delivering "${brief.title}" with ${consistency} and reproducible ComfyUI node graphs tailored for ${brief.formatAspectRatio}.`
      : ''
  };
}

export const CREATE_BRIEF_CONFIG = {
  headerTitle: 'Publish Brand Creative Brief',
  headerSubtitle:
    'Define your generative campaign specs, aspect ratios, tools, and commercial-use terms.',
  successTitle: 'Creative Brief Published',
  successSubtitle:
    'Your commission is now listed on Nebula. Verified creators will begin submitting multi-model pipelines.',
  contentTypes: [
    'Cinematic Video',
    'Animation / Motion',
    'Still Photography',
    '3D Product Visual'
  ],
  licenseTypes: [
    'Full Global Buyout (Perpetual Broadcast & Digital)',
    '2-Year Worldwide Digital & Paid Social Exclusive',
    'Non-Exclusive Commercial Royalty-Free'
  ],
  defaultFormState: {
    title: '',
    brand: '',
    contentType: 'Cinematic Video',
    style: '',
    formatAspectRatio: '',
    budgetMin: '',
    budgetMax: '',
    deadlineDays: '10',
    licenseType: 'Full Global Buyout (Perpetual Broadcast & Digital)',
    rawAssetsDelivery: '',
    requiredTools: '',
    campaignDescription: '',
    deliverables: ''
  },
  labels: {
    title: 'Campaign Title *',
    brand: 'Brand / Agency Name *',
    contentType: 'Content Type *',
    style: 'Style & Aesthetic Direction *',
    formatAspectRatio: 'Delivery Formats & Aspect Ratios *',
    budgetAndTimeline: 'Budget Range (INR ₹) & Timeline *',
    commercialHeader: 'Commercial-Use & IP Terms (Required by Nebula)',
    licenseType: 'Licensing Scope',
    rawAssetsDelivery: 'Raw Assets & Seed Manifest Delivery',
    campaignDescription: 'Campaign Narrative & Vision Brief *',
    requiredTools: 'Preferred Generative Tools / Models (Comma separated)',
    deliverables: 'Deliverables Checklist (Comma separated)',
    cancelBtn: 'Cancel',
    submitBtn: 'Publish Brief'
  },
  placeholders: {
    title: 'e.g. Starlight Eau de Parfum Autumn Reel',
    brand: "e.g. Maison de L'Aether",
    style: 'e.g. Mystical Ethereal, Celestial Glow, Haute Couture',
    formatAspectRatio: 'e.g. 16:9 Cinema 4K + 9:16 Social Cutdown',
    budgetMin: 'Min (₹) e.g. 350000',
    budgetMax: 'Max (₹) e.g. 600000',
    rawAssetsDelivery: 'e.g. Prompt Logs, Seed Manifest, ComfyUI Workflow JSON',
    campaignDescription:
      'Detail the creative vision, scene breakdowns, character requirements, lighting, and mood...',
    requiredTools: 'e.g. Flux.1 Pro, Runway Gen-3, Topaz Video AI, ComfyUI',
    deliverables: 'e.g. 45s Master 4K Film, 3x 15s Cutdowns, Prompt JSON Manifest'
  },
  defaultsOnBuild: {
    status: 'Open for Proposals',
    postedDate: 'Just now',
    deadlineSuffix: 'days left',
    modelTrainingClause: 'No training of 3rd party AI on client assets',
    indemnity: '100% Commercially Cleared Weights Warranty',
    fallbackStyle: 'Mystical Ethereal & Luxury Starlight',
    fallbackFormat: '16:9 Cinema (3840x2160) + 9:16 Social Cutdown',
    fallbackRawAssets: 'Prompt Logs, Seed Manifest, ComfyUI Workflow JSON required',
    fallbackTools: ['Flux.1 Pro', 'Runway Gen-3', 'ComfyUI'],
    fallbackDeliverables: ['Master 4K Render', 'Social Cutdowns', 'Seed Manifest JSON'],
    baseTags: ['New Brief', 'Commercial']
  }
};

export function buildBriefFromForm(formData) {
  const d = CREATE_BRIEF_CONFIG.defaultsOnBuild;
  const minFormatted = Number(formData.budgetMin || 0).toLocaleString(BRAND_CONFIG.currencyLocale);
  const maxFormatted = Number(formData.budgetMax || 0).toLocaleString(BRAND_CONFIG.currencyLocale);

  const parsedDeliverables = formData.deliverables
    ? formData.deliverables.split(',').map((s) => s.trim()).filter(Boolean)
    : d.fallbackDeliverables;

  const parsedTools = formData.requiredTools
    ? formData.requiredTools.split(',').map((s) => s.trim()).filter(Boolean)
    : d.fallbackTools;

  return {
    id: `brief-${Date.now()}`,
    title: formData.title.trim(),
    brand: formData.brand.trim() || BRAND_CONFIG.defaultBrandName,
    brandLogo: BRAND_CONFIG.defaultBrandLogo,
    status: d.status,
    postedDate: d.postedDate,
    deadline: `${formData.deadlineDays} ${d.deadlineSuffix}`,
    budget: `${BRAND_CONFIG.currencySymbol}${minFormatted} - ${BRAND_CONFIG.currencySymbol}${maxFormatted}`,
    proposalsCount: 0,
    contentType: formData.contentType,
    style: formData.style.trim() || d.fallbackStyle,
    formatAspectRatio: formData.formatAspectRatio.trim() || d.fallbackFormat,
    commercialRequirements: {
      licenseType: formData.licenseType,
      rawAssetsDelivery: formData.rawAssetsDelivery.trim() || d.fallbackRawAssets,
      modelTrainingClause: d.modelTrainingClause,
      indemnity: d.indemnity
    },
    campaignDescription: formData.campaignDescription.trim(),
    deliverables: parsedDeliverables,
    requiredTools: parsedTools,
    tags: [...d.baseTags, formData.contentType.split(' ')[0]]
  };
}

export const AI_BUILDER_CONFIG = {
  badge: 'Bonus Feature • AI-Assisted Brief Builder',
  titleLine1: 'Transform a Rough Idea into a',
  titleHighlight: 'Structured Creative Brief',
  subtitle:
    'Type one sentence. Our generative reasoning engine derives toolchains, aspect ratios, milestones, and commercial licensing clauses automatically.',
  inputLabel: 'Enter Rough Creative Concept / Campaign Spark:',
  inputHint: 'Natural language supported',
  inputPlaceholder:
    'e.g. An ethereal perfume commercial set in a stardust galaxy with champagne-cream fluid ribbons and floating quartz crystal...',
  presetsLabel: 'Need inspiration? Try a preset:',
  generatingBtn: 'Synthesizing Architecture...',
  synthesizeBtn: 'Synthesize Structured Brief',
  resultBadge: 'Structured Generative Brief Synthesized',
  estimatedBudgetLabel: 'Estimated Budget:',
  mediumLabel: 'Medium:',
  copyBtn: 'Copy JSON',
  copiedBtn: 'Copied',
  publishBtn: 'Publish to Marketplace',
  publishedBtn: 'Published to Marketplace!',
  publishedBanner:
    '✨ This creative brief is now live in the Brand Briefs Hub! Creators can submit proposals.',
  headers: {
    creativeDirection: 'Creative Direction & Tone',
    toolStack: 'Recommended Generative Tool Stack',
    aspectRatios: 'Aspect Ratios & Master Resolutions',
    commercialTerms: 'Commercial Use & IP Buyout Terms',
    deliveryPrefix: 'Delivery:',
    ethicsPrefix: 'AI Ethics Clause:',
    milestones: 'Milestone & Deliverable Matrix'
  },
  samplePrompts: BRIEF_TEMPLATES.map((t) => ({
    id: t.id,
    title: t.name,
    text: t.promptIdea,
    suggestedBudget: t.suggestedBudget,
    contentType: t.contentType,
    style: t.style,
    aspectRatio: t.aspectRatio
  })),
  synthesisProfiles: {
    automotive: {
      keywords: ['car', 'hypercar', 'ev', 'vehicle', 'automotive'],
      titlePrefix: 'Celestial EV Premiere',
      toolStack: ['ControlNet CAD Pass', 'Flux.1 Pro', 'Runway Gen-3', 'Topaz Video AI 5'],
      budget: '₹5,80,000 - ₹9,20,000',
      style: 'Sci-Fi Realism & Clean Brutalism'
    },
    fashion: {
      keywords: ['fashion', 'runway', 'muse', 'couture', 'dress', 'garment', 'model'],
      titlePrefix: 'Haute Couture Narrative',
      toolStack: ['Flux.1 Custom LoRA (FaceID)', 'Runway Gen-3', 'ComfyUI FILM', 'DaVinci Resolve'],
      budget: '₹4,50,000 - ₹7,00,000',
      style: 'Haute Couture & Celestial Surrealism'
    },
    still: {
      keywords: ['still', 'photograph', 'frames', 'print', 'billboard', 'editorial', 'macro'],
      titlePrefix: 'Editorial Still Series',
      toolStack: ['Flux.1 Pro', 'Midjourney v6.1', 'Magnific AI', 'Capture One'],
      budget: '₹2,50,000 - ₹4,20,000',
      style: 'High-End Editorial Photography & Alabaster Tones'
    },
    default: {
      titlePrefix: 'Ethereal Campaign Film',
      toolStack: ['Flux.1 Dev', 'Kling 1.5 Pro', 'Topaz Video AI 5', 'ElevenLabs Neural Audio'],
      budget: '₹3,80,000 - ₹5,80,000',
      style: 'Mystical Ethereal, Cream Alabaster, Celestial Galaxy Glow'
    }
  }
};

export function synthesizeBriefFromPrompt(promptInput) {
  const lower = promptInput.toLowerCase();
  const profiles = AI_BUILDER_CONFIG.synthesisProfiles;

  const isStill = profiles.still.keywords.some((k) => lower.includes(k));
  const isAuto = profiles.automotive.keywords.some((k) => lower.includes(k));
  const isFashion = profiles.fashion.keywords.some((k) => lower.includes(k));

  const activeProfile = isAuto
    ? profiles.automotive
    : isFashion
    ? profiles.fashion
    : isStill
    ? profiles.still
    : profiles.default;

  // Derive a clean dynamic title from the user's own prompt words + profile prefix
  const cleanedWords = promptInput
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 3)
    .slice(0, 4)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');

  const dynamicTitle = cleanedWords
    ? `${activeProfile.titlePrefix}: ${cleanedWords}`
    : activeProfile.titlePrefix;

  const formatAspectRatio = isStill
    ? '4:5 Portrait Editorial (4000x5000) + 16:9 Billboard Ultrawide'
    : '16:9 Cinema Master (3840x2160) + 9:16 Social Cutdown (1080x1920 60fps)';

  return {
    title: dynamicTitle,
    brand: BRAND_CONFIG.defaultBrandName,
    rawIdea: promptInput,
    contentType: isStill ? 'Still Photography' : 'Cinematic Video',
    styleAesthetic: activeProfile.style,
    formatAspectRatio,
    budget: activeProfile.budget,
    recommendedToolStack: activeProfile.toolStack,
    creativeNarrative: `Synthesized from concept: "${promptInput}". Engineered for multi-shot visual coherence, calibrated lighting refractions, and reproducible node execution.`,
    deliverablesList: [
      isStill ? '8x 16-bit Master TIFF Editorial Stills' : '45s Master 4K Film (ProRes 422 HQ)',
      isStill ? 'Social Format Crops (1:1 and 9:16)' : '3x 15s Vertical Cutdowns for Reels / Shorts',
      'Full ComfyUI Workflow JSON + Seed Manifest',
      'Layered 24-bit Audio Soundscape & Voiceover Package',
      'Commercial IP Indemnity Certificate'
    ],
    commercialLicensing: {
      licenseType: 'Full Global Perpetual Buyout (Digital & Broadcast)',
      rawAssetsDelivery: 'Prompt Logs, Seed Manifest, Model Weights Handoff Required',
      modelTrainingClause: 'Strictly prohibited from training public weights on brand geometry',
      indemnity: 'Creator warranties 100% commercially cleared training data'
    },
    milestonePlan: [
      { phase: 'Phase 1 (Day 1-2)', title: 'Keyframe Aesthetics & Seed Lock', payout: '30%' },
      { phase: 'Phase 2 (Day 3-5)', title: 'Motion Synthesis & Continuity Review', payout: '40%' },
      { phase: 'Phase 3 (Day 6-7)', title: '4K Mastering & Asset Vault Delivery', payout: '30%' }
    ]
  };
}

export const ENGAGEMENTS_CONFIG = {
  emptyMessage: 'No active engagements yet.',
  badge: 'Active Contracts & Delivery Workspace',
  title: 'Engagement & Delivery Pipeline',
  subtitle:
    'Manage engagements from discovery through proposal, keyframe verification, motion review, and final IP transfer.',
  stagePrefix: 'Stage:',
  pipelineSteps: [
    {
      index: 0,
      title: '1. Discovery',
      completedStatus: 'Matched',
      activeStatus: 'Matching',
      pendingStatus: 'Pending'
    },
    {
      index: 1,
      title: '2. Keyframes',
      completedStatus: 'Approved',
      activeStatus: 'Active Phase',
      pendingStatus: 'Pending'
    },
    {
      index: 2,
      title: '3. Motion Review',
      completedStatus: 'Approved',
      activeStatus: 'Active Phase',
      pendingStatus: 'Pending'
    },
    {
      index: 3,
      title: '4. IP Transfer',
      completedStatus: 'Completed',
      activeStatus: 'Active Phase',
      pendingStatus: 'Pending'
    }
  ],
  milestoneHeader: 'Milestone Escrow Schedule & Sign-Offs',
  milestonePrefix: 'Milestone #',
  releasedBadge: 'Escrow Released',
  approveBtn: 'Approve & Release',
  directorHeader: 'Contracted AI Director',
  vaultHeader: 'Submission Artifacts & Vault',
  vaultBadge: 'SHA-256 Verified',
  downloadTooltip: 'Download asset',
  warrantyTitle: 'Commercial IP Warranty',
  warrantySubtitle: '100% indemnified against model infringement'
};

export const HIRE_MODAL_CONFIG = {
  titlePrefix: 'Engage',
  subtitle: 'Fund milestone escrow with automated IP rights transfer.',
  successTitle: 'Engagement Initialized!',
  successSubtitle:
    'Escrow funds reserved. Redirecting to your active Engagements tracker...',
  briefSelectLabel: 'Link Existing Campaign Brief',
  rateLabel: 'Contract Rate & Escrow Deposit',
  ratePlaceholder: 'e.g. ₹2,50,000',
  baseRatePrefix: "Creator's base starting rate:",
  scopeLabel: 'Scope of Work & Deliverables',
  defaultScopeNotes:
    'Production of 4K master deliverables, social cutdowns, and raw ComfyUI generation seed manifest.',
  protectionTitle: 'Nebula Escrow Protection',
  protectionBody:
    "Your funds are locked in smart escrow. Payouts are only released when you approve each milestone's video cutdown and generation seed logs.",
  cancelBtn: 'Cancel',
  submitBtn: 'Fund Escrow & Start'
};

export function buildEngagementFromHire({ creator, selectedBrief, contractBudget, milestoneNotes }) {
  // Parse numeric value from contractBudget to compute proportional 30% / 40% / 30% milestone payouts
  const numericTotal =
    parseInt(String(contractBudget).replace(/[^0-9]/g, ''), 10) ||
    parseInt(String(creator.startingProjectRate).replace(/[^0-9]/g, ''), 10) ||
    250000;

  const formatINR = (amount) =>
    `${BRAND_CONFIG.currencySymbol}${Math.round(amount).toLocaleString(BRAND_CONFIG.currencyLocale)}`;

  const m1Payout = formatINR(numericTotal * 0.3);
  const m2Payout = formatINR(numericTotal * 0.4);
  const m3Payout = formatINR(numericTotal - Math.round(numericTotal * 0.3) - Math.round(numericTotal * 0.4));

  return {
    id: `eng-${Date.now()}`,
    campaignTitle: selectedBrief ? selectedBrief.title : `Commission with ${creator.name}`,
    client: selectedBrief ? selectedBrief.brand : BRAND_CONFIG.defaultBrandName,
    creator: {
      name: creator.name,
      handle: creator.handle,
      avatar: creator.avatar
    },
    totalBudget: contractBudget,
    escrowStatus: `100% Escrow Funded (${contractBudget} locked)`,
    stage: 'Milestone 1: Moodboards & Keyframe Latents',
    currentStepIndex: 1,
    progressPercent: 25,
    dueDate: selectedBrief?.deadline || '14 days',
    deliverablesSpec: milestoneNotes,
    milestones: [
      {
        id: 'm1',
        title: 'Keyframe Aesthetics & Character Identity Lock (30%)',
        status: 'In Progress',
        payout: m1Payout,
        date: 'Phase 1',
        notes: milestoneNotes
      },
      {
        id: 'm2',
        title: 'Motion Synthesis & Interpolation Pass (40%)',
        status: 'Pending',
        payout: m2Payout,
        date: 'Phase 2',
        notes: `Pipeline execution using ${creator.tools.map((t) => t.name).slice(0, 2).join(' + ')}.`
      },
      {
        id: 'm3',
        title: '4K Master & Commercial IP Transfer (30%)',
        status: 'Pending',
        payout: m3Payout,
        date: 'Phase 3',
        notes: 'Final master export, ComfyUI workflow JSON, and copyright certificate execution.'
      }
    ],
    submissionAssets: [
      {
        name: 'project_brief_and_scope.pdf',
        size: '2.4 MB',
        type: 'Project Brief',
        modelUsed: `${BRAND_CONFIG.name} Escrow Contract`,
        status: 'Attached'
      }
    ]
  };
}

export const DATA_MODEL_MODAL_CONFIG = {
  title: 'Nebula Data Model Architecture Spec',
  subtitle: 'Deliverable Note: Profile & Brief Data Model (Tools, Skills, Formats & Commercial-Use)',
  schemaPrefix: 'Schema:',
  copyBtn: 'Copy JSON Sample',
  copiedBtn: 'Copied',
  tableHeaders: {
    key: 'Field Key',
    type: 'Data Type',
    required: 'Required',
    description: 'Description & Rationale'
  },
  requiredBadge: 'Required',
  optionalBadge: 'Optional',
  jsonHeader: 'Canonical JSON Implementation:'
};

export const DECK_MODAL_CONFIG = {
  headerTitle: 'NEBULA • PLATFORM DEMO & PITCH DECK',
  headerHint: '(Use Arrow Keys or Space to navigate)',
  exitFullscreenTooltip: 'Exit Fullscreen',
  fullscreenTooltip: 'Fullscreen',
  jumpSlidePrefix: 'Jump to slide',
  slideCounterPrefix: 'Slide',
  slideCounterSeparator: 'of'
};

export const AUTH_CONFIG = {
  storageKey: 'nebula_auth_session',
  modes: {
    SIGN_IN: 'signin',
    SIGN_UP: 'signup'
  },
  badge: 'Celestial Member Access',
  signInTitle: 'Enter the Nebula Exchange',
  signUpTitle: 'Create Your Nebula Pass',
  subtitle:
    'Sign in to commission verified AI directors, inspect ComfyUI node graphs, and manage ₹ INR milestone escrows.',
  tabs: {
    signIn: 'Sign In',
    signUp: 'Create Account'
  },
  labels: {
    name: 'Full Name or Studio Name',
    email: 'Email Address',
    password: 'Password / Passkey',
    accountType: 'Account Workspace',
    rememberMe: 'Keep session active on this device',
    signOutBtn: 'Sign Out',
    signOutTooltip: 'Sign out of Nebula'
  },
  placeholders: {
    name: 'e.g. Kanna / Lumina Studio',
    email: 'name@studio.com',
    password: '••••••••••••'
  },
  accountTypes: ['Brand / Agency', 'AI Creator / Director'],
  submitSignInBtn: 'Sign In to Nebula',
  submitSignUpBtn: 'Create Account & Enter',
  quickAccessLabel: 'Or Instant 1-Click Demo Login',
  quickAccounts: [
    {
      id: 'demo-brand',
      label: 'Brand Director Demo',
      sublabel: 'Post briefs & fund ₹ INR escrow',
      name: 'Lumina Atelier',
      email: 'director@lumina.studio',
      accountType: 'Brand / Agency'
    },
    {
      id: 'demo-creator',
      label: 'AI Creator Demo',
      sublabel: 'Showcase ComfyUI nodes & bid',
      name: 'Elena Rostova',
      email: 'elena@nebula.exchange',
      accountType: 'AI Creator / Director'
    }
  ],
  securityNote: 'Encrypted Session • Commercial IP & Smart Escrow Enabled'
};

export function buildUserFromAuth({ name, email, accountType }) {
  const cleanEmail = (email || '').trim();
  const derivedName =
    (name || '').trim() ||
    cleanEmail
      .split('@')[0]
      .replace(/[._-]/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase()) ||
    BRAND_CONFIG.defaultBrandName;

  const initials = derivedName
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return {
    name: derivedName,
    email: cleanEmail,
    accountType: accountType || AUTH_CONFIG.accountTypes[0],
    initials: initials || BRAND_CONFIG.logoMark,
    signedInAt: new Date().toISOString()
  };
}

