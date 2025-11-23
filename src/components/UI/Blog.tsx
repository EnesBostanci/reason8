const caseImages = {
  abuDhabi: "/cases/abuDhabi.png",
  birdseye: "/cases/birdseye.webp",
  iraqGt: "/cases/iraqGt.webp",
  kown: "/cases/kown.webp",
  shams: "/cases/shams.jpg",
  studio: "/cases/studio.JPG",
} as const;

const posts = [
  {
    id: 1,
    title: "Abu Dhabi Media Network",
    href: "/abudhabi",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: caseImages.abuDhabi,
  },
  {
    id: 2,
    title: "Shams TV – Pioneering Broadcast Innovation from Erbil",
    href: "/shams",
    description:
      "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
    imageUrl: caseImages.shams,
  },
  {
    id: 3,
    title:
      "Launching Bold: Reson8 Media Designs Broadcast-Ready Studios for Shams TV",
    href: "/studio",
    description:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.",
    imageUrl: caseImages.studio,
  },
];
export default function Blog({ title = "Our Work" }: { title?: string }) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-primary-800 sm:text-5xl">
            {title}
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Where Ideas Become Impact
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
            >
              <img
                alt=""
                src={post.imageUrl}
                className="absolute inset-0 -z-10 size-full object-fill"
              />
              <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl inset-ring inset-ring-gray-900/10" />

              <h3 className="mt-3 text-lg/6 font-semibold text-white">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
