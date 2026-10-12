// Mock data for AI creators with rich portfolios, workflows, tools, and verification signals

export const CREATORS = [
  {
    id: "creator-1",
    name: "Elena Rostova",
    handle: "@elena.latent",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    title: "AI Film Director & Haute Couture Worldbuilder",
    location: "Paris / Remote",
    rating: 4.98,
    reviewsCount: 42,
    hourlyRate: "₹11,500/hr",
    startingProjectRate: "₹2,30,000",
    availability: "Available Next Week",
    bio: "Ex-VFX art director pioneering generative cinema. Specializing in high-fashion surrealism, consistent multi-shot character identity, and broadcast-ready 4K upscaling using custom ComfyUI pipelines.",
    specializations: ["Haute Couture Film", "Luxury Commercials", "Consistent Characters", "Celestial Worldbuilding"],
    skills: ["ComfyUI Custom Nodes", "Flux.1 LoRA Training", "Runway Gen-3 Direction", "Latent Upscaling", "Davinci Color Grading", "ControlNet Depth"],
    tools: [
      { name: "Flux.1 Pro", category: "Base Model", verified: true },
      { name: "Runway Gen-3", category: "Motion Video", verified: true },
      { name: "ComfyUI", category: "Pipeline Automation", verified: true },
      { name: "Topaz Video AI", category: "Enhancement", verified: true },
      { name: "Midjourney v6.1", category: "Concept Art", verified: true }
    ],
    verificationSignals: {
      toolVerified: true,
      workflowVerified: true,
      pastWorkVerified: true,
      commercialRightsGuaranteed: true,
      consistencyScore: "99.4% Identity Match",
      badgeTitle: "Master Generative Director",
      verifiedJobsCompleted: 28,
      enterpriseCleared: true
    },
    metrics: {
      totalViews: "4.8M+",
      onTimeDelivery: "100%",
      revisionAverage: "1.4 rounds",
      avgTurnaround: "4 days"
    },
    portfolios: [
      {
        id: "port-1",
        title: "Aura Céleste: The Starlight Perfume Film",
        client: "Maison de L'Aether",
        contentType: "Cinematic Video",
        thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
        videoSimulated: true,
        duration: "0:45",
        aspectRatio: "16:9 Cinema (3840x2160)",
        primaryTools: ["Flux.1 Dev", "Runway Gen-3", "Topaz Video AI 5"],
        commercialLicensing: "Full Global Buyout (Perpetual Broadcast)",
        promptArchitecture: "Cinematic medium close-up, celestial goddess pouring liquefied starlight from an ethereal quartz flacon, glowing micro-nebulae particles in champagne gold and deep obsidian void, anamorphic 35mm lens, Kodachrome warm palette, photorealistic hyperdetail, 8k resolution.",
        negativePrompt: "cartoon, low resolution, bad hands, distorted anatomy, plastic texture, 3d render look, oversaturated neon.",
        workflowBreakdown: [
          { step: "01 Keyframe Generation", model: "Flux.1 Dev (Guidance 3.5, 40 steps, Seed #9482103)", notes: "Locked perfume bottle geometry via LoRA trained on 32 CAD turns." },
          { step: "02 Motion Synthesis", model: "Runway Gen-3 Alpha Camera Track", notes: "Slow orbital push-in with fluid stardust dynamics; motion brush applied to liquid." },
          { step: "03 Temporal Smoothing", model: "ComfyUI FILM Interpolation", notes: "Increased frame rate from 24fps to 60fps with zero artifacting." },
          { step: "04 Mastering & Audio", model: "Topaz Video AI + ElevenLabs Soundscapes", notes: "Upscaled to 4K DCI; synchronized ethereal cosmic chime audio track." }
        ],
        tags: ["Haute Perfume", "Cosmic Luxury", "Fluid Dynamics", "4K HDR"],
        likes: 342
      },
      {
        id: "port-2",
        title: "Nebula Veil: Spring 2026 Virtual Runway",
        client: "Vogue Innovation Lab",
        contentType: "Animation / Motion",
        thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
        videoSimulated: true,
        duration: "1:15",
        aspectRatio: "9:16 Vertical (1080x1920)",
        primaryTools: ["Midjourney v6.1", "Kling 1.5 Pro", "ComfyUI"],
        commercialLicensing: "Exclusive 2-Year Digital Rights",
        promptArchitecture: "Haute couture models walking across a mirror of liquid mercury reflecting spiral galaxies, dresses made of shimmering cream silk with fiber-optic stardust woven through seams, dynamic tracking shot, soft diffused celestial lighting.",
        negativePrompt: "glitch, jerky camera, missing limbs, morphing face, blurry textures.",
        workflowBreakdown: [
          { step: "01 Character Sheets", model: "Midjourney v6.1 Style Reference", notes: "Consistent model features across 6 distinct outfit configurations." },
          { step: "02 Runway Gait Motion", model: "Kling 1.5 Motion Transfer", notes: "Preserved natural textile drapery and realistic fabric bounce." },
          { step: "03 Color Grading", model: "DaVinci Resolve ACEScc", notes: "Tuned warm cream and starlight gold luminance curves." }
        ],
        tags: ["Fashion Runway", "Consistent Models", "Textile Physics"],
        likes: 512
      },
      {
        id: "port-3",
        title: "Stardust Chronometer: Heritage Horology",
        client: "Vacheron & Constellation",
        contentType: "3D Product Visual",
        thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
        videoSimulated: false,
        duration: "Still 8K",
        aspectRatio: "1:1 Square (4096x4096)",
        primaryTools: ["Flux.1 Pro", "ControlNet Depth", "Magnific AI"],
        commercialLicensing: "Unrestricted Global Commercial",
        promptArchitecture: "Micro-macro close-up shot of an open-worked tourbillon luxury watch floating amidst cosmic dust and planetary rings, mechanical titanium gears glistening with champagne specular reflections, studio rim lighting, depth of field f/1.8.",
        negativePrompt: "misaligned dials, blurry numbers, noisy render, CGI plasticity.",
        workflowBreakdown: [
          { step: "01 Structural Depth Map", model: "ControlNet Depth with Blender Pass", notes: "Maintained exact mechanical watch dimensions and gear ratios." },
          { step: "02 Latent Diffusion", model: "Flux.1 Pro (CFG 4.0)", notes: "Rendered photorealistic titanium textures and diamond bezel." },
          { step: "03 Texture Halation", model: "Magnific AI Upscaler", notes: "Micro-scratches, metal brushing, and authentic light dispersion." }
        ],
        tags: ["Luxury Horology", "Product Render", "Hard Surface AI"],
        likes: 289
      }
    ]
  },
  {
    id: "creator-2",
    name: "Kaelen Thorne",
    handle: "@kaelen.sora",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    title: "Generative 3D Artist & Sci-Fi Cinematographer",
    location: "Tokyo / Remote",
    rating: 4.95,
    reviewsCount: 38,
    hourlyRate: "₹13,500/hr",
    startingProjectRate: "₹2,65,000",
    availability: "Available Now",
    bio: "Pioneering generative worldbuilding for enterprise tech & automotive brands. Seamlessly merging procedural Unreal Engine geometry with neural diffusion models to build hyper-consistent cinematic universes.",
    specializations: ["Sci-Fi Worldbuilding", "Automotive Commercials", "Procedural Environments", "Photorealistic VFX"],
    skills: ["Unreal Engine + Stable Diffusion", "Luma Dream Machine", "Sora Prompt Engineering", "ControlNet Canny/Depth", "NeRF / 3D Gaussian Splats"],
    tools: [
      { name: "Luma Dream Machine", category: "Motion Video", verified: true },
      { name: "Flux.1 Pro", category: "Base Model", verified: true },
      { name: "Kling 1.5", category: "Physics & Motion", verified: true },
      { name: "Spline AI", category: "Generative 3D", verified: true },
      { name: "ElevenLabs", category: "Neural Audio", verified: true }
    ],
    verificationSignals: {
      toolVerified: true,
      workflowVerified: true,
      pastWorkVerified: true,
      commercialRightsGuaranteed: true,
      consistencyScore: "98.7% Environmental Continuity",
      badgeTitle: "Verified Enterprise VFX Lead",
      verifiedJobsCompleted: 34,
      enterpriseCleared: true
    },
    metrics: {
      totalViews: "6.2M+",
      onTimeDelivery: "98%",
      revisionAverage: "1.2 rounds",
      avgTurnaround: "5 days"
    },
    portfolios: [
      {
        id: "port-4",
        title: "Hyperion GT: Celestial EV Launch Teaser",
        client: "Apex Electric Mobility",
        contentType: "Cinematic Video",
        thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
        videoSimulated: true,
        duration: "0:30",
        aspectRatio: "16:9 Cinema (3840x2160)",
        primaryTools: ["Luma Dream Machine", "Flux.1 Pro", "Topaz Video AI"],
        commercialLicensing: "Full Worldwide Buyout (Broadcast & Digital)",
        promptArchitecture: "Low angle tracking drone shot of a futuristic champagne-cream hypercar accelerating through a desert of crystalline stardust under a massive ringed planet, realistic motion blur, aerodynamic vortex trails, lens flare.",
        negativePrompt: "deformed wheels, mismatched headlights, flickering geometry.",
        workflowBreakdown: [
          { step: "01 Exact Chassis CAD Control", model: "ControlNet LineArt", notes: "Locked proprietary concept design line art into generation seeds." },
          { step: "02 Dynamic Camera Flight", model: "Luma Dream Machine Ray 2", notes: "120-degree orbital sweep maintaining rigid vehicle reflections." },
          { step: "03 Synthetic Sound Design", model: "ElevenLabs + ProTools", notes: "Synthesized ionic propulsion audio and ambient cosmic frequencies." }
        ],
        tags: ["Automotive", "High Speed Motion", "Sci-Fi Realism"],
        likes: 671
      },
      {
        id: "port-5",
        title: "Orbital Sanctuary: Architectural Biome",
        client: "Solaria Architecture",
        contentType: "3D Product Visual",
        thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        videoSimulated: false,
        duration: "Still 8K",
        aspectRatio: "16:9 Landscape (3840x2160)",
        primaryTools: ["Flux.1 Dev", "Midjourney v6.1", "Magnific AI"],
        commercialLicensing: "Commercial Architectural Portfolio",
        promptArchitecture: "Minimalist curvilinear architectural pavilion constructed from creamy travertine and smart glass, cantilevered over an asteroid garden, bioluminescent flora, ethereal dawn lighting.",
        negativePrompt: "crooked pillars, chaotic architecture, grainy noise.",
        workflowBreakdown: [
          { step: "01 Spatial Composition", model: "Midjourney v6.1 Architecture Prompt", notes: "Curated organic brutalism with warm stone textures." },
          { step: "02 Light Infilling", model: "Flux.1 Inpainting", notes: "Tuned ambient occlusion and floor-to-ceiling glass reflections." }
        ],
        tags: ["Architecture", "Travertine & Glass", "Minimalism"],
        likes: 418
      }
    ]
  },
  {
    id: "creator-3",
    name: "Aria Chen",
    handle: "@ariachen.ai",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    title: "Brand Storyteller & Character Consistency Architect",
    location: "San Francisco / Remote",
    rating: 5.0,
    reviewsCount: 56,
    hourlyRate: "₹12,200/hr",
    startingProjectRate: "₹2,05,000",
    availability: "Available in 3 Days",
    bio: "Pioneered character LoRA training methodology for brand mascots and consistent virtual influencers. Delivers multi-scene continuity with zero face-drift across 50+ camera angles.",
    specializations: ["Character Consistency", "Brand Mascots", "Social First Reels", "Commercial Storytelling"],
    skills: ["Custom LoRA Training", "FaceID / InstantID Control", "AnimateDiff", "Multi-Character Scripting", "TikTok / Reels Hook Pacing"],
    tools: [
      { name: "Flux.1 LoRA", category: "Custom Weights", verified: true },
      { name: "Runway Gen-3", category: "Motion Video", verified: true },
      { name: "ComfyUI InstantID", category: "Facial Fidelity", verified: true },
      { name: "Midjourney v6.1", category: "Character Art", verified: true },
      { name: "Suno v3.5", category: "Audio Composition", verified: true }
    ],
    verificationSignals: {
      toolVerified: true,
      workflowVerified: true,
      pastWorkVerified: true,
      commercialRightsGuaranteed: true,
      consistencyScore: "99.8% Certified Identity Preservation",
      badgeTitle: "Consistency Benchmark Champion",
      verifiedJobsCompleted: 49,
      enterpriseCleared: true
    },
    metrics: {
      totalViews: "8.4M+",
      onTimeDelivery: "100%",
      revisionAverage: "1.1 rounds",
      avgTurnaround: "3 days"
    },
    portfolios: [
      {
        id: "port-6",
        title: "Selene: 7-Episode Brand Ambassador Campaign",
        client: "L’Aura Skincare",
        contentType: "Cinematic Video",
        thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
        videoSimulated: true,
        duration: "0:50",
        aspectRatio: "9:16 Vertical (1080x1920)",
        primaryTools: ["Flux.1 Custom LoRA", "Runway Gen-3", "ComfyUI InstantID"],
        commercialLicensing: "Exclusive Global Brand Mascot Rights",
        promptArchitecture: "Medium portrait of virtual brand model Selene with ethereal glowing dewy skin, laughing naturally, holding minimalist cream cosmetic bottle, morning sunlight through sheer linen curtains, bokeh, high editorial fashion.",
        negativePrompt: "plastic skin, mannequin look, jittery eyes, inconsistent freckles.",
        workflowBreakdown: [
          { step: "01 Dataset & LoRA Training", model: "Kohya-ss Flux.1 Rank-64", notes: "Trained on 45 high-res studio headshots in diverse lighting conditions." },
          { step: "02 Multi-Angle Shot Generation", model: "ComfyUI + ControlNet OpenPose", notes: "Generated 12 distinct action shots with locked facial anatomy." },
          { step: "03 Motion Generation", model: "Runway Gen-3 LipSync & Motion", notes: "Applied natural micro-expressions, blinks, and subtle breathing motion." }
        ],
        tags: ["Skincare", "Virtual Influencer", "Identity Lock"],
        likes: 890
      },
      {
        id: "port-7",
        title: "Chronicles of the Star Weaver",
        client: "Metaverse Publishing",
        contentType: "Animation / Motion",
        thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
        videoSimulated: true,
        duration: "1:20",
        aspectRatio: "16:9 Cinema (3840x2160)",
        primaryTools: ["ComfyUI AnimateDiff", "Midjourney v6.1", "ElevenLabs"],
        commercialLicensing: "Global Entertainment Broadcast",
        promptArchitecture: "Anime-inspired celestial weaver floating between constellations, threads of glowing gold light intertwining into celestial tapestries, magical realism, cinematic lighting.",
        negativePrompt: "flickering frames, low detail, warped face.",
        workflowBreakdown: [
          { step: "01 Key Art Conception", model: "Midjourney v6.1", notes: "Color palette locked to cream, cosmic violet, and warm amber." },
          { step: "02 Temporal Consistency", model: "AnimateDiff Lightning + LCM", notes: "Zero flickering across 240 frames." }
        ],
        tags: ["Cinematic Anime", "Cosmic Fantasy", "AnimateDiff"],
        likes: 645
      }
    ]
  },
  {
    id: "creator-4",
    name: "Marcus Vance",
    handle: "@vance.neural",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    title: "AI Audio-Visualist & Immersive Worldbuilder",
    location: "Berlin / Remote",
    rating: 4.92,
    reviewsCount: 31,
    hourlyRate: "₹10,800/hr",
    startingProjectRate: "₹1,80,000",
    availability: "Available in 1 Week",
    bio: "Pioneering the intersection of generative ambient soundscapes and surreal visual worldbuilding. Creating sensory-rich brand activations and exhibition content for international cultural institutes.",
    specializations: ["Audio-Visual Generative Art", "Surrealism", "Museum & Exhibition Visuals", "Spatial Audio"],
    skills: ["Deforum Stable Diffusion", "Stable Audio 2.0", "Suno Soundtracks", "SDR to HDR Grading", "Audioreactive Latent Modulation"],
    tools: [
      { name: "Flux.1 Dev", category: "Base Model", verified: true },
      { name: "Stable Audio 2.0", category: "Neural Audio", verified: true },
      { name: "Deforum SD", category: "Audioreactive Motion", verified: true },
      { name: "Runway Gen-3", category: "Motion Video", verified: true }
    ],
    verificationSignals: {
      toolVerified: true,
      workflowVerified: true,
      pastWorkVerified: true,
      commercialRightsGuaranteed: true,
      consistencyScore: "97.5% Audioreactive Sync",
      badgeTitle: "Sensory Media Innovator",
      verifiedJobsCompleted: 22,
      enterpriseCleared: false
    },
    metrics: {
      totalViews: "3.1M+",
      onTimeDelivery: "97%",
      revisionAverage: "1.5 rounds",
      avgTurnaround: "6 days"
    },
    portfolios: [
      {
        id: "port-8",
        title: "Echoes of the Void: Audioreactive Symphony",
        client: "Berlin Digital Arts Festival",
        contentType: "Animation / Motion",
        thumbnail: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
        videoSimulated: true,
        duration: "1:40",
        aspectRatio: "16:9 Cinema (3840x2160)",
        primaryTools: ["Deforum SD", "Stable Audio 2.0", "TouchDesigner"],
        commercialLicensing: "Exclusive Exhibition & NFT Rights",
        promptArchitecture: "Hypnotic swirling milky way galaxy transforming into crystalline celestial palace corridors, rhythmic pulses in harmony with bass frequencies, ivory marble surfaces, golden light veins.",
        negativePrompt: "jerky movement, pixelation, muddy colors.",
        workflowBreakdown: [
          { step: "01 Neural Audio Stem Generation", model: "Stable Audio 2.0", notes: "Generated 96kHz multi-track ambient atmospheric soundtrack." },
          { step: "02 Frequency Latent Modulation", model: "Deforum SD Audio Reactive Hook", notes: "Sub-bass routed to zoom parameter; high hats routed to prompt weight." }
        ],
        tags: ["Audioreactive", "Exhibition", "Ambient Cosmic"],
        likes: 421
      }
    ]
  },
  {
    id: "creator-5",
    name: "Nyx Solaris",
    handle: "@nyx.solaris",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    title: "AI Editorial Photographer & Luxury Still Life Director",
    location: "London / Remote",
    rating: 4.99,
    reviewsCount: 64,
    hourlyRate: "₹12,800/hr",
    startingProjectRate: "₹2,15,000",
    availability: "Available Now",
    bio: "Obsessed with texture, authentic lens physics, and lighting nuance. Formerly shot for luxury houses; now engineers photorealistic generative stills with verified commercial copyright clearance.",
    specializations: ["Editorial Photography", "Cosmetic & Jewelry Stills", "Ethereal Textures", "Color Science"],
    skills: ["Prompt Weight Balancing", "Custom Film Grain LoRA", "Anamorphic Bokeh Synthesis", "ComfyUI Layer Diffusion", "Commercial IP Clearance"],
    tools: [
      { name: "Flux.1 Pro", category: "Base Model", verified: true },
      { name: "Midjourney v6.1", category: "Base Model", verified: true },
      { name: "Magnific AI", category: "Texture Enhancer", verified: true },
      { name: "Photoshop Generative Fill", category: "Retouching", verified: true }
    ],
    verificationSignals: {
      toolVerified: true,
      workflowVerified: true,
      pastWorkVerified: true,
      commercialRightsGuaranteed: true,
      consistencyScore: "99.9% Photorealism Accuracy",
      badgeTitle: "Certified Commercial Master",
      verifiedJobsCompleted: 58,
      enterpriseCleared: true
    },
    metrics: {
      totalViews: "5.5M+",
      onTimeDelivery: "100%",
      revisionAverage: "1.0 rounds",
      avgTurnaround: "2 days"
    },
    portfolios: [
      {
        id: "port-9",
        title: "Celestial Alabaster: High Jewelry Editorial",
        client: "Maison Vendôme",
        contentType: "Still Photography",
        thumbnail: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
        videoSimulated: false,
        duration: "Still 8K",
        aspectRatio: "4:5 Portrait (3200x4000)",
        primaryTools: ["Flux.1 Pro", "Magnific AI", "Capture One"],
        commercialLicensing: "Unrestricted Global Print & Outdoor Billboard",
        promptArchitecture: "Editorial macro photo of an ethereal diamond constellation necklace resting on raw creamy alabaster stone dusted with fine golden stardust, raking natural morning light, Hasselblad H6D-100c quality, authentic shallow depth of field.",
        negativePrompt: "cgi look, fake reflections, airbrushed glow, flat textures.",
        workflowBreakdown: [
          { step: "01 Camera Calibration", model: "Flux.1 Pro (Sampler dpmpp_2m)", notes: "Emulated Hasselblad HC 100mm f/2.2 lens optical aberrations." },
          { step: "02 Gemstone Refraction Enhancement", model: "Magnific AI Sub-Surface Polish", notes: "Crisp internal diamond facet dispersion without digital noise." }
        ],
        tags: ["High Jewelry", "Editorial Still", "Luxury Billboard"],
        likes: 730
      }
    ]
  },
  {
    id: "creator-6",
    name: "Zephyr Studio (Julian & Ren)",
    handle: "@zephyr.creative",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    title: "AI Commercial Production Duo & Rapid Iteration Unit",
    location: "Stockholm / Remote",
    rating: 4.96,
    reviewsCount: 47,
    hourlyRate: "₹14,500/hr",
    startingProjectRate: "₹2,90,000",
    availability: "Available in 2 Days",
    bio: "Full-stack AI production agency delivering turnkey broadcast campaigns in 72 hours. Specializing in high-end beverage, architectural real estate, and futuristic lifestyle brands.",
    specializations: ["Turnkey TV Commercials", "Beverage & Liquid Simulation", "Rapid Turnaround", "Multi-Platform Cutdowns"],
    skills: ["Kling 1.5 Fluid Motion", "Runway Gen-3 Direction", "Full Prompt Pipeline Delivery", "IP Rights Indemnification", "Soundtrack Licensing"],
    tools: [
      { name: "Kling 1.5", category: "Motion Video", verified: true },
      { name: "Runway Gen-3", category: "Motion Video", verified: true },
      { name: "Flux.1 Dev", category: "Base Model", verified: true },
      { name: "Topaz Video AI", category: "Upscaler", verified: true },
      { name: "ElevenLabs Voiceover", category: "Audio", verified: true }
    ],
    verificationSignals: {
      toolVerified: true,
      workflowVerified: true,
      pastWorkVerified: true,
      commercialRightsGuaranteed: true,
      consistencyScore: "99.1% Brand Asset Fidelity",
      badgeTitle: "Turnkey Commercial Partner",
      verifiedJobsCompleted: 41,
      enterpriseCleared: true
    },
    metrics: {
      totalViews: "9.1M+",
      onTimeDelivery: "99%",
      revisionAverage: "1.3 rounds",
      avgTurnaround: "3 days"
    },
    portfolios: [
      {
        id: "port-10",
        title: "Mythic Botanicals: Celestial Gin Campaign",
        client: "Aurora Distillers",
        contentType: "Cinematic Video",
        thumbnail: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=800&q=80",
        videoSimulated: true,
        duration: "0:30",
        aspectRatio: "16:9 Cinema & 9:16 Reel",
        primaryTools: ["Kling 1.5", "Flux.1 Dev", "Topaz Video AI 5"],
        commercialLicensing: "Global Commercial TV & Digital (Full Buyout)",
        promptArchitecture: "Slow motion pour of iridescent liquid botanicals into a frosty crystal goblet against a dark cosmic galaxy backdrop, floating luminous juniper berries and starlight bubbles, cinematic macro lens f/2.0.",
        negativePrompt: "cartoon splash, muddy colors, chaotic bubbles, low fps.",
        workflowBreakdown: [
          { step: "01 Bottle & Fluid Keyframe", model: "Flux.1 Dev + LoRA", notes: "Accurate label typography and glass refraction." },
          { step: "02 Dynamic Fluid Pour", model: "Kling 1.5 Fluid Motion Module", notes: "120fps high-speed capture emulation with realistic surface tension." },
          { step: "03 Sound & Master Delivery", model: "4K ProRes 422 HQ + ASMR Audio", notes: "Custom crystal clink & liquid pour foley." }
        ],
        tags: ["Beverage Commercial", "Liquid Simulation", "Broadcast 4K"],
        likes: 540
      }
    ]
  }
];

export const ALL_TOOLS_LIST = [
  "Flux.1 Pro",
  "Runway Gen-3",
  "Midjourney v6.1",
  "ComfyUI",
  "Kling 1.5",
  "Luma Dream Machine",
  "Topaz Video AI",
  "ElevenLabs",
  "Stable Audio 2.0",
  "Magnific AI"
];

export const ALL_CONTENT_TYPES = [
  "All Types",
  "Cinematic Video",
  "Animation / Motion",
  "Still Photography",
  "3D Product Visual"
];

export const ALL_SPECIALIZATIONS = [
  "All Specializations",
  "Luxury Commercials",
  "Haute Couture Film",
  "Consistent Characters",
  "Sci-Fi Worldbuilding",
  "Automotive Commercials",
  "Editorial Photography",
  "Turnkey TV Commercials"
];
