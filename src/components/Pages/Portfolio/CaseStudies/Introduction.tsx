const features = [
  {
    name: "Strategic Design & Identity",
    description: `We developed a modern and scalable design language rooted in the symbolism of the Shams TV logo:
- Triangles for rays of truth & motion
- Horizontal lines for the horizon of information
- Rectangular forms drawn from the logo structure`,
    imageSrc: "studies/shams/principles.png",

    imageAlt: "Strategic Design & Identity",
  },
  {
    name: "Motion Principles",
    description: `-Triangles pull and reveal hidden information, creating metaphorical flow
-Lines animate across the screen to symbolize continuity, clarity, and discovery
`,
    imageSrc: "studies/shams/Logo.gif",
    imageAlt: "Motion Principles.",
  },
];

function classNames(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Introduction() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="mt-16 space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-1"
                    : "lg:col-start-8 xl:col-start-9",
                  "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4"
                )}
              >
                <h2 className=" text-4xl font-bold">{feature.name}</h2>
                <p className="mt-2  text-gray-500 whitespace-pre-line leading-9">
                  {feature.description}
                </p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-6 xl:col-start-5"
                    : "lg:col-start-1",
                  "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8"
                )}
              >
                <img
                  alt={feature.imageAlt}
                  src={feature.imageSrc}
                  className="aspect-5/2 w-full rounded-lg bg-gray-100 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
