import Blog from "@/components/UI/Blog";
import Hero from "@/components/Layout/Hero";
import CallToAction from "@/components/UI/CallToAction";
import Content from "@/components/Pages/Services/Content";
import { Sekleton } from "@/components/Layout/Sekleton";

const servicesData = [
  { imgUrl: "/Services/01.jpg", dir: true },
  { imgUrl: "/Services/02.jpg", dir: false },
  { imgUrl: "/Services/03.jpg", dir: true },
  { imgUrl: "/Services/04.jpg", dir: false },
  { imgUrl: "/Services/05.jpg", dir: true },
  { imgUrl: "/Services/06.jpg", dir: false },
  { imgUrl: "/Services/07.jpg", dir: true },
];

const servicesData2 = [
  {
    title: "Channel Branding & Rebranding",
    text: "We shape strong visual identities that elevate how audiences experience your channel.",
    header_2: "What we deliver:",
    bolt_1: "Story-driven brand development and identity systems",
    bolt_2: "High-impact motion graphics and immersive branding elements",
    bolt_3: "Full channel launch and rebranding programs",
    imgUrl: "/Services/01.jpg",
    dir: true,
  },
  {
    title: "Real-Time Graphics & Data Platforms",
    text: "We turn complex data into compelling, real-time visual stories.",
    header_2: "Capabilities include:",
    bolt_1:
      "Data-integrated graphics for news, sports, finance, and live events",
    bolt_2: "Automated data feeds and intelligent visualization",
    bolt_3: "AI-powered graphic automation for fast, accurate on-air content",
    imgUrl: "/Services/01.jpg",
    dir: false,
  },
  {
    title: "Template Building & Automation",
    text: "We build powerful, flexible, and efficient templates that transform newsroom operations.",
    header_2: "Our expertise:",
    bolt_1: "Real-time production templates for dynamic storytelling",
    bolt_2: "Smart transition logic and automated content generation",
    bolt_3: "Workflow optimization for faster, cleaner, more consistent output",
    imgUrl: "/Services/01.jpg",
    dir: true,
  },
  {
    title: "Strategy & Training",
    text: "We guide teams toward smarter, more efficient, and more creative media operations.",
    header_2: "What we offer:",
    bolt_1: "Workflow enhancements and operational efficiency planning",
    bolt_2: "AI-powered content and production strategies",
    bolt_3: "Hands-on training for newsrooms, designers, and broadcast teams",
    imgUrl: "/Services/01.jpg",
    dir: false,
  },
  {
    title: "Broadcast Set Design & Virtual Experiences",
    text: "We build physical and virtual environments that bring stories to life.",
    header_2: "Specializations:",
    bolt_1: "XR, AR, and VR-powered studio environments",
    bolt_2: "Interactive touchscreen systems for dynamic on-air engagement",
    bolt_3: "Immersive virtual production experiences and virtual sets",
    imgUrl: "/Services/01.jpg",
    dir: true,
  },
  {
    title: "AI-Powered Media Solutions",
    text: "We use AI to reshape how media is created, delivered, and experienced.",
    header_2: "Solutions include:",
    bolt_1: "AI-driven content creation and smart visualization tools",
    bolt_2: "Automation across news, sports, and entertainment workflows",
    bolt_3: "Real-time AI systems that enhance speed, accuracy, and insight",
    imgUrl: "/Services/01.jpg",
    dir: false,
  },
];

export default function page() {
  return (
    <Sekleton grid={true}>
      <Hero />

      {servicesData.map((c, id) => (
        <Content key={id} imgUrl={c.imgUrl} dir={c.dir} />
      ))}
      <CallToAction />
      <Blog />
    </Sekleton>
  );
}
