const sections = [
  {
    video:
      "https://player.vimeo.com/video/921056339?h=f60790768b&autoplay=1&loop=1&muted=1",
    content: [
      {
        title: "Visual and Technical Modernization",
        text: "ADM's pre-existing templates for news programs had become antiquated, lacking the adaptability required for seamless integration of dynamic content. This visual and technical obsolescence necessitated a comprehensive overhaul to meet contemporary standards.",
      },
      {
        title: "Workflow Optimization",
        text: "The revamp included streamlining production workflows, ensuring that the new templates could adapt dynamically to content needs without disrupting broadcast schedules.",
      },
      {
        title: "Modern Design Language",
        text: "A cohesive design language was implemented to create consistency across programs, enhancing visual clarity and audience engagement.",
      },
    ],
  },
  {
    video:
      "https://player.vimeo.com/video/917110162?h=7f93c97afa&autoplay=1&loop=1&muted=1",
    content: [
      {
        title: "Advanced Technical Integration",
        text: "Templates were integrated with real-time graphics and automation systems to improve the speed and accuracy of content updates.",
      },
      {
        title: "Brand Alignment",
        text: "The new visuals maintained brand consistency while providing flexibility to support multiple program formats.",
      },
      {
        title: "Future-Proofing",
        text: "The updates included AR-ready capabilities and modular components for easy expansion as broadcast technology evolves.",
      },
    ],
  },
];
export default function Showreel() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2
              id="details-heading"
              className="text-4xl font-bold tracking-tight text-primary-800 sm:text-5xl"
            >
              Challenges
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            {sections.map((section, idx) => (
              <div key={idx}>
                <div className="aspect-3/2 w-full rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={section.video}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                {section.content.map((item, index) => (
                  <div key={index}>
                    <h2 className="mt-6 text-xl font-bold">{item.title}</h2>
                    <p className="mt-2 text-base text-gray-500">{item.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
