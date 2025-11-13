import CallToAction from "@/components/UI/CallToAction"
import BentoGrid from "@/components/UI/BentoGrid"
import { Sekleton } from "@/components/Layout/Sekleton";
import Clients from "@/components/Pages/Home/Clients";
import Features from "@/components/Pages/Portfolio/Features";
import Hero from "@/components/Pages/Portfolio/Hero";
export default function page() {
  return (
    <Sekleton grid={true}>
      <Hero/>
      <Features/>
      <BentoGrid/>
      <Clients/>
      <CallToAction/>
    </Sekleton>
  );
}
