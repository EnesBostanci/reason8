
import { Container } from '@/components/UI/SekletonCom/Container'
import { GridList , GridListItem } from '@/components/Layout/GridList'
import { SectionIntro } from '@/components/Layout/SectionIntro'


export default function Culture() {
    return (
      <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
        <SectionIntro
          eyebrow="Core Values & Principles"
          title=" Mission To revolutionise content, optimise media workflows, and enhance storytelling across news, sports, 
                  and entertainment, perpetuating innovation at every turn."
          invert
        >
          <p>
          Vision Aspiring to be the vanguard of creative media services, 
          we aim to set global industry benchmarks with our data-driven and innovative approaches.
          </p>
        </SectionIntro>
        <Container className="mt-16">
          <GridList>
            <GridListItem title="Innovation" invert>
            At the heart of Resona Media is our relentless pursuit of pioneering solutions. 
            We believe in constantly evolving and adapting to the industry's dynamic landscape.
            </GridListItem>
            <GridListItem title="Integrity" invert>
            Our work is rooted in honesty and trust, e
            nsuring that our clients always receive transparent and genuine solutions.
            </GridListItem>
            <GridListItem title="Collaboration" invert>
            Recognizing the unique visions of our clients, we emphasize the importance of a collaborative approach, 
            ensuring customized and meaningful outcomes.
            </GridListItem>
            <GridListItem title="Excellence" invert>
            In both our creative and technical endeavors, 
            we uphold the highest standards, ensuring that every project surpasses expectations.
            </GridListItem>
            <GridListItem title="Global Connectivity" invert>
            With a presence in multiple international locations, we are committed to fostering global collaborations 
            and delivering universally resonant solutions.
            </GridListItem>
          </GridList>
        </Container>
      </div>
    )
  }