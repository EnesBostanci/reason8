"use client";

import * as Headless from "@headlessui/react";
import { clsx } from "clsx";
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import useMeasure, { type RectReadOnly } from "react-use-measure";
import { Container } from "@/components/Pages/About/process/container";
import { Heading, Subheading } from "@/components/Pages/About/process/text";

const creativeProcessFlat = [
  {
    name: "Brief & Kickoff",
    title: "Aligning minds. Setting the game plan.",
    description:
      "We sit with our clients to align objectives, expectations, and success outcomes — setting the stage for a seamless journey.",
    bullet1: "- Crystalizing objectives",
    bullet2: "- Setting expectations & deliverables",
    bullet3: "- Full stakeholder alignment",
  },
  {
    name: "Strategy & Research",
    title: "Smart creativity powered by insight.",
    description:
      "We combine deep industry research with data-driven strategy to ensure every creative decision stands on solid ground.",
    bullet1: "- Market & audience insights",
    bullet2: "- Trend and competitive mapping",
    bullet3: "- Strategic integration into the creative plan",
  },
  {
    name: "Creative Development",
    title: "Igniting ideas. Sharpening visions.",
    description:
      "Every powerful story begins with a spark. Our teams collaborate to spark bold ideas, explore new angles, and shape concepts that truly resonate.",
    bullet1: "- Fresh concept generation",
    bullet2: "- Cross-team creative collaboration",
    bullet3: "- Defining the project’s creative direction",
  },
  {
    name: "Moodboard & Storyboard",
    title: "Visualizing the emotion. Framing the story.",
    description:
      "Before anything comes to life, we paint the vision. From moodboards that set tone and style to storyboards that map every moment — we bring clarity to the creative roadmap.",
    bullet1: "- Defining tone, look, and feel",
    bullet2: "- Scene-by-scene narrative planning",
    bullet3: "- Visual previews of the final direction",
  },
  {
    name: "Design & Animation",
    title: "Where imagination meets motion.",
    description:
      "Our designers and animators craft visuals that captivate — from cinematic motion graphics to immersive animations.",
    bullet1: "- High-impact graphics & illustration",
    bullet2: "- Dynamic animation production",
    bullet3: "- Seamless alignment with narrative",
  },
  {
    name: "Integration & Post-Production",
    title: "Perfecting the masterpiece.",
    description:
      "Our post-production experts refine every pixel, sound, and sequence. From audio design to effects and editing, we ensure the final product is broadcast-ready and exceptional.",
    bullet1: "- Sound & audio design",
    bullet2: "- Visual effects and editing",
    bullet3: "- Rigorous quality assurance",
  },
  {
    name: "Delivery & Support",
    title: "Beyond delivery. We stay with you.",
    description:
      "Our partnership doesn’t end at handover. We support updates, refinements, and long-term optimization — ensuring your content continues to shine.",
    bullet1: "- Full content delivery",
    bullet2: "- Usage guidance & handover",
    bullet3: "- Ongoing support for updates",
  },
];

function TestimonialCard({
  name,
  title,
  children,
  bounds,
  scrollX,
  ...props
}: {
  name: string;
  title: string;
  children: React.ReactNode;
  bounds: RectReadOnly;
  scrollX: MotionValue<number>;
} & HTMLMotionProps<"div">) {
  const ref = useRef<HTMLDivElement | null>(null);

  const computeOpacity = useCallback(() => {
    const element = ref.current;
    if (!element || bounds.width === 0) return 1;

    const rect = element.getBoundingClientRect();

    if (rect.left < bounds.left) {
      const diff = bounds.left - rect.left;
      const percent = diff / rect.width;
      return Math.max(0.5, 1 - percent);
    } else if (rect.right > bounds.right) {
      const diff = rect.right - bounds.right;
      const percent = diff / rect.width;
      return Math.max(0.5, 1 - percent);
    } else {
      return 1;
    }
  }, [bounds.width, bounds.left, bounds.right]);

  const opacity = useSpring(1, {
    stiffness: 154,
    damping: 23,
  });

  useLayoutEffect(() => {
    opacity.set(computeOpacity());
  }, [computeOpacity, opacity]);

  useMotionValueEvent(scrollX, "change", () => {
    opacity.set(computeOpacity());
  });

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      {...props}
      className="relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-primary-800 ring-1 ring-gray-950/10 ring-inset sm:from-25%"
      />
      <figure className="relative h-full p-10 flex flex-col justify-between">
        <figcaption className="mb-6 border-b border-primary-100 pb-6">
          <p className="text-white">{name}</p>
          <p className="font-medium whitespace-nowrap text-white">{title}</p>
        </figcaption>
        <blockquote className="flex-1">
          <div className="relative text-white">{children}</div>
        </blockquote>
      </figure>
    </motion.div>
  );
}

export function Process() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { scrollX } = useScroll({ container: scrollRef });
  const [setReferenceWindowRef, bounds] = useMeasure();
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollX, "change", (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current!.children[0].clientWidth));
  });

  function scrollTo(index: number) {
    const gap = 32;
    const width = (scrollRef.current!.children[0] as HTMLElement).offsetWidth;
    scrollRef.current!.scrollTo({ left: (width + gap) * index });
  }

  return (
    <div className="overflow-hidden py-32">
      <Container>
        <div ref={setReferenceWindowRef}>
          <Subheading> Creative Process</Subheading>
          <Heading as="h3" className="mt-2 text-primary-800">
            Crafting brilliance, one frame at a time.
          </Heading>
        </div>
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          "mt-16 flex gap-8 px-(--scroll-padding)",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth",
          "[--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]",
        ])}
      >
        {creativeProcessFlat.map(
          (
            { name, title, description, bullet1, bullet2, bullet3 },
            testimonialIndex
          ) => (
            <TestimonialCard
              key={testimonialIndex}
              name={name}
              title={title}
              bounds={bounds}
              scrollX={scrollX}
              onClick={() => scrollTo(testimonialIndex)}
            >
              <>
                <p className="text-xl mb-5 ">{description}</p>
                <p className="mt-2 text-base ">{bullet1}</p>
                <p className="mt-2 text-base ">{bullet2}</p>
                <p className="mt-2 text-base ">{bullet3}</p>
              </>
            </TestimonialCard>
          )
        )}
        <div className="w-2xl shrink-0 sm:w-216" />
      </div>
      <Container className="mt-16">
        <div className="flex justify-end">
          <div className="hidden sm:flex sm:gap-2">
            {creativeProcessFlat.map(({ name }, testimonialIndex) => (
              <Headless.Button
                key={testimonialIndex}
                onClick={() => scrollTo(testimonialIndex)}
                data-active={
                  activeIndex === testimonialIndex ? true : undefined
                }
                aria-label={`Scroll to testimonial from ${name}`}
                className={clsx(
                  "size-2.5 rounded-full border border-transparent bg-gray-300 transition",
                  "data-active:bg-gray-400 data-hover:bg-gray-400",
                  "forced-colors:data-active:bg-[Highlight] forced-colors:data-focus:outline-offset-4"
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
