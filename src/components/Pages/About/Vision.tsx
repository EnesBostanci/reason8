import {
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Mission",
    description:
      "To revolutionize content creation and media workflows. Empowering broadcasters, agencies, and creators with cutting-edge tools and brilliant storytelling.",
  },
  {
    name: "Vision",
    description:
      "To lead the world of creative media, setting new standards through innovation, data intelligence, and bold storytelling.",
  },
];

export default function Vision() {
  return (
    <div className="bg-white py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <h2 className="col-span-2 text-4xl font-bold tracking-tight text-pretty text-primary-800 sm:text-5xl ">
            Our Purpose & Ambition
          </h2>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-4xl sm:text-5xl font-bold text-gray-900 ">
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base/7 text-gray-600 ">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
