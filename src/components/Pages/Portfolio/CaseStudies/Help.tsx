export default function Help() {
  return (
    <section className="relative bg-primary-800">
      <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          alt=""
          src="/studies/abudhabi/hero.png"
          className="size-full object-cover"
        />
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute -bottom-24 left-24 w-231.5 transform-gpu blur-[118px]"
        >
          <path
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-24 xl:pl-32">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            Client IN FOCUS
          </p>
          <p className="mt-6 text-base/7 text-gray-600 dark:text-gray-300">
            Abu Dhabi Media (ADM) is recognized as a premier multimedia
            organization in the United Arab Emirates, showcasing a rich
            diversity across broadcast, digital, and publishing platforms. This
            case study illuminates ADM's forward-thinking initiative to rebrand
            its news programs, embodying its dedication to producing content of
            unparalleled quality that captivates audiences worldwide. This
            rebranding initiative underscores ADM's strategic commitment to
            innovation and excellence, aiming to elevate the global media
            landscape while ensuring the delivery of engaging, high-quality
            content across its extensive media footprint.
          </p>
        </div>
      </div>
    </section>
  );
}
