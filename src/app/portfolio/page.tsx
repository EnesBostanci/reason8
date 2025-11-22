import CallToAction from "@/components/UI/CallToAction";
import { Sekleton } from "@/components/Layout/Sekleton";

import Clients from "@/components/Pages/Home/Clients";
import Features from "@/components/Pages/Portfolio/Features";
import Hero from "@/components/Layout/Hero";
const heroTitle = {
  title: "OUR WORK ",
  header: "Where Ideas Become Impact",
  description:
    "From channel branding to immersive experiences, our work blends creativity and technology to shape stories that captivate, inspire, and perform.",
};
export default function page() {
  return (
    <Sekleton grid={true}>
      <Hero data={heroTitle} />
      <Features />
      <Clients />
      <CallToAction clasName="mt-20" />
    </Sekleton>
  );
}
