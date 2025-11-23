import { Sekleton } from "@/components/Layout/Sekleton";
import Hero from "@/components/Layout/Hero";
import CallToAction from "@/components/UI/CallToAction";
import Blog from "@/components/UI/Blog";
import Clients from "@/components/Pages/Home/Clients";
import Image from "next/image";

const clients = {
  title: "OUR CLIENTS",
  header: "Those Who Trust Us to Tell Their Stories",
  description:
    "We partner with broadcasters, brands, and creators who value bold ideas and exceptional storytelling — delivering work that resonates across industries and audiences.",
};
const partners = [
  { name: "Fivefold", logo: "/partners/fivefold.png" },
  { name: "IABM", logo: "/partners/iabm.png" },
  { name: "Vizrt", logo: "/partners/vizrt.webp" },
  {
    name: "Zero Density",
    logo: "/partners/zerodensity.png",
  },
];

const partnersTitle = {
  title: "OUR PARTNERS",
  header: "Creating More, Together",
  description:
    "We collaborate with leading technology and creative partners to elevate our capabilities and deliver world-class media solutions.",
};

export default function page() {
  return (
    <Sekleton bg="bg-gray-50">
      <Hero data={partnersTitle} />
      <section className="bg-primary- py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {partners.map((partner, id) => (
              <div key={id} className="flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={158}
                  height={48}
                  className="max-h-12 w-full object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Hero data={clients} />
      <Clients />
      <Blog />
      <CallToAction />
    </Sekleton>
  );
}
