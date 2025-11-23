export default function People({
  title,
  description,
  subDescription,
  imgUrl,
  video,
}: {
  title: string;
  description: string;
  subDescription?: string;
  imgUrl: string;
  video?: boolean;
}) {
  return (
    <section className="overflow-hidden bg-primary-800 py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              {title}
            </h2>
            <p className="mt-6 text-xl/8 text-gray-700 dark:text-gray-300">
              {description}
            </p>
            {subDescription && (
              <p className="mt-6 text-base/7 text-gray-600 dark:text-gray-400">
                {subDescription}
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-full lg:ml-auto lg:flex-none lg:self-center">
              {video ? (
                <iframe
                  className="aspect-7/5 w-full rounded-2xl"
                  src={imgUrl}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              ) : (
                <img
                  alt=""
                  src={imgUrl}
                  className="aspect-7/5 mx-auto w-full max-w-[600px] rounded-2xl bg-gray-50 object-cover max-sm:max-w-[480px] dark:bg-gray-800"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
