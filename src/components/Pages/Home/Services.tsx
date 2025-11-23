"use client";
import { FadeIn } from "@/components/Layout/FadeIn";
import { Button } from "@/components/UI/SekletonCom/Button";
import { Container } from "@/components/UI/SekletonCom/Container";
import { List, ListItem } from "@/components/Layout/List";
import { SectionIntro } from "@/components/Layout/SectionIntro";
import { StylizedImage } from "@/components/Layout/StylizedImage";
import service1 from "@/../public/Services/Strategy.jpg";
import service2 from "@/../public/Services/ChannelBranding.jpg";
import service3 from "@/../public/Services/Real-Time.jpg";
import service4 from "@/../public/Services/TemplateBuilding.jpg";
import service5 from "@/../public/Services/AI-Powered.jpg";
import { useState } from "react";

const services = [
  {
    category: "Channel Branding & Rebranding",
    description:
      "We shape strong visual identities that elevate how audiences experience your channel.",
    img: service2,
  },
  {
    category: "Real-Time Graphics & Data Platforms",
    description:
      "We turn complex data into compelling, real-time visual stories.",
    img: service3,
  },
  {
    category: "Template Building & Automation",
    description:
      "We build powerful, flexible, and efficient templates that transform newsroom operations.",
    img: service4,
  },
  {
    category: "AI-Powered Media Solutions",
    description:
      "We use AI to reshape how media is created, delivered, and experienced.",
    img: service5,
  },
];

export default function Services() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <>
      <SectionIntro
        eyebrow="Crafting brilliance, one frame at a time."
        title="OUR CREATIVE PROCESS"
        className="mt-24 sm:mt-32 lg:mt-40"
      ></SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end relative">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={hover !== null ? services[hover].img : service1}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <div className="flex flex-col">
            <List className="mt-16 lg:mt-0 lg:pl-4">
              {services.map((l, id) => (
                <ListItem
                  title={l.category}
                  key={id}
                  onMouseCall={() => setHover(id)}
                  onMouseLeaveCall={() => setHover(null)}
                >
                  {l.description}
                </ListItem>
              ))}
            </List>

            <Button className="mt-20 w-fit self-end" href="/services" invert>
              Explore More
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
