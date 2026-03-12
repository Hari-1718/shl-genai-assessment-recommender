import type { StaticImageData } from "next/image";

import PRODUCT_MANAGEMENT_IMAGE from "@/assets/product_management_img.png";
import STARTUP_ADVISORY_IMAGE from "@/assets/startup_advisory_img.png";
import VLSI_DESIGN_IMAGE from "@/assets/vlsi_design.png";
import EMBEDDED_SYSTEMS_IMAGE from "@/assets/embedded_systems.png";
import AI_ML_IMAGE from "@/assets/ai_ml.png";
import GENERATIVE_AI_IMAGE from "@/assets/generative_ai.png";
import DATA_ANALYTICS_IMAGE from "@/assets/data_analytics_img.png";
import QUANT_FINANCE_IMAGE from "@/assets/quant_finance_img.png";

export interface Service {
  icon: string;
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
  hasImageOverlay?: boolean;
}

export const SERVICES: Service[] = [
  {
    icon: "lightbulb",
    title: "Product Management",
    description:
      "Guidance on product vision, go\u2011to\u2011market strategy, innovation, and market insights to drive growth.",
    href: "/product-consulting#top",
    image: PRODUCT_MANAGEMENT_IMAGE,
    hasImageOverlay: true,
  },
  {
    icon: "rocket_launch",
    title: "Startup Advisory",
    description:
      "Early-stage guidance on business model, funding strategy, product-market fit, and scaling playbooks.",
    href: "/product-consulting#top",
    image: STARTUP_ADVISORY_IMAGE,
  },
  {
    icon: "memory",
    title: "VLSI Design",
    description:
      "End-to-end chip design, verification, and physical design services for next-gen silicon.",
    href: "/expertise#top",
    image: VLSI_DESIGN_IMAGE,
  },
  {
    icon: "developer_board",
    title: "Embedded Systems",
    description:
      "Firmware development, RTOS, and IoT integration for mission-critical industrial systems.",
    href: "/expertise#top",
    image: EMBEDDED_SYSTEMS_IMAGE,
  },
  {
    icon: "neurology",
    title: "AI & ML",
    description:
      "Custom model development, training, and deployment for scalable artificial intelligence solutions.",
    href: "/expertise#top",
    image: AI_ML_IMAGE,
  },
  {
    icon: "smart_toy",
    title: "Generative AI",
    description:
      "Fine-tuning LLMs and building RAG pipelines for enterprise-grade generative applications.",
    href: "/expertise",
    image: GENERATIVE_AI_IMAGE,
  },
  {
    icon: "analytics",
    title: "Data & Analytics",
    description:
      "Data science, annotation, analytics, and business intelligence services for data-driven insights.",
    href: "/expertise",
    image: DATA_ANALYTICS_IMAGE,
  },
  {
    icon: "trending_up",
    title: "Quant Finance",
    description:
      "Algorithmic trading, risk modeling, and quantitative strategies for financial innovation.",
    href: "/expertise",
    image: QUANT_FINANCE_IMAGE,
  },
];
