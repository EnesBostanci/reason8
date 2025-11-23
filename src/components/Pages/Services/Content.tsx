export default function Content({
  data,
}: {
  data: {
    category: string;
    description: string;
    offerings?: string[];
    imgUrl: string;
    dir: boolean;
  };
}) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className={`${data.dir ? "order-2" : "order-1"} lg:pr-4`}>
            <div className="relative min-h-[550px] overflow-hidden rounded-3xl bg-gray-900 px-6 pt-64 pb-9 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                alt=""
                src={data.imgUrl}
                className="absolute inset-0 size-full rounded-3xl object-cover "
              />
              {/* <figure className="relative isolate">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-white.svg"
                  className="h-12 w-auto"
                />
                <blockquote className="mt-6 text-xl/8 font-semibold text-white">
                  <p>
                    "Amet amet eget scelerisque tellus sit neque faucibus non
                    eleifend. Integer eu praesent at a. Ornare arcu gravida
                    natoque erat et cursus tortor."
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-sm/6 text-gray-300">
                  <strong className="font-semibold text-white">
                    Judith Rogers,
                  </strong>
                  CEO at Workcation
                </figcaption>
              </figure> */}
            </div>
          </div>
          <div className={`${data.dir ? "order-1" : "order-2"}`}>
            <div className="text-base/7 text-gray-700 lg:max-w-lg">
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-pretty  sm:text-5xl">
                {data.category}
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">{data.description}</p>
                {data.offerings && (
                  <>
                    <p className="mt-8">{data.offerings[0]}</p>
                    <p className="mt-8">{data.offerings[1]}</p>
                    <p className="mt-8">{data.offerings[2]}</p>
                  </>
                )}
              </div>
            </div>
            {/* <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4"></dl> */}
            {/* <div className="mt-10 flex">
              <a
                href="#"
                className="text-base/7 font-semibold text-primary-600 hover:text-indigo-500"
              >
                Learn more about our company
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
