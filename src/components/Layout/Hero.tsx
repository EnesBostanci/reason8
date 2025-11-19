import clsx from "clsx";
import { Button } from "@/components/UI/SekletonCom/Button";

import { Container } from "@/components/UI/SekletonCom/Container";
import { FadeIn } from "@/components/Layout/FadeIn";

export default function Hero() {
  return (
    <Container className={clsx("mt-24 sm:mt-32 lg:mt-40")}>
      <FadeIn>
        <h1>
          <span className="block font-display text-base font-semibold text-neutral-950">
            OUR SERVICES
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              "mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-6xl"
            )}
          >
            Discover what we do best
          </span>
        </h1>
        <div className={clsx("mt-6 max-w-3xl text-xl text-neutral-600")}>
          <p>
            At Reson8 Media, we combine technology, creativity, and AI-driven
            innovation to help broadcasters elevate their storytelling,
            streamline workflows, and build future-ready media ecosystems.
          </p>
        </div>
        <Button
          href="/projects"
          className="group rounded-full  mt-10 tracking-widest"
        >
          Showcase / Case Studies
        </Button>
      </FadeIn>
    </Container>
  );
}
