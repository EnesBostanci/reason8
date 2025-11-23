import { Sekleton } from "@/components/Layout/Sekleton";
import Introduction from "@/components/Pages/Portfolio/CaseStudies/Introduction";
import Focus from "@/components/Pages/Portfolio/CaseStudies/Focus";
import Challenges from "@/components/Pages/Portfolio/CaseStudies/Challenges";
import Hero from "@/components/Pages/Portfolio/CaseStudies/Hero";
import People from "@/components/Pages/Portfolio/CaseStudies/People";
import Blog from "@/components/UI/Blog";
import Photo from "@/components/Pages/Portfolio/CaseStudies/Photo";
import Cta from "@/components/Pages/About/Cta";

const hero = {
  title: "Shams studio design and building",
  subtitle:
    "Launching Bold: Reson8 Media Designs Broadcast-Ready Studios for Shams TV",
  description:
    "Studio architecture, set design, AR-ready infrastructure, creative direction, functional layout consultation, and cross-format usability planning",
  img: "studies/studio/hero.JPG", // Fallback image
  video: "https://player.vimeo.com/video/1129506618?autoplay=1&muted=1&loop=1", // Video embed URL
  incentives: [
    {
      name: "Client",
      description: "Shams TV",
    },
    {
      name: "Sector",
      description: "Broadcast Media",
    },
    {
      name: "Location",
      description: " Erbil, Iraq",
    },
  ],
};

const strategic = {
  title: "Strategic Execution & Technical Consultation",
  subtitle:
    "End-to-End Studio Delivery with Technical Planning & Workflow Alignment",
  description:
    "Backed by a clear agreement, Reson8 Media provided end-to-end delivery — not only on physical sets, but on technical planning, broadcast-readiness, and workflow alignment.",
  img: "studies/studio/strategic.jpg",
  incentives: [
    {
      name: "Studio Spatial Planning",
      description:
        "Camera paths, lighting grids, and screen framing were all built with production workflow in mind",
    },
    {
      name: "AR Integration Readiness",
      description:
        "Infrastructure was laid to support future implementation of real-time graphics and tracking systems",
    },
    {
      name: "Talent & Crew Experience",
      description:
        "Designs emphasized comfort and accessibility — with presenter sightlines, lighting angles, and mobility all factored in",
    },
  ],
};

const ceoQuote = {
  quote:
    "Building from scratch gives you a rare opportunity to get it right from day one. These studios were designed to be intelligent, scalable, and creatively empowering. Shams TV is now equipped with a broadcast environment that meets today’s needs — and tomorrow’s ambitions.",
  author: "Ali Husseini",
  title: "Chief Technology Officer, Reson8 Media",
  imgUrl: "TeamPhotos/Ali.png",
};

const challengesData = {
  title: "Creative Direction: Building Identity Through Design",
  description:
    "With no legacy systems or visuals to constrain the approach, Reson8 Media had the opportunity to craft a bold, distinctive visual identity that defines Shams TV from its very first broadcast. The creative direction reflected the channel’s values: modern, credible, regionally grounded, and visually magnetic.",
  imgUrl: "/studies/studio/challenges.JPG",
  sub: [
    {
      subtitle: "Culturally-Rooted Modernism",
      subDesc:
        "A refined blend of contemporary architecture and Middle Eastern visual cues grounds the studio in place and purpose.",
    },
    {
      subtitle: "Modular, Format-Friendly Design",
      subDesc:
        "Custom-designed set elements, movable screens, and LED backdrops enable rapid transitions between formats and show types.",
    },
    {
      subtitle: "Cross-Platform Optimization",
      subDesc:
        "Every visual element was crafted with multi-platform broadcasting in mind — ensuring clarity and brand consistency across TV, mobile, and digital.",
    },
    {
      subtitle: "AR & Virtual Layering",
      subDesc:
        "Layouts were designed to support augmented reality, motion tracking, and virtual enhancements — expanding creative possibilities for editorial teams.",
    },
  ],
};

