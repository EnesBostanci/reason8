import { Sekleton } from "@/components/Layout/Sekleton";
import Introduction from "@/components/Pages/Portfolio/CaseStudies/Introduction";
import Cta from "@/components/Pages/About/Cta";
import Challenges from "@/components/Pages/Portfolio/CaseStudies/Challenges";
import Hero from "@/components/Pages/Portfolio/CaseStudies/Hero";
import People from "@/components/Pages/Portfolio/CaseStudies/People";
import Help from "@/components/Pages/Portfolio/CaseStudies/Help";
import Content from "@/components/Pages/Services/Content";
import Showreel from "@/components/Pages/Portfolio/Showreel";
import Key from "@/components/Pages/Portfolio/Key";
import ProductCenter from "@/components/Pages/Products/ProductCenter";

import Blog from "@/components/UI/Blog";
import Photo from "@/components/Pages/Portfolio/CaseStudies/Photo";

const challengesData = {
  title: "Scope of Work",
  imgUrl: "/studies/abudhabi/challenges.png",
  sub: [
    {
      subtitle: "Art Direction & Work Executed",
      subDesc:
        "In the realm of art direction and technical execution for ADM's rebranding, ID8 Media and Reson8 Media showcased profound capabilities through meticulous planning and innovative solutions. The endeavor was not just about aesthetic enhancement but a comprehensive reimagining of the broadcast experience.",
    },
    {
      subtitle: "Development of New Visual Identity",
      subDesc:
        "The creative team embarked on creating a visual identity that mirrors ADM's ethos of modernity and innovation. This involved a deep dive into color psychology, typography, and visual storytelling, ensuring that every design element aligns with ADM's mission and audience expectations.",
    },
    {
      subtitle: "Customization of VIZrt Templates",
      subDesc:
        "The technical capabilities of the team were highlighted in their customization of VIZrt templates. This wasn't merely about aesthetic customization but integrating flexibility for dynamic content presentation. They enabled real-time updates and augmented reality features, pushing the boundaries of traditional news broadcasting.",
    },
    {
      subtitle: "Production Workflow Optimization",
      subDesc:
        "Operational excellence was achieved through the introduction of automated processes. The shift towards automation was strategic, significantly reducing manual labor and thereby enhancing the efficiency and pace of content production. This approach allowed for a more agile response to the fast-evolving news landscape, ensuring ADM's content remains relevant and engaging.",
    },
  ],
};
const hero = {
  title: "Abu Dhabi Media Network",
  subtitle:
    "News Programs Rebranding & VIZrt templates Strategic Overview of ID8 Media's Visual Mastery in Abu Dhabi's Channel Identity",
  description:
    "In a visionary quest to set a new standard in broadcast media In a visionary quest to set a new standard in broadcast media, Abu Dhabi Media Network embarked on an extensive rebranding campaign, harnessing the power of advanced VIZrt templates to elevate its news programs. This initiative, led by the collaborative expertise of ID8 Media and Reson8 Media, marks a significant leap towards reimagining how news is presented. The project underscores a harmonious blend of creative ingenuity and technical prowess, setting new benchmarks for the industry. Through their focused efforts, ID8 Media brought to life a refreshed visual identity, while Reson8 Media's mastery over VIZrt templates introduced dynamic, smart, and engaging content delivery methods",
  img: "studies/abudhabi/hero.png",
};

const strategy = {
  title: "Strategic Overview Addressing ADM Challenges",
  subtitle:
    "Holistic Visual Identity & Workflow Optimization for Abu Dhabi Media",
  description:
    "In addressing the challenges faced by Abu Dhabi Media (ADM), a strategic and analytical approach was paramount to achieving the project's ambitious goals. The strategy entailed a holistic revamp of ADM's visual identity, leveraging state-of-the-art VIZrt templates to facilitate dynamic content integration. This approach was aimed not only at modernizing the visual presentation of news programs but also at optimizing production workflows. By streamlining operations, the project significantly improved operational efficiency, enabling the creation and delivery of engaging content that resonates with contemporary audiences.",
  img: "studies/abudhabi/12.png",
};

const overview = {
  title: "Introduction to the Case Study",
  description:
    "At the forefront of redefining the visual and operational landscape of its news programs, Abu Dhabi Media Network's initiative sought not only to enhance the viewer experience but also to pioneer efficiencies in content production processes. ID8 Media's creative vision and Reson8 Media's technical acumen were instrumental in driving this transformative journey. Their partnership catalyzed the evolution of broadcast media, achieving an unparalleled milestone that harmonized aesthetic appeal with functional innovation.",
  imgUrl: "studies/abudhabi/21.png",
};

const contentData = [
  {
    category: "Defining the Challenge",
    description:
      "The ambitious endeavor to modernize the Abu Dhabi Media Network's (ADM) news programs presented a multi-faceted challenge. At the heart of this initiative was the goal to refresh the visual and functional aspects of ADM's broadcasts to align with the evolving expectations of a global audience, all while enhancing production efficiencies through the use of sophisticated VIZrt templates.",
    imgUrl: "studies/abudhabi/14.png",
    dir: true,
  },
  {
    category: "The Need for ID8 Media & Reson8 Media Expertise",
    description:
      "The partnership between ID8 Media and Reson8 Media for the Abu Dhabi Media Network (ADM) project showcases a formidable blend of creative and technical expertise tailored to overcome substantial project management and artistic challenges. From the outset, ID8 Media was tasked with the creative overhaul of ADM's news programming, a responsibility that demanded not only aesthetic innovation but also a strategic reimagining of how news content could be engagingly presented to a global audience. This entailed crafting new branding packages that respected ADM's heritage while propelling its visual identity into the future, a task that required deep understanding of brand consistency and viewer engagement.",
    imgUrl: "studies/abudhabi/07.png",
    dir: false,
  },
];

export default function page() {
  return (
    <Sekleton>
      <Hero
        title={hero.title}
        subTitle={hero.subtitle}
        description={hero.description}
        imgUrl={hero.img}
      />
      <People
        title={overview.title}
        description={overview.description}
        imgUrl={overview.imgUrl}
      />

      <Help />
      <Content data={contentData[0]} />
      <Showreel />
      <Content data={contentData[1]} />
      {/* video */}
      <div className="isolate mt-32 sm:mt-40 w-full">
        <div className="aspect-5/2 w-full overflow-hidden outline-1 -outline-offset-1 outline-black/5 xl:rounded-3xl dark:outline-white/10">
          <iframe
            className="w-full h-full"
            src="https://player.vimeo.com/video/924602046?autoplay=0&muted=0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Hero
        title={strategy.title}
        subTitle={strategy.subtitle}
        description={strategy.description}
        imgUrl={strategy.img}
      />
      <Challenges
        header={challengesData.title}
        sub={challengesData.sub}
        imgUrl={challengesData.imgUrl}
      />
      <Key />
      <ProductCenter />

      <Cta
        title="Let’s Build Your Future"
        description="Looking to launch or transform your channel? Contact Reson8 Media to bring your vision to life."
      />
      <Blog title="More case studies" />
    </Sekleton>
  );
}
