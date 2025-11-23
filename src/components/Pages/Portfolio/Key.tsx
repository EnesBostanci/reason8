"use client";
import { FadeIn } from "@/components/Layout/FadeIn";
import { Container } from "@/components/UI/SekletonCom/Container";
import { List, ListItem } from "@/components/Layout/List";
import Image from "next/image";

const keys = [
  {
    category: "Key Deliverables Included",
    description:
      "The collaboration between art direction and technical execution within this project underscored the necessity of integrating creative vision with technical innovation. The result was a seamlessly executed rebranding that elevated ADM's positioning in the competitive media landscape, showcasing a future-forward approach to news broadcasting.",
  },
  {
    category: "GFX Packages for Various News Shows",
    description:
      "Including openers, stings, wipes, and video wall background loops for news bulletins, sports, economic bulletins, and more, each meticulously designed to align with the unique essence of the respective segments.",
  },
  {
    category: "VIZrt Smart/Dynamic Video Wall Templates",
    description:
      "Crafted to cover a wide range of content from general news to sports, these templates offer producers and users enhanced flexibility and creativity in content delivery.",
  },
  {
    category: "Video Wall Background Loops",
    description:
      "Custom loops for different shows and programs, enhancing the visual backdrop of live studio recordings.",
  },
];
export default function Key() {
  return (
    <>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end relative">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="flex-none w-[31rem] lg:w-[41rem]">
              <div className="relative w-full aspect-[600/680] rounded-3xl overflow-hidden">
                <Image
                  src="/studies/abudhabi/06.png"
                  alt=""
                  fill
                  className="object-fill"
                  sizes="(min-width: 1024px) 41rem, 31rem"
                />
              </div>
            </FadeIn>
          </div>
          <div className="flex md:flex-col">
            <List className="mt-16 lg:mt-0 lg:pl-4">
              {keys.map((l, id) => (
                <ListItem title={l.category} key={id}>
                  {l.description}
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </Container>
    </>
  );
}
