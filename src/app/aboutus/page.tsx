import Global from "@/components/Pages/About/Global";
import Team from "@/components/Pages/About/Team";
import Cta from "@/components/Pages/About/Cta";
import Hero from "@/components/Pages/About/Hero";
import Culture from "@/components/Pages/About/Culture";
import Blog from "@/components/UI/Blog";

import CallToAction from "@/components/UI/CallToAction";
import { Sekleton } from "@/components/Layout/Sekleton";

const coreValues = {
  subheader: [
    "Excellence",
    "Integrity",
    "Global Connectivity",
    "Innovation",
    "Collaboration",
  ],
};

const creativeProcess = {
  subheader: [
    "Brief & Kickoff",
    "Strategy & Research",
    "Creative Development",
    "Moodboard & Storyboard",
    "Design & Animation",
    "Integration & Post-Production",
    "Delivery & Support",
  ],
  description: [
    "Aligning minds. Setting the game plan. With clarity comes momentum. We sit with our clients to align objectives, expectations, and success outcomes — setting the stage for a seamless journey.",
    "Smart creativity powered by insight. We combine deep industry research with data-driven strategy to ensure every creative decision stands on solid ground.",
    "Igniting ideas. Sharpening visions. Every powerful story begins with a spark. Our teams collaborate to spark bold ideas, explore new angles, and shape concepts that truly resonate.",
    "Visualizing the emotion. Framing the story. Before anything comes to life, we paint the vision. From moodboards that set tone and style to storyboards that map every moment — we bring clarity to the creative roadmap.",
    "Where imagination meets motion. Our designers and animators craft visuals that captivate — from cinematic motion graphics to immersive animations.",
    "Perfecting the masterpiece. Our post-production experts refine every pixel, sound, and sequence. From audio design to effects and editing, we ensure the final product is broadcast-ready and exceptional.",
    "Beyond delivery. We stay with you. Our partnership doesn’t end at handover. We support updates, refinements, and long-term optimization — ensuring your content continues to shine.",
  ],
  bullets: [
    [
      "Crystalizing objectives",
      "Setting expectations & deliverables",
      "Full stakeholder alignment",
    ],
    [
      "Market & audience insights",
      "Trend and competitive mapping",
      "Strategic integration into the creative plan",
    ],
    [
      "Fresh concept generation",
      "Cross-team creative collaboration",
      "Defining the project’s creative direction",
    ],
    [
      "Defining tone, look, and feel",
      "Scene-by-scene narrative planning",
      "Visual previews of the final direction",
    ],
    [
      "High-impact graphics & illustration",
      "Dynamic animation production",
      "Seamless alignment with narrative",
    ],
    [
      "Sound & audio design",
      "Visual effects and editing",
      "Rigorous quality assurance",
    ],
    [
      "Full content delivery",
      "Usage guidance & handover",
      "Ongoing support for updates",
    ],
  ],
};

const purposeAndAmbition = [
  {
    title: "Mission",
    description:
      "To revolutionize content creation and media workflows. Empowering broadcasters, agencies, and creators with cutting-edge tools and brilliant storytelling.",
  },
  {
    title: "Vision",
    description:
      "To lead the world of creative media, setting new standards through innovation, data intelligence, and bold storytelling.",
  },
];

export default function page() {
  return (
    <Sekleton grid={true}>
      <Hero />
      {/* Our Core Values*/}
      <Culture
        title="Core Values"
        tagline="The Core Beat: What Drives Us Forward"
        data={coreValues}
      />
      {/* Our Purpose & Ambition
       */}
      <Cta data={purposeAndAmbition[0]} />
      <Global />

      <Cta data={purposeAndAmbition[1]} />
      {/* creativeProcess */}
      <Culture
        title="OUR CREATIVE PROCESS"
        tagline="Crafting brilliance, one frame at a time"
        data={creativeProcess}
      />
      <Team />
      <Blog />
      <CallToAction />
    </Sekleton>
  );
}
