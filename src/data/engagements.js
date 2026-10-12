// Mock data for Active Engagements (Discovery to Delivery)

export const INITIAL_ENGAGEMENTS = [
  {
    id: "eng-101",
    campaignTitle: "Vogue Celestial: Autumn 2026 Film",
    client: "Vogue Global Editions",
    creator: {
      name: "Elena Rostova",
      handle: "@elena.latent",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
    },
    totalBudget: "₹6,45,000",
    escrowStatus: "100% Escrow Funded (₹6,45,000 in Stardust Escrow)",
    stage: "Milestone 2: Motion Generations Review",
    currentStepIndex: 2, // 0: Discovery, 1: Keyframe Pass, 2: Motion Gen, 3: Final Delivery, 4: Completed
    progressPercent: 65,
    dueDate: "October 24, 2026",
    deliverablesSpec: "45s Master 4K Film + 3x 9:16 Social Cutdowns + Prompt JSON Manifest",
    milestones: [
      {
        id: "m1",
        title: "Keyframe Aesthetics & Character Identity Lock",
        status: "Completed & Approved",
        payout: "₹2,10,000",
        date: "Oct 08, 2026",
        notes: "Approved 6 keyframes with 99.4% facial consistency on custom Flux.1 LoRA."
      },
      {
        id: "m2",
        title: "Motion Generation & Runway Gen-3 First Cut",
        status: "In Client Review",
        payout: "₹2,35,000",
        date: "Current Phase",
        notes: "Uploaded 45s draft with preliminary audio track. Client reviewing camera tracking speed."
      },
      {
        id: "m3",
        title: "4K Topaz Upscaling, DaVinci Grade & Commercial IP Transfer",
        status: "Pending Delivery",
        payout: "₹2,00,000",
        date: "Est. Oct 22, 2026",
        notes: "Final master files, ProRes 422 HQ delivery, and digital certificate signed."
      }
    ],
    submissionAssets: [
      {
        name: "vogue_celestial_cut02_4k_preview.mp4",
        size: "248 MB",
        type: "Motion Video",
        modelUsed: "Runway Gen-3 + Topaz 5",
        status: "Ready for review"
      },
      {
        name: "character_lora_seed_manifest.json",
        size: "14 KB",
        type: "Prompt & Seed Metadata",
        modelUsed: "Flux.1 Dev",
        status: "Verified checksum"
      },
      {
        name: "commercial_rights_certificate_vogue.pdf",
        size: "1.2 MB",
        type: "Legal Indemnity",
        modelUsed: "Nebula Escrow Legal",
        status: "Countersigned"
      }
    ]
  },
  {
    id: "eng-102",
    campaignTitle: "Lumina Elixirs: Fragrance Teaser",
    client: "Lumina Fragrances Paris",
    creator: {
      name: "Zephyr Studio",
      handle: "@zephyr.creative",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80"
    },
    totalBudget: "₹3,95,000",
    escrowStatus: "100% Escrow Funded (₹3,95,000)",
    stage: "Milestone 3: Final Delivery & Asset Handoff",
    currentStepIndex: 3,
    progressPercent: 95,
    dueDate: "Tomorrow, 5:00 PM",
    deliverablesSpec: "30s Hero Reel + 15s Teaser + Stems + Generation ComfyUI Nodes",
    milestones: [
      {
        id: "m1",
        title: "Bottle CAD Alignment & Lighting Setup",
        status: "Completed & Approved",
        payout: "₹1,30,000",
        date: "Oct 04, 2026",
        notes: "ControlNet line pass validated against fragrance CAD specifications."
      },
      {
        id: "m2",
        title: "Fluid Dynamics Simulation & Kling Renders",
        status: "Completed & Approved",
        payout: "₹1,30,000",
        date: "Oct 09, 2026",
        notes: "Mesmerizing champagne fluid pour approved by creative lead."
      },
      {
        id: "m3",
        title: "Final 4K Master & IP Release",
        status: "Action Required: Approve Final Delivery",
        payout: "₹1,35,000",
        date: "Pending Client Sign-off",
        notes: "All 4K video exports and ComfyUI workflow JSON files uploaded."
      }
    ],
    submissionAssets: [
      {
        name: "lumina_starlight_master_4k_prores.mov",
        size: "1.8 GB",
        type: "Master Video",
        modelUsed: "Kling 1.5 + Flux.1 + Topaz",
        status: "Ready for download"
      },
      {
        name: "comfyui_fragrance_workflow_graph.json",
        size: "82 KB",
        type: "Workflow Blueprint",
        modelUsed: "ComfyUI v0.2.4",
        status: "Tested & Reproducible"
      }
    ]
  }
];
