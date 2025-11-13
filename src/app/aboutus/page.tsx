import Global from "@/components/Pages/About/Global";
import Team from "@/components/Pages/About/Team";
import Cta from "@/components/Pages/About/Cta";
import Hero from "@/components/Pages/About/Hero";
import Culture from "@/components/Pages/About/Culture";
import Blog from "@/components/UI/Blog"


import CallToAction from "@/components/UI/CallToAction"
import { Sekleton } from "@/components/Layout/Sekleton";
  
export default function page() {
  return (
    <Sekleton grid={true}>
          <Hero/>
          <Culture/>
          <Global/>
          <Cta/>
          <Team />
          <Blog/>
          <CallToAction/>
    </Sekleton>
  );
}
