import { Sekleton } from "@/components/Layout/Sekleton";
import Introduction from "@/components/Pages/Portfolio/CaseStudies/Introduction";
import Focus from "@/components/Pages/Portfolio/CaseStudies/Focus";
import Challenges from "@/components/Pages/Portfolio/CaseStudies/Challenges";
import Hero from "@/components/Pages/Portfolio/CaseStudies/Hero";
import Cta from "@/components/Pages/About/Cta";
import Blog from "@/components/UI/Blog";
import Showreel from "@/components/Pages/Portfolio/CaseStudies/Showreel";

const hero = {
  title: "Shams TV – Pioneering Broadcast Innovation from Erbil",
  subtitle: "A complete creative and technical partnership by Reson8 Media",
  description:
    "In 2024, Shams TV launched as the first Arabic-speaking, pan-Arabic news channel broadcasting from Erbil, Iraq. To bring their ambitious vision to life, they partnered with Reson8 Media to build their brand, newsroom templates, and internal workflows from the ground up.",
  img: "studies/shams/hero.jpg",
};

const ceoQuote = {
  title: "From Our CEO",
  quote:
    "Our work with Shams TV was more than a creative partnership — it was a shared vision for what modern, forward-thinking broadcasting in the Arab world should look like. We’re proud to have built a system that empowers their team to move fast, stay consistent, and scale with confidence. We’re especially grateful to Shams TV’s leadership for their trust and collaboration throughout the journey.",
  author: "Rami Hosni",
  subtitle: "CEO, Reson8 Media",
  imgUrl: "TeamPhotos/Rami.png", // replace with real image path
};
const challengesData = {
  title: "Scope of Work",
  imgUrl: "/studies/shams/challenge_1.png",
  sub: [
    { subtitle: "On-Air Branding & Motion Theory" },
    { subtitle: "Template Innovation & Viz Pilot Edge Integration" },
    { subtitle: "Creative Manpower & Department Management" },
    { subtitle: "Creative Workflow Structuring" },
    { subtitle: "AR/VR Studio Readiness" },
  ],
};

const challengesData_2 = {
  title: "Challenges",
  imgUrl: "/studies/shams/challenge_2.png",
  sub: [
    {
      subtitle: "Accelerated Timeline",
      subDesc:
        "The project demanded a complete brand and technical rollout within a three-month window, necessitating rapid development and deployment.",
    },
    {
      subtitle: "Simultaneous Development Streams",
      subDesc:
        "Balancing brand creation, template development, and team training concurrently required meticulous coordination.",
    },
    {
      subtitle: "Technical Transition",
      subDesc:
        "Migrating from Viz Pilot (Template Wizard) to Viz Pilot Edge mid-project posed challenges in workflow adaptation and staff training.",
    },
  ],
};
export default function page() {
  return (
    <Sekleton>
      <Hero
        title={hero.title}
        subTitle={hero.subtitle}
        description={hero.description}
        imgUrl={hero.img}
      />
      <Challenges
        header={challengesData.title}
        sub={challengesData.sub}
        imgUrl={challengesData.imgUrl}
      />
      {/* split img */}
      <div className="isolate mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8 ">
        <img
          alt="splitImg"
          src="/studies/shams/split.png"
          className="aspect-5/2 w-full object-cover outline-1 -outline-offset-1 outline-black/5 xl:rounded-3xl dark:outline-white/10"
        />
      </div>
      <Introduction />

      <Showreel />
      <Focus
        author={ceoQuote.author}
        quote={ceoQuote.quote}
        imgUrl={ceoQuote.imgUrl}
        title={ceoQuote.title}
      />
      <Challenges
        header={challengesData_2.title}
        sub={challengesData_2.sub}
        imgUrl={challengesData_2.imgUrl}
      />

      <Cta
        title="Let’s Build Your Future"
        description="Looking to launch or transform your channel? Contact Reson8 Media to bring your vision to life."
      />
      <Blog title="More case studies" />
    </Sekleton>
  );
}
