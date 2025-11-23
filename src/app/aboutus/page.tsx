import Global from "@/components/Pages/About/Global";
import Team from "@/components/Pages/About/Team";
import { Process } from "@/components/Pages/About/Process";
import Vision from "@/components/Pages/About/Vision";
import Hero from "@/components/Pages/About/Hero";
import Culture from "@/components/Pages/About/Culture";
import Blog from "@/components/UI/Blog";

import CallToAction from "@/components/UI/CallToAction";
import { Sekleton } from "@/components/Layout/Sekleton";

const coreValues = [
  "Excellence",
  "Integrity",
  "Global Connectivity",
  "Innovation",
  "Collaboration",
];

export default function page() {
  return (
    <Sekleton grid={true}>
      <Hero />
      <Culture
        title="The Core Beat: What Drives Us Forward"
        tagline="Core Values"
        data={coreValues}
      />
      <Vision />
      <Global />
      <Team />
      <Process />

      <Blog />
      <CallToAction />
    </Sekleton>
  );
}
