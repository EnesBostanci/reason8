import Hero from "@/components/Pages/Home/Hero";
import Logo from "@/components/Pages/Home/Logo";
import Portfolio from "@/components/Pages/Home/Portfolio";
import BentoGrid from "@/components/Pages/Home/BentoGrid"
import CallToAction from "@/components/UI/CallToAction"
import Testimonials from "@/components/Pages/Home/Testimonials"
import Clients from "@/components/Pages/Home/Clients";
import Services from "@/components/Pages/Home/Services";
import { Sekleton } from "@/components/Layout/Sekleton";




export default function page() {
  return (
    <Sekleton>
          <Hero/>
          <Clients/>
          <Services/>
          <BentoGrid/>
          <Portfolio/>
          <Logo/>
          <Testimonials/>
          <CallToAction/>
    </Sekleton>
  );
}
