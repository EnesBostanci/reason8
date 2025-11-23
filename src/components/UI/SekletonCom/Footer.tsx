import Link from "next/link";

import { Container } from "@/components/UI/SekletonCom/Container";
import { FadeIn } from "@/components/Layout/FadeIn";
import { socialMediaProfiles } from "@/components/UI/SekletonCom/SocialMedia";
import Image from "next/image";

const navigation = [
  {
    title: "Success Stories",
    links: [
      { title: "Shams", href: "/shams" },
      { title: "Shams Studio", href: "/studio" },
      { title: "Abu Dhabi", href: "/abudhabi" },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/portfolio",
      },
    ],
  },

  {
    title: "About Us",
    links: [
      { title: "About Us", href: "/aboutus" },
      { title: "Services", href: "/services" },
      { title: "Our Work", href: "/portfolio" },
      { title: "Partners & Clients", href: "/clients" },
    ],
  },
  {
    title: "Let’s Connect",
    links: socialMediaProfiles,
  },
];

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-primary-800">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="flex  flex-col lg:items-center gap-2  max-w-sm">
            <Image
              className="h-full w-full max-w-[200px] lg:max-w-full"
              width={200}
              height={32}
              alt="The8GroupLogo"
              src={"The8GroupLogo.svg"}
            />
          </div>

          <Navigation />
        </div>
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Image
              height={230}
              width={171}
              alt="mainLogo"
              src={"MainLogo.svg"}
            />
          </Link>
          <p className="text-sm text-neutral-700">
            © RESON8 Media Inc. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  );
}
