import { FadeIn, FadeInStagger } from '@/components/Layout/FadeIn'
import { Border } from '@/components/Layout/Border'
import clsx from 'clsx'
import { Container } from '@/components/UI/SekletonCom/Container'





function PageIntro({
  eyebrow,
  title,
  children,
  centered = false,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
  centered?: boolean
}) {
  return (
    <Container
      className={clsx('mt-24 sm:mt-32 lg:mt-40', centered && 'text-center')}
    >
      <FadeIn>
        <h1>
          <span className="block font-display text-base font-semibold text-neutral-950">
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              'mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-6xl',
              centered && 'mx-auto',
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            'mt-6 max-w-3xl text-xl text-neutral-600',
            centered && 'mx-auto',
          )}
        >
          {children}
        </div>
      </FadeIn>
    </Container>
  )
}

function StatList({
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof FadeInStagger>, 'children'> & {
  children: React.ReactNode
}) {
  return (
    <FadeInStagger {...props}>
      <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none">
        {children}
      </dl>
    </FadeInStagger>
  )
}

export function StatListItem({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <Border as={FadeIn} position="left" className="flex flex-col-reverse pl-8">
      <dt className="mt-2 text-base text-neutral-600">{label}</dt>
      <dd className="font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
        {value}
      </dd>
    </Border>
  )
}


export default function Hero() {
  
    return (
      <section>
      <PageIntro eyebrow="About us" title="Reson8 Media">
        <p>
        Emerged As A Leading Creative Force In The Broadcast And Digital Media Domain, 
        Specializing In Real-Time Creative Services
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          Since its inception, we have paved the path for innovation and engagement, 
          transforming the way media experiences are curated and consumed. 
          From data-driven graphics to channel branding and template creation, 
          our journey has been defined by our commitment to excellence and our drive to redefine the standards of the media industry.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="350+" label="paid employees" />
          <StatListItem value="10K" label="Placated clients" />
          <StatListItem value="1.2K" label="Invoices billed" />
        </StatList>
      </Container>
      </section>
    )
  }