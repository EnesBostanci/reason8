export default function Challenges({
  header,
  description,
  sub,
  imgUrl,
}: {
  header: string;
  description?: string;
  sub: { subtitle: string; subDesc?: string }[];
  imgUrl: string;
}) {
  return (
    <section className="py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-pretty text-primary-800 sm:text-4xl mb-12">
          {header}
        </h2>
        {description && (
          <p className="mb-12 text-xl/8 text-gray-600 dark:text-gray-400">
            {description}
          </p>
        )}
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <img
              alt=""
              src={imgUrl}
              className="w-full rounded-2xl object-fill outline-1 -outline-offset-1 outline-black/5 lg:aspect-auto lg:h-138 dark:outline-white/10"
            />
          </div>
          <div className="w-full lg:max-w-xl lg:flex-auto">
            <ul className="-my-8 divide-y divide-primary-900">
              {sub.map((s, id) => (
                <li key={id} className="py-8">
                  <dl className="relative flex flex-wrap gap-x-3">
                    <dd className="w-full flex-none text-lg font-semibold tracking-tight text-primary-800 ">
                      {s.subtitle}
                    </dd>
                    {s?.subDesc && (
                      <>
                        <dt className="sr-only">subDesc</dt>
                        <dd className="mt-2 w-full flex-none text-base/7 text-gray-600 dark:text-gray-400 whitespace-pre-line">
                          {s.subDesc}
                        </dd>
                      </>
                    )}
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
