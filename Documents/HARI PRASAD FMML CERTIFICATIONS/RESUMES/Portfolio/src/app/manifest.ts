import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hari Prasad Chinimilli — Portfolio",
    short_name: "Hari Prasad Chinimilli",
    description: "Portfolio of Hari Prasad Chinimilli — Prompt Engineer & Generative AI Specialist",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/avatar.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  }
}
