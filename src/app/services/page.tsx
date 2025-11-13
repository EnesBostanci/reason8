import Blog from "@/components/UI/Blog"
import Hero from "@/components/Layout/Hero"
import CallToAction from "@/components/UI/CallToAction"
import Content from "@/components/Pages/Services/Content"
import { Sekleton } from "@/components/Layout/Sekleton";

const servicesData=[
  {imgUrl:'/Services/01.jpg',dir:true},
  {imgUrl:'/Services/02.jpg',dir:false},
  {imgUrl:'/Services/03.jpg',dir:true},
  {imgUrl:'/Services/04.jpg',dir:false},
  {imgUrl:'/Services/05.jpg',dir:true},
  {imgUrl:'/Services/06.jpg',dir:false},
  {imgUrl:'/Services/07.jpg',dir:true},

]

export default function page() {
  return (
    
    <Sekleton grid={true}>
      <Hero/>

      {
        servicesData.map((c,id)=>(
        <Content key={id} imgUrl={c.imgUrl} dir={c.dir}/>
      ))
      }
      <CallToAction/>
      <Blog/>
    </Sekleton>
  );
}
