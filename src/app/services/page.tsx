import Blog from "@/components/UI/Blog";
import Hero from "@/components/Layout/Hero";
import CallToAction from "@/components/UI/CallToAction";
import Content from "@/components/Pages/Services/Content";
import { Sekleton } from "@/components/Layout/Sekleton";

const services = [
  {
    category: "Channel Branding & Rebranding",
    description:
      "We shape strong visual identities that elevate how audiences experience your channel.",
    offerings: [
      "Story-driven brand development and identity systems",
      "High-impact motion graphics and immersive branding elements",
      "Full channel launch and rebranding programs",
    ],
    imgUrl: "/Services/01.jpg",
    dir: true,
  },
  {
    category: "Real-Time Graphics & Data Platforms",
    description:
      "We turn complex data into compelling, real-time visual stories.",
    offerings: [
      "Data-integrated graphics for news, sports, finance, and live events",
      "Automated data feeds and intelligent visualization",
      "AI-powered graphic automation for fast, accurate on-air content",
    ],
    imgUrl: "/Services/02.jpg",
    dir: false,
  },
  {
    category: "Template Building & Automation",
    description:
      "We build powerful, flexible, and efficient templates that transform newsroom operations.",
    offerings: [
      "Real-time production templates for dynamic storytelling",
      "Smart transition logic and automated content generation",
      "Workflow optimization for faster, cleaner, more consistent output",
      "Viz Pilot Edge transformation and modernization of graphics workflows",
    ],
    imgUrl: "/Services/03.jpg",
    dir: true,
  },
  {
    category: "Strategy & Training",
    description:
      "We guide teams toward smarter, more efficient, and more creative media operations.",
    offerings: [
      "Workflow enhancements and operational efficiency planning",
      "AI-powered content and production strategies",
      "Hands-on training for newsrooms, designers, and broadcast teams",
    ],
    imgUrl: "/Services/04.jpg",
    dir: false,
  },
  {
    category: "Broadcast Set Design & Virtual Experiences",
    description:
      "We build physical and virtual environments that bring stories to life.",
    offerings: [
      "XR, AR, and VR-powered studio environments",
      "Interactive touchscreen systems for dynamic on-air engagement",
      "Immersive virtual production experiences and virtual sets",
    ],
    imgUrl: "/Services/05.jpg",
    dir: true,
  },
  {
    category: "AI-Powered Media Solutions",
    description:
      "We use AI to reshape how media is created, delivered, and experienced.",
    offerings: [
      "AI-driven content creation and smart visualization tools",
      "Automation across news, sports, and entertainment workflows",
      "Real-time AI systems that enhance speed, accuracy, and insight",
    ],
    imgUrl: "/Services/06.jpg",
    dir: false,
  },
];

const heroTitle = {
  title: "OUR SERVICES",
  header: "Discover what we do best",
  description:
    "At Reson8 Media, we combine technology, creativity, and AI-driven innovation to help broadcasters elevate their storytelling, streamline workflows, and build future-ready media ecosystems.",
};

export default function page() {
  return (
    <Sekleton grid={true}>
      <Hero data={heroTitle} />

      {services.map((c, id) => (
        <Content key={id} data={c} />
      ))}
      <CallToAction />
      <Blog />
    </Sekleton>
  );
}
