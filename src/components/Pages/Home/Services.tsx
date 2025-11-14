'use client'
import {FadeIn } from "@/components/Layout/FadeIn"
import { Button } from '@/components/UI/SekletonCom/Button'
import { Container } from '@/components/UI/SekletonCom/Container'
import { List, ListItem } from '@/components/Layout/List'
import { SectionIntro } from '@/components/Layout/SectionIntro'
import { StylizedImage } from '@/components/Layout/StylizedImage'
import { Offices } from '@/components/UI/SekletonCom/Offices'
import service1  from '@/../public/Services/01.jpg'
import service2  from '@/../public/Services/02.jpg'
import service3  from '@/../public/Services/03.jpg'
import service4  from '@/../public/Services/04.jpg'
import service5  from '@/../public/Services/05.jpg'




export default function Services() {
    return (
      <>
        <SectionIntro
          eyebrow="Services"
          title="We help you identify, explore and respond to new opportunities."
          className="mt-24 sm:mt-32 lg:mt-40"
        >
          <p>
            As long as those opportunities involve giving us money to re-purpose
            old projects — we can come up with an endless number of those.
          </p>
        </SectionIntro>
        <Container className="mt-16">
          <div className="lg:flex lg:items-center lg:justify-end">
            <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
              <FadeIn className="w-135 flex-none lg:w-180">
                <StylizedImage
                  src={service1}
                  sizes="(min-width: 1024px) 41rem, 31rem"
                  className="justify-center lg:justify-end"
                />
              </FadeIn>
            </div>
            <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
              <ListItem title="Web development">
                We specialise in crafting beautiful, high quality marketing pages.
                The rest of the website will be a shell that uses lorem ipsum
                everywhere.
              </ListItem>
              <ListItem title="Application development">
                We have a team of skilled developers who are experts in the latest
                app frameworks, like Angular 1 and Google Web Toolkit.
              </ListItem>
              <ListItem title="E-commerce">
                We are at the forefront of modern e-commerce development. Which
                mainly means adding your logo to the Shopify store template we’ve
                used for the past six years.
              </ListItem>
              <ListItem title="Custom content management">
                At Studio we understand the importance of having a robust and
                customised CMS. That’s why we run all of our client projects out
                of a single, enormous Joomla instance.
              </ListItem>
            </List>
          </div>
        </Container>
      </>
    )
  }



  export function ContactSection() {
    return (
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">
                Tell us about your project
              </h2>
              <div className="mt-6 flex">
                <Button href="/contact" invert>
                  Say Hej
                </Button>
              </div>
              <div className="mt-10 border-t border-white/10 pt-10">
                <h3 className="font-display text-base font-semibold text-white">
                  Our offices
                </h3>
                <Offices
                  invert
                  className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    )
  }