import BentoGrid from "@/components/UI/BentoGrid"
import { Sekleton } from "@/components/Layout/Sekleton";

import Introduction from "@/components/Pages/Portfolio/CaseStudies/Introduction"
import Focus from "@/components/Pages/Portfolio/CaseStudies/Focus"
import Help from "@/components/Pages/Portfolio/CaseStudies/Help"
import People from "@/components/Pages/Portfolio/CaseStudies/People"
import Art from "@/components/Pages/Portfolio/CaseStudies/Art"
import Challenges from "@/components/Pages/Portfolio/CaseStudies/Challenges"
import Project from "@/components/Pages/Portfolio/CaseStudies/Project"
import Hero from "@/components/Pages/Portfolio/CaseStudies/Hero"
import Content from "@/components/Pages/Services/Content";
import Cta from "@/components/Pages/About/Cta";
import Blog from "@/components/UI/Blog"
import Photo from "@/components/Pages/Portfolio/CaseStudies/Photo"

export default function page() {
  return (
    <Sekleton bg="bg-gray-50">
      <Hero/>
      <Introduction/>
      <Focus/>
      <Challenges/>
      <Art/>
      <Project/>
      <Photo/>
      <Introduction/>
      <BentoGrid/>
      <Content imgUrl='/Services/01.jpg' dir={false}/>
      <People/>
      <Help/>
      <Cta/>
      <Blog/>
    </Sekleton>
  );
}
