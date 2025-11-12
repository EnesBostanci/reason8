import { AppStoreLink } from '@/components/UI/CallToActionCom/AppStoreLink'
import { CircleBackground } from '@/components/UI/CallToActionCom/CircleBackground'

export default function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Get your first tips today
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            It takes 30 seconds to sign up. Download the app and create an
            account today and we’ll send you a tip guaranteed to double your
            first investment.
          </p>
          <div className="mt-8 flex justify-center gap-5">
            <AppStoreLink color="white" />
            <AppStoreLink color="white" />
          </div>
        </div>
      </div>
    </section>
  )
}
