export default function Hero({
  title,
  subTitle,
  description,
  imgUrl,
  video,
  incentives,
}: {
  title: string;
  subTitle: string;
  description: string;
  imgUrl: string;
  video?: string;
  incentives?: Array<{ name: string; description: string }>;
}) {
  return (
    <section>
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight ">{title}</h2>
              <h3 className="text-2xl font-bold tracking-tight mt-4 text-gray-500">
                {subTitle}
              </h3>

              <p className="mt-4 text-gray-500">{description}</p>
            </div>
            {video ? (
              <iframe
                className="aspect-3/2 w-full rounded-lg"
                src={video}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            ) : (
              <img
                alt="heroImg"
                src={imgUrl}
                className="aspect-3/2 w-full rounded-lg bg-gray-100 object-cover"
              />
            )}
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives?.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:shrink-0"></div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h2
                    className="text-2xl font-bold text-primary-800
                  "
                  >
                    {incentive.name}
                  </h2>
                  <p className="mt-2 text-xl text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
