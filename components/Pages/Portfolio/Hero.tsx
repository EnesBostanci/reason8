import clsx from 'clsx'

import { Container } from '@/components/UI/SekletonCom/Container'
import { FadeIn } from '@/components/Layout/FadeIn'

export default function Hero() {
    return (
      <Container
      className={clsx('mt-24 sm:mt-32 lg:mt-40')}
    >
      <FadeIn>
        <h1>
          <span className="block font-display text-base font-semibold text-neutral-950">
            Our work
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              'mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-6xl',            )}
          >
            Proven solutions for real-world problems.
          </span>
        </h1>
        <div
          className={clsx(
            'mt-6 max-w-3xl text-xl text-neutral-600',
          )}
        >
           <p>
        We believe in efficiency and maximizing our resources to provide the
        best value to our clients. The primary way we do that is by re-using
        the same five projects we’ve been developing for the past decade.
      </p>
        </div>
      </FadeIn>
    </Container>
    )
  }
  