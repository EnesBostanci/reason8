export default function Showreel() {
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2
              id="details-heading"
              className="text-3xl font-bold tracking-tight  sm:text-4xl"
            >
              Templates and Viz Pilot Edge
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              Reson8 Media began with Viz Pilot (Template Wizard) during early
              pilots, then led the technical transition to Viz Pilot Edge by
              pushing a Dalet upgrade to Galaxy 5.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div className="">
              <iframe
                className="aspect-video"
                src="https://player.vimeo.com/video/1134167212?h=0f891ad80c&autoplay=1&muted=1"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
              <h2 className="text-bold text-xl sm:text-3xl mt-8">
                Why Viz Pilot Edge?
              </h2>
              <p className="mt-8 text-base text-gray-500">
                <strong>Strategic Note</strong>: All templates were designed to
                be Viz Mosart-ready, enabling full newsroom automation.
              </p>
            </div>
            <div>
              <iframe
                className="aspect-video "
                src="https://player.vimeo.com/video/1128154062?h=14f0753587&autoplay=1&muted=1"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
              <h2 className="text-bold text-xl sm:text-3xl mt-8">
                Efficiency Gains
              </h2>
              <p className="mt-8 text-base text-gray-500">
                -Faster turnaround times
                <br /> -Real-time updates <br />
                -Brand consistency across live shows .
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
