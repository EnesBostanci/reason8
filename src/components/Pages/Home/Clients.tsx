import { Container } from "@/components/UI/SekletonCom/Container";
import { FadeIn, FadeInStagger } from "@/components/Layout/FadeIn";
import Image from "next/image";

import logoAbuDhabi from "@/../public/Clients/abuDhabi.png";
import logoShamstv from "@/../public/Clients/White/Asset 7.png";
import logoAlGad from "@/../public/Clients/algad.png";
import logoANewz from "@/../public/Clients/anewz.png";
import logoFivefold from "@/../public/Clients/fivefold.png";
import logoJazeera from "@/../public/Clients/jazeera.png";
import logoMediaCity from "@/../public/Clients/mediaCity.png";
import logoShura from "@/../public/Clients/shura.png";

const clients = [
  ["Abu Dhabi", logoAbuDhabi],
  ["Shams Tv", logoShamstv],
  ["Al Gad", logoAlGad],
  ["ANewz", logoANewz],
  ["Fivefold", logoFivefold],
  ["Jazeera", logoJazeera],
  ["Media City", logoMediaCity],
  ["Shura", logoShura],
];

export default function Clients() {
  return (
    <section className="mt-24 rounded-4xl bg-primary-800 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-xl font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-primary-600" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo], id) => (
              <li key={id}>
                <FadeIn>
                  <Image
                    width={185}
                    height={36}
                    src={logo}
                    alt="Client logo"
                    unoptimized
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </section>
  );
}
