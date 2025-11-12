import Blog from "@/components/UI/Blog"
import CallToAction from "@/components/UI/CallToAction"
import Content from "@/components/Pages/Services/Content"
import { Sekleton } from "@/components/Layout/Sekleton";


export default function Home() {
  return (
    <Sekleton>
      <Content/>
      <Content/>
      <Content/>
      <Content/>
      <Content/>
      <Content/>
      <CallToAction/>
      <Blog/>
    </Sekleton>
  );
}
