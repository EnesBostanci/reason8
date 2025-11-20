import Image from "next/image";

export default function Global() {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
            Global Presence
          </h1>
          <p className="mt-6 text-xl/8 text-balance text-gray-700">
            Global Ideas, Local Impact
          </p>
        </div>
        <section className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="self-center">
            <p className="mt-6 text-base/7 text-gray-600">
              From Qatar to Canada to Turkey, Reson8 Media operates as a truly
              global creative and broadcast powerhouse. Our diverse footprint
              reflects the expertise, ambition, and international vision of our
              founders, and this extensive network is a testament to our ability
              to deliver extraordinary, innovative media solutions anywhere in
              the world.
            </p>
          </div>
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto min-h-[600px] w-full relative">
            <Image
              fill
              alt=""
              src="/Globe.png"
              className="block size-full object-cover"
            />
          </div>
          {/* <div className="max-lg:mt-16 lg:col-span-1">
            <p className="text-base/7 font-semibold text-gray-500">
              The numbers
            </p>
            <hr className="mt-6 border-t border-gray-200" />
            <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                <dt className="text-sm/6 text-gray-600">Raised</dt>
                <dd className="order-first text-6xl font-semibold tracking-tight text-gray-900">
                  $<span>150</span>M
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                <dt className="text-sm/6 text-gray-600">Companies</dt>
                <dd className="order-first text-6xl font-semibold tracking-tight text-gray-900">
                  <span>30</span>K
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
                <dt className="text-sm/6 text-gray-600">Deals Closed</dt>
                <dd className="order-first text-6xl font-semibold tracking-tight text-gray-900">
                  <span>1.5</span>M
                </dd>
              </div>
              <div className="flex flex-col gap-y-2">
                <dt className="text-sm/6 text-gray-600">Leads Generated</dt>
                <dd className="order-first text-6xl font-semibold tracking-tight text-gray-900">
                  <span>200</span>M
                </dd>
              </div>
            </dl>
          </div> */}
        </section>
      </div>
    </section>
  );
}
