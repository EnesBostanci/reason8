import { Container } from '@/components/UI/SekletonCom/Container'
import { FadeIn, FadeInStagger } from '@/components/Layout/FadeIn'
import Image from 'next/image'

import logoAbuDhabiMediaNetwork from '@/public/clients/Abu Dhabi Media Network@3x.png'
import logoAlGhadTv from '@/public/clients/Al Ghad TV.png'
import logoAlArabiya from '@/public/clients/Al-Arabiya_new_logo.svg'
import logoAljazeera from '@/public/clients/Aljazeera.svg'
import logoAljazeeraMark from '@/public/clients/Aljazeera Logo mark.svg'
import logoANewsTv from '@/public/clients/ANews TV@3x.png'
import logoFivefold from '@/public/clients/Fivefold@3x.png'

const clients = [
  ['Aljazeera', logoAljazeera],
  ['Aljazeera Mark', logoAljazeeraMark],
  ['Al-Arabiya', logoAlArabiya],
  ['Al Ghad TV', logoAlGhadTv],
  ['ANews TV', logoANewsTv],
  ['Abu Dhabi Media Network', logoAbuDhabiMediaNetwork],
  ['Fivefold', logoFivefold],
  ['Fivefold', logoFivefold],
]

export default function Clients() {
    return (
      <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
        <Container>
          <FadeIn className="flex items-center gap-x-8">
            <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
              We’ve worked with hundreds of amazing people
            </h2>
            <div className="h-px flex-auto bg-neutral-800" />
          </FadeIn>
          <FadeInStagger faster>
            <ul
              role="list"
              className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
            >
              {clients.map(([client, logo]) => (
                <li key={client}>
                  <FadeIn>
                    <Image src={logo} alt={client} unoptimized />
                  </FadeIn>
                </li>
              ))}
            </ul>
          </FadeInStagger>
        </Container>
      </div>
    )
  }