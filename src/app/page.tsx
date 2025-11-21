import Hero from "@/components/Pages/Home/Hero";
import Logo from "@/components/Pages/Home/Logo";
import Portfolio from "@/components/Pages/Home/Portfolio";
import BentoGridHome from "@/components/Pages/Home/BentoGridHome";
import CallToAction from "@/components/UI/CallToAction";
import Clients from "@/components/Pages/Home/Clients";
import Services from "@/components/Pages/Home/Services";
import { Sekleton } from "@/components/Layout/Sekleton";

export default function page() {
  return (
    <Sekleton>
      <Hero />
      <Clients />
      <Services />
      <BentoGridHome />
      <Portfolio />
      <Logo />
      <CallToAction />
    </Sekleton>
  );
}
