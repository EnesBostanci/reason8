import Link from "next/link";

import { Container } from "@/components/UI/SekletonCom/Container";
import { FadeIn } from "@/components/Layout/FadeIn";
import { socialMediaProfiles } from "@/components/UI/SekletonCom/SocialMedia";
import Image from "next/image";

const navigation = [
  {
    title: "Work",
    links: [
      { title: "FamilyFund", href: "/work/family-fund" },
      { title: "Unseal", href: "/work/unseal" },
      { title: "Phobia", href: "/work/phobia" },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About Us", href: "/aboutus" },
      { title: "Services", href: "/services" },
      { title: "Products", href: "/products" },
      { title: "Our Work", href: "/portfolio" },
    ],
  },
  {
    title: "Connect",
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
          <Navigation />
          <div className="flex  flex-col lg:items-center gap-2  max-w-sm">
            <Image
              className="h-full w-full max-w-[200px] lg:max-w-full"
              width={200}
              height={32}
              alt="footerLogo.svg"
              src={"footerLogo.svg"}
            />
          </div>
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
            © Reason8 Media Agency Inc. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  );
}
