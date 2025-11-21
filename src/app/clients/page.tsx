import { Sekleton } from "@/components/Layout/Sekleton";
import Hero from "@/components/Layout/Hero";
import CallToAction from "@/components/UI/CallToAction";
import Blog from "@/components/UI/Blog";
import Clients from "@/components/Pages/Home/Clients";

export default function page() {
  return (
    <Sekleton bg="bg-gray-50">
      <Hero />
      <Clients />
      <Blog />
      <CallToAction />
    </Sekleton>
  );
}
