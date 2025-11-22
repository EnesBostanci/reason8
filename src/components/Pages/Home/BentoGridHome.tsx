import Link from "next/link";

const caseImages = {
  abuDhabi: "/cases/abuDhabi.png",
  birdseye: "/cases/birdseye.webp",
  iraqGt: "/cases/iraqGt.webp",
  kown: "/cases/kown.webp",
  shams: "/cases/shams.jpg",
  studio: "/cases/studio.JPG",
} as const;

export default function BentoGridHome() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-neutral-950">
          Our Work{" "}
        </h2>
        <p className="mt-2 max-w-lg whitespace-nowrap text-4xl font-semibold tracking-tight text-pretty text-primary-800 sm:text-5xl">
          shape stories that captivate
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <Link
            href="/shams"
            className="relative block lg:col-span-3  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <img
                alt=""
                src={caseImages.shams}
                className="h-80 object-cover "
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-primary-600">
                  Case Study
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Shams TV – Pioneering Broadcast Innovation from Erbil
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  A complete creative and technical partnership by Reson8 Media
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
          </Link>
          <Link
            href="/abudhabi"
            className="relative block lg:col-span-3  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <div className="absolute inset-0 rounded-lg bg-white lg:rounded-tr-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <img
                alt=""
                src={caseImages.abuDhabi}
                className="h-80 object-cover "
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-primary-600">
                  Case Study
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Abu Dhabi Media Network{" "}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  News Programs Rebranding & VIZrt templates Strategic Overview
                  of ID8 Media&apos;s Visual Mastery in Abu Dhabi&apos;s Channel
                  Identity
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-tr-4xl" />
          </Link>
          <Link
            href="/portfolio"
            className="relative block lg:col-span-2  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <div className="absolute inset-0 rounded-lg bg-white lg:rounded-bl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img
                alt=""
                src={caseImages.birdseye}
                className="h-80 object-cover "
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-primary-600">
                  Show Case
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Bird&apos;s Eye View
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Al Jazeera English, a globally recognized media powerhouse,
                  sought to craft an engaging and informative investigative
                  series, harnessing its wealth of digital investigative
                  information.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-bl-4xl" />
          </Link>
          <Link
            href="/studio"
            className="relative block lg:col-span-2  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <div className="absolute inset-0 rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <img
                alt=""
                src={caseImages.studio}
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-primary-600">
                  Case Study
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Launching Bold: Reson8 Media Designs Broadcast-Ready Studios
                  for Shams TV
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Studio architecture, set design, AR-ready infrastructure,
                  creative direction, functional layout consultation, and
                  cross-format usability planning
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5" />
          </Link>
          <Link
            href="/portfolio"
            className="relative block lg:col-span-2  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-br-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img alt="" src={caseImages.kown} className="h-80 object-cover" />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-primary-600">
                  Show Case
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Kown Visual Branding
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  In an era where the balance between traditional roots and
                  modern outlook is crucial for businesses seeking to establish
                  their identity, Kown Capital posed a unique challenge.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl" />
          </Link>
        </div>
      </div>
    </section>
  );
}
