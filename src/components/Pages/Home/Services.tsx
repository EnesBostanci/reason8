"use client";
import { FadeIn } from "@/components/Layout/FadeIn";
import { Button } from "@/components/UI/SekletonCom/Button";
import { Container } from "@/components/UI/SekletonCom/Container";
import { List, ListItem } from "@/components/Layout/List";
import { SectionIntro } from "@/components/Layout/SectionIntro";
import { StylizedImage } from "@/components/Layout/StylizedImage";
import { Offices } from "@/components/UI/SekletonCom/Offices";
import service1 from "@/../public/Services/01.jpg";
import service2 from "@/../public/Services/02.jpg";
import service3 from "@/../public/Services/03.jpg";
import service4 from "@/../public/Services/04.jpg";
import service5 from "@/../public/Services/05.jpg";
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
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={hover !== null ? services[hover].img : service1}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
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
        </div>
      </Container>
    </>
  );
}

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">
              Tell us about your project
            </h2>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                Say Hi
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                Our offices
              </h3>
              <Offices
                invert
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}
