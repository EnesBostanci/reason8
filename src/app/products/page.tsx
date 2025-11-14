import CallToAction from "@/components/UI/CallToAction"
import Blog from "@/components/UI/Blog"
import ProductRight from "@/components/Pages/Products/ProductRight"
import Productleft from "@/components/Pages/Products/Productleft"
import Hero from "@/components/Pages/Products/Hero";
import { Sekleton } from "@/components/Layout/Sekleton";

import ProductCenter from "@/components/Pages/Products/ProductCenter"

export default function page() {
  return (
    <Sekleton >
      <Hero/>
      <ProductRight/>
      <ProductCenter/>
      <Productleft/>
      <CallToAction/>
      <Blog/>
    </Sekleton>
  );
}
