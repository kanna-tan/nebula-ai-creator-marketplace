// Mock data for Brand & Agency briefs

export const INITIAL_BRIEFS = [
  {
    id: "brief-1",
    title: "Vogue Celestial: Autumn 2026 Virtual Haute Couture Film",
    brand: "Vogue Global Editions",
    brandLogo: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=150&q=80",
    status: "Open for Proposals",
    postedDate: "2 days ago",
    deadline: "12 days left",
    budget: "₹5,50,000 - ₹7,50,000",
    proposalsCount: 8,
    contentType: "Cinematic Video",
    style: "Mystical Ethereal & Haute Couture",
    formatAspectRatio: "16:9 Cinema Master + 9:16 Social Cutdown (4K ProRes)",
    commercialRequirements: {
      licenseType: "Full Global Buyout (Perpetual Broadcast & Digital)",
      rawAssetsDelivery: "Prompt Logs, Seed Manifest, ComfyUI Workflow JSON required",
      modelTrainingClause: "No training of 3rd party AI on client models allowed",
      indemnity: "Creator warranties 100% commercially cleared training/weights"
    },
    campaignDescription: "We are seeking a master AI director to craft a 45-second high-fashion digital film set in an ethereal cosmic landscape. The protagonist is an ethereal celestial muse dressed in sculptural cream silk gowns that dissolve into shimmering stardust nebulae. Must showcase flawless character identity across 6 cinematic angles and pristine fabric fluid motion.",
    deliverables: [
      "45s Master 4K Film (16:9 3840x2160 60fps)",
      "3x 15s Vertical Cutdowns for Instagram Reels / TikTok (9:16)",
      "6x High-Res Still Keyframes (4096x4096)",
      "Full Generation Metadata Archive (Seeds, Prompts, LoRA config)"
    ],
    requiredTools: ["Flux.1 / Midjourney v6", "Runway Gen-3 or Kling 1.5", "Topaz Video AI", "ComfyUI"],
    tags: ["Haute Couture", "4K Video", "Full Buyout", "Character Consistency"]
  },
  {
    id: "brief-2",
    title: "Lumina Elixirs: Ethereal Perfume Launch Commercial",
    brand: "Lumina Fragrances Paris",
    brandLogo: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=150&q=80",
    status: "Open for Proposals",
    postedDate: "3 days ago",
    deadline: "5 days left",
    budget: "₹3,50,000 - ₹5,00,000",
    proposalsCount: 12,
    contentType: "Cinematic Video",
    style: "Ethereal Celestial Luxury & Macro Fluid Dynamics",
    formatAspectRatio: "9:16 Vertical (1080x1920) + 1:1 Square (2160x2160)",
    commercialRequirements: {
      licenseType: "2-Year Worldwide Digital & Paid Social Exclusive",
      rawAssetsDelivery: "Raw renders + Master audio stems (WAV 24-bit)",
      modelTrainingClause: "Standard commercial indemnification",
      indemnity: "Certified commercially licensed base models only"
    },
    campaignDescription: "For the global debut of 'Starlight Absolue', we need a mesmerizing commercial centered on our signature faceted quartz flacon floating through a warm cream stardust galaxy. Fluid starlight droplets must refract through the bottle with authentic optical dispersion. Looking for creators with proven fluid simulation and luxury lighting portfolios.",
    deliverables: [
      "30s Hero Vertical Reel (9:16)",
      "15s Teaser Loop (1:1)",
      "5x Retouched Hero Editorial Stills (4:5)",
      "Layered Audio Stem Package with Ethereal Chimes"
    ],
    requiredTools: ["Flux.1 Pro", "Kling 1.5 or Runway Gen-3", "Magnific AI"],
    tags: ["Luxury Fragrance", "Fluid Dynamics", "Paid Social", "9:16 Reel"]
  },
  {
    id: "brief-3",
    title: "Apex Celestial GT: Next-Gen EV World Premiere Teaser",
    brand: "Apex Electric Automotive",
    brandLogo: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=150&q=80",
    status: "Reviewing Finalists",
    postedDate: "1 week ago",
    deadline: "2 days left",
    budget: "₹6,80,000 - ₹10,00,000",
    proposalsCount: 19,
    contentType: "Cinematic Video",
    style: "Sci-Fi Realism & Clean Brutalist Minimalism",
    formatAspectRatio: "16:9 Cinema 4K (DCI 4096x2160)",
    commercialRequirements: {
      licenseType: "Full Worldwide Perpetual Buyout (TV Broadcast, Auto Shows, Web)",
      rawAssetsDelivery: "Full LoRA checkpoint and ControlNet reference poses",
      modelTrainingClause: "Confidentiality NDA on unreleased CAD contours",
      indemnity: "Enterprise Level IP Warranty"
    },
    campaignDescription: "Automotive teaser announcing our flagship electric hypercar. The vehicle must be rendered with millimeter-accurate body panels in pearlescent cream paint gliding over a salt flat reflecting starry constellations at twilight. Strict adherence to our proprietary CAD contours via ControlNet is mandatory.",
    deliverables: [
      "60s Hero Reveal Film (16:9 4K)",
      "30s Broadcast Cutdown",
      "ControlNet Depth & Normal Map Verification Packet"
    ],
    requiredTools: ["ControlNet CAD pipeline", "Runway Gen-3", "Topaz Video AI 5", "Spline / 3D"],
    tags: ["Automotive", "High Budget", "Enterprise NDA", "ControlNet CAD"]
  },
  {
    id: "brief-4",
    title: "Aura Nocturne: High Jewelry Editorial Print & Out-of-Home",
    brand: "Maison Vendôme Joaillerie",
    brandLogo: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=150&q=80",
    status: "Open for Proposals",
    postedDate: "Just now",
    deadline: "14 days left",
    budget: "₹2,80,000 - ₹4,20,000",
    proposalsCount: 4,
    contentType: "Still Photography",
    style: "Fine Art Luxury Editorial & Warm Alabaster Tones",
    formatAspectRatio: "4:5 Portrait (4000x5000) & Billboard 3:1 Ultrawide (12000x4000)",
    commercialRequirements: {
      licenseType: "Perpetual Worldwide Print & Out-of-Home Billboard Rights",
      rawAssetsDelivery: "16-bit TIFF Masters + Generation Seeds",
      modelTrainingClause: "No public dissemination of raw files",
      indemnity: "100% Commercial Copyright Indemnity"
    },
    campaignDescription: "A series of 8 ethereal still visuals featuring diamond & pearl high jewelry styled against rough cream travertine, moon dust, and soft dawn starlight. Must achieve indistinguishable Hasselblad medium-format camera quality with authentic micro-scratches and gemstone caustic refractions.",
    deliverables: [
      "8x 16-bit TIFF High-Res Stills for Global Billboards",
      "Social format adaptations (1:1 and 9:16)",
      "Prompt and negative prompt documentation"
    ],
    requiredTools: ["Flux.1 Pro", "Midjourney v6.1", "Magnific AI"],
    tags: ["Print & Billboard", "Jewelry Editorial", "High-Res 16-bit", "Fast Delivery"]
  }
];