const challengesData_2 = {
  title: "Studio Engineering: Designed for Real-World Production",
  imgUrl: "/cases/studio.JPG",
  description:
    "Form met function in every design decision. As a new channel entering a competitive market, Shams TV needed studios that combine aesthetics with adaptability and performance.",
  sub: [
    {
      subtitle: "Studio A – News",
      subDesc:
        "- Ergonomic anchor desk layout with direct camera sightlines and teleprompter integration\n- Programmable ambient lighting for mood control during different news segments\n- Acoustic treatment to ensure clarity during high-pressure live broadcasts",
    },
    {
      subtitle: "Studio B – Current Affairs",
      subDesc:
        "- Flexible floor plan that supports interviews, roundtables, and long-form discussion\n- Integrated LED displays and controlled lighting zones to create segment distinction\n- Neutral tones with dynamic lighting overlays for visual range and variety",
    },
    {
      subtitle: "Studio C – General Programming",
      subDesc:
        "- Designed as a production playground: green screen walls, AR integration, and flexible sets\n- Ideal for cultural shows, entertainment formats, and seasonal programming\n- Quick-swap set configurations to support high-volume production cycles",
    },
  ],
};

const challengesData_3 = {
  title: "Impact & Value",
  description:
    "The Shams TV studios were delivered on schedule and on vision — establishing the infrastructure, identity, and flexibility needed to launch a premium news and entertainment channel in today’s fast-evolving broadcast landscape.",
  imgUrl: "/studies/studio/C3.JPG",
  sub: [
    {
      subtitle: "Visual Distinction",
      subDesc:
        "The sets immediately differentiate Shams TV from legacy competitors.",
    },
    {
      subtitle: "Production Agility",
      subDesc: "Teams can pivot between program types with minimal setup time.",
    },
    {
      subtitle: "On-Air Consistency",
      subDesc: "Branding remains sharp and cohesive across all content.",
    },
    {
      subtitle: "Future-Ready Foundation",
      subDesc:
        "With AR-ready pipelines and modular architecture, the studios are built to evolve.",
    },
  ],
};
const overview = {
  title: "Overview",
  description:
    "As part of the launch of Shams TV, a new satellite channel based in Erbil, Iraq, Reson8 Media was entrusted with the complete design and delivery of two modern television studios. These studios were conceived from the ground up to support the channel’s ambitious programming slate, spanning live news, current affairs, and cultural content, and to provide a professional, future-ready environment from day one.",
  subDescription:
    "This case study showcases how Reson8 Media’s cross-disciplinary team blended visual identity, technical infrastructure, and operational workflow into a cohesive and high-performance studio ecosystem tailored for a new voice in regional broadcasting.",
  imgUrl: "https://player.vimeo.com/video/1139701610?autoplay=1&muted=1&loop=1",
};
export default function page() {
  return (
    <Sekleton>
      <Hero
        title={hero.title}
        subTitle={hero.subtitle}
        description={hero.description}
        imgUrl={hero.img}
        video={hero.video}
        incentives={hero.incentives}
      />
      <People
        title={overview.title}
        description={overview.description}
        imgUrl={overview.imgUrl}
        subDescription={overview.subDescription}
        video
      />

      <Challenges
        header={challengesData.title}
        sub={challengesData.sub}
        imgUrl={challengesData.imgUrl}
        description={challengesData.description}
      />
      <Challenges
        header={challengesData_2.title}
        sub={challengesData_2.sub}
        imgUrl={challengesData_2.imgUrl}
        description={challengesData_2.description}
      />

      <Hero
        title={strategic.title}
        subTitle={strategic.subtitle}
        description={strategic.description}
        imgUrl={strategic.img}
        incentives={strategic.incentives}
      />
      <div className="isolate mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <video
          autoPlay
          loop
          muted
          src="studies/studio/spectator.MP4"
          className="aspect-5/2 w-full object-cover outline-1 -outline-offset-1 outline-black/5 xl:rounded-3xl dark:outline-white/10"
        />
      </div>
      <Focus
        author={ceoQuote.author}
        quote={ceoQuote.quote}
        imgUrl={ceoQuote.imgUrl}
        title={ceoQuote.title}
      />
      <Challenges
        header={challengesData_3.title}
        sub={challengesData_3.sub}
        imgUrl={challengesData_3.imgUrl}
        description={challengesData_3.description}
      />
      <Cta
        title="Let’s Build Your Future"
        description="Looking to launch or transform your channel? Contact Reson8 Media to bring your vision to life."
      />
      <Blog title="More case studies" />
    </Sekleton>
  );
}
