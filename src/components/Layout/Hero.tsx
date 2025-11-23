import clsx from "clsx";
import { Button } from "@/components/UI/SekletonCom/Button";

import { Container } from "@/components/UI/SekletonCom/Container";
import { FadeIn } from "@/components/Layout/FadeIn";
const heroTitle = {
  title: "OUR CLIENTS",
  header: "Those Who Trust Us to Tell Their Stories",
  description:
    "We partner with broadcasters, brands, and creators who value bold ideas and exceptional storytelling — delivering work that resonates across industries and audiences.",
};

export default function Hero({
  data,
}: {
  data: { title: string; header: string; description: string };
}) {
  return (
    <Container className={clsx("mt-24 sm:mt-32 lg:mt-40")}>
      <FadeIn>
        <h1>
          <span className="block font-display text-neutral-950 font-semibold ">
            {data.title}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              "mt-6 block max-w-5xl font-display text-5xl font-bold tracking-tight text-balance text-primary-800 sm:text-6xl"
            )}
          >
            {data.header}
          </span>
        </h1>
        <div className={clsx("mt-6 max-w-3xl text-xl text-neutral-600")}>
          <p>{data.description}</p>
        </div>
      </FadeIn>
    </Container>
  );
}
