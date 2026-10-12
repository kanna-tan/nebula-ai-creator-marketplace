// Formal Data Model Architecture Specification for Nebula Platform

export const DATA_MODEL_SPEC = {
  overview: {
    title: "AI-Native Marketplace Data Architecture",
    description: "Traditional freelance schemas fail to capture the technical nuances of generative AI production—such as model checkpoints, latent seed reproducibility, ControlNet conditioning, and copyright indemnity. The Nebula schema was engineered from the ground up for generative workflows.",
    version: "2.4.0-celestial",
    lastUpdated: "October 2026"
  },
  models: [
    {
      name: "CreatorProfile",
      purpose: "Stores verified creator capabilities, AI tool proficiencies, reproducibility benchmarks, and commercial licensing guarantees.",
      fields: [
        { key: "id", type: "UUID", required: true, description: "Unique creator identifier" },
        { key: "handle", type: "String", required: true, description: "Unique vanity handle (@creator)" },
        { key: "title", type: "String", required: true, description: "Professional designation (e.g., 'AI Cinematic Director')" },
        { key: "specializations", type: "Array<String>", required: true, description: "High-level creative verticals (e.g., 'Haute Couture Film', 'Automotive')" },
        { key: "skills", type: "Array<String>", required: true, description: "Granular technical competencies (e.g., 'Flux.1 LoRA Training', 'ComfyUI Nodes')" },
        { 
          key: "tools", 
          type: "Array<ToolObject>", 
          required: true, 
          description: "List of generative tools with verification statuses: [{ name, category, verified, apiAccessTier }]" 
        },
        { 
          key: "verificationSignals", 
          type: "Object", 
          required: true, 
          description: "Cryptographic & manual proof of capabilities: { toolVerified, workflowVerified, pastWorkVerified, consistencyScore, commercialRightsGuaranteed }" 
        },
        { key: "pricing", type: "Object", required: true, description: "{ hourlyRate, startingProjectRate, minimumEngagement }" },
        { key: "metrics", type: "Object", required: true, description: "{ onTimeDelivery, revisionAverage, consistencyBenchmarkScore }" }
      ],
      sampleJson: {
        "id": "c-94821",
        "name": "Elena Rostova",
        "handle": "@elena.latent",
        "specializations": ["Haute Couture Film", "Luxury Commercials"],
        "skills": ["Flux.1 LoRA Training", "ComfyUI Custom Nodes", "Runway Gen-3 Direction"],
        "tools": [
          { "name": "Flux.1 Pro", "category": "Base Model", "verified": true },
          { "name": "Runway Gen-3", "category": "Motion Video", "verified": true }
        ],
        "verificationSignals": {
          "toolVerified": true,
          "workflowVerified": true,
          "consistencyScore": "99.4% Identity Match",
          "commercialRightsGuaranteed": true
        }
      }
    },
    {
      name: "PortfolioItem (AI Generation Asset)",
      purpose: "Deep inspection record for an AI-generated artifact, capturing exact prompts, negative prompts, node graphs, seeds, and licensing rights.",
      fields: [
        { key: "id", type: "UUID", required: true, description: "Asset identifier" },
        { key: "title", type: "String", required: true, description: "Project title" },
        { key: "contentType", type: "Enum", required: true, description: "Cinematic Video | Animation / Motion | Still Photography | 3D Product Visual" },
        { key: "aspectRatio", type: "String", required: true, description: "Aspect ratio and pixel dimension (e.g. 16:9 Cinema 3840x2160, 9:16 Vertical)" },
        { key: "promptArchitecture", type: "Text", required: true, description: "Exact positive prompt structure and stylistic triggers" },
        { key: "negativePrompt", type: "Text", required: true, description: "Negative prompt tokens used to prune unwanted artifacts" },
        { key: "workflowBreakdown", type: "Array<PipelineStep>", required: true, description: "Step-by-step multi-model pipeline: [{ step, model, parameters, notes }]" },
        { key: "seedMetadata", type: "Object", required: true, description: "{ seed: 9482103, sampler: 'Euler a', cfgScale: 7.5, steps: 35 }" },
        { key: "commercialLicensing", type: "String", required: true, description: "Commercial clearance tier (e.g., 'Full Global Buyout')" }
      ],
      sampleJson: {
        "id": "p-10948",
        "title": "Aura Céleste Perfume Film",
        "contentType": "Cinematic Video",
        "aspectRatio": "16:9 Cinema (3840x2160)",
        "promptArchitecture": "Cinematic medium close-up, celestial goddess pouring liquefied starlight...",
        "negativePrompt": "cartoon, low resolution, bad hands, distorted anatomy...",
        "workflowBreakdown": [
          { "step": "01 Keyframe Gen", "model": "Flux.1 Dev", "seed": 9482103 },
          { "step": "02 Motion Synthesis", "model": "Runway Gen-3 Alpha", "camera": "Orbital push" }
        ],
        "commercialLicensing": "Full Global Buyout (Perpetual Broadcast)"
      }
    },
    {
      name: "CreativeBrief (Brand / Agency Brief)",
      purpose: "Captures brand requirements, styling specifications, model constraints, and legal commercial-use stipulations.",
      fields: [
        { key: "id", type: "UUID", required: true, description: "Brief identifier" },
        { key: "title", type: "String", required: true, description: "Campaign headline" },
        { key: "brand", type: "String", required: true, description: "Brand / agency publishing the brief" },
        { key: "contentType", type: "Enum", required: true, description: "Desired medium (Video, Still, 3D, Character)" },
        { key: "styleAesthetic", type: "String", required: true, description: "Visual direction (e.g., 'Mystical Ethereal', 'Cyberpunk')" },
        { key: "formatAspectRatio", type: "String", required: true, description: "Delivery specifications (e.g., '16:9 4K Cinema + 9:16 Social Cutdown')" },
        { 
          key: "commercialRequirements", 
          type: "Object", 
          required: true, 
          description: "{ licenseType: 'Full Buyout' | 'Exclusive 2-Yr' | 'Digital Only', rawAssetsDelivery: Boolean, modelTrainingProhibition: Boolean, indemnityRequired: Boolean }" 
        },
        { key: "budgetRange", type: "Object", required: true, description: "{ min: 550000, max: 750000, currency: 'INR' }" },
        { key: "requiredTools", type: "Array<String>", required: false, description: "Preferred toolchain or open to creator choice" },
        { key: "deliverables", type: "Array<String>", required: true, description: "Specific deliverables checklist" }
      ],
      sampleJson: {
        "id": "b-8821",
        "title": "Vogue Celestial: Autumn 2026 Film",
        "brand": "Vogue Global Editions",
        "contentType": "Cinematic Video",
        "styleAesthetic": "Mystical Ethereal & Haute Couture",
        "formatAspectRatio": "16:9 Cinema Master + 9:16 Social Cutdown (4K ProRes)",
        "commercialRequirements": {
          "licenseType": "Full Global Buyout (Perpetual Broadcast & Digital)",
          "rawAssetsDelivery": true,
          "modelTrainingProhibition": true,
          "indemnityRequired": true
        },
        "budgetRange": { "min": 550000, "max": 750000, "currency": "INR" }
      }
    },
    {
      name: "EngagementWorkflow",
      purpose: "Tracks contract execution from brief matching through escrow-backed milestone delivery, latent validation, and IP sign-off.",
      fields: [
        { key: "id", type: "UUID", required: true, description: "Contract identifier" },
        { key: "briefId", type: "UUID", required: true, description: "Originating creative brief" },
        { key: "creatorId", type: "UUID", required: true, description: "Hired creator" },
        { key: "escrowAmount", type: "Number", required: true, description: "Escrow funds locked in smart vault" },
        { key: "milestones", type: "Array<MilestoneObject>", required: true, description: "[{ title, status, payout, notes, artifacts }]" },
        { key: "ipReleaseSigned", type: "Boolean", required: true, description: "Legal clearance executed upon final payout" }
      ],
      sampleJson: {
        "id": "eng-101",
        "briefId": "brief-1",
        "creatorId": "creator-1",
        "escrowAmount": 645000,
        "currentStage": "Milestone 2: Motion Generations Review",
        "milestones": [
          { "title": "Keyframe Identity Lock", "status": "Approved", "payout": 210000 },
          { "title": "Motion Generation", "status": "In Client Review", "payout": 235000 },
          { "title": "4K Master & IP Release", "status": "Pending", "payout": 200000 }
        ]
      }
    }
  ]
};
