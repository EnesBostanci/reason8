import { Container } from "@/components/UI/SekletonCom/Container";
import { GridList, GridListItem } from "@/components/Layout/GridList";
import { SectionIntro } from "@/components/Layout/SectionIntro";

export default function Culture({
  title,
  tagline,
  data,
}: {
  title: string;
  tagline: string;
  data: { subheader: string[]; description?: string[]; bullets?: string[][] };
}) {
  return (
    <section className="mt-24 rounded-4xl bg-primary-800 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro eyebrow={title} title={tagline} invert>
        {/* <p>
          Vision Aspiring to be the vanguard of creative media services, we aim
          to set global industry benchmarks with our data-driven and innovative
          approaches.
        </p> */}
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          {data.subheader.map((d, id) => (
            <GridListItem key={id} title={d} invert>
              {data.description?.[id] && (
                <p className="mt-5">{data.description[id]}</p>
              )}
              {data.bullets?.[id] && (
                <div className="mt-3 space-y-2">
                  {data.bullets[id].map((bullet, bulletIndex) => (
                    <p key={bulletIndex}>{bullet}</p>
                  ))}
                </div>
              )}
            </GridListItem>
          ))}
        </GridList>
      </Container>
    </section>
  );
}
