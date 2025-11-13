import CallToAction from "@/components/UI/CallToAction"
import BentoGrid from "@/components/UI/BentoGrid"
import { Sekleton } from "@/components/Layout/Sekleton";
import Clients from "@/components/Pages/Home/Clients";
import Features from "@/components/Pages/Portfolio/Features";
import Hero from "@/components/Layout/Hero";
export default function page() {
  return (
    <Sekleton grid={true}>
      <Hero/>
      <Clients/>
      <Features/>
      <BentoGrid/>
      <CallToAction/>
    </Sekleton>
  );
}