export const BRIEF_TEMPLATES = [
  {
    id: "tmpl-1",
    name: "Luxury Fragrance / Cosmetics Commercial",
    promptIdea: "An ethereal luxury perfume commercial with celestial floating quartz bottle, warm cream stardust lighting, and fluid cosmic drops.",
    suggestedBudget: "₹3,80,000 - ₹5,80,000",
    contentType: "Cinematic Video",
    style: "Mystical Ethereal & Luxury Macro",
    aspectRatio: "9:16 Vertical & 16:9 Cinema"
  },
  {
    id: "tmpl-2",
    name: "Virtual Fashion Show & Consistent Models",
    promptIdea: "A 45-second virtual haute couture runway set on a reflective cosmic lake, featuring models in cream and gold garments with locked facial consistency.",
    suggestedBudget: "₹4,50,000 - ₹7,00,000",
    contentType: "Cinematic Video",
    style: "Haute Couture & Surrealism",
    aspectRatio: "9:16 Vertical (1080x1920)"
  },
  {
    id: "tmpl-3",
    name: "Automotive / Tech Futuristic Teaser",
    promptIdea: "Cinematic teaser for an electric hypercar racing through an asteroid belt with realistic aerodynamic stardust trails and strict CAD body line adherence.",
    suggestedBudget: "₹5,80,000 - ₹9,20,000",
    contentType: "Cinematic Video",
    style: "Sci-Fi Realism & Clean Brutalism",
    aspectRatio: "16:9 Cinema (4K ProRes)"
  },
  {
    id: "tmpl-4",
    name: "Fine Art Jewelry / Watch Editorial Stills",
    promptIdea: "Eight ultra-macro editorial still frames of a diamond constellation timepiece resting on cream marble dusted with golden meteor powder.",
    suggestedBudget: "₹2,50,000 - ₹4,20,000",
    contentType: "Still Photography",
    style: "High-End Editorial Photography",
    aspectRatio: "4:5 Portrait (3200x4000)"
  }
];
