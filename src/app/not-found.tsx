import { Limelight } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const socialMediaIcons = [
  {
    name: "Behance",
    src: "/soicalmedia/Behance.svg",
    href: "https://www.behance.net/r8media",
  },
  {
    name: "Instagram",
    src: "/soicalmedia/Instagram.svg",
    href: "https://www.instagram.com/reson8media/",
  },
  {
    name: "LinkedIn",
    src: "/soicalmedia/LinkedIn.svg",
    href: "https://www.linkedin.com/company/reson8media/",
  },
  { name: "X", src: "/soicalmedia/X.svg", href: "https://x.com/reson8mediaa" },
];

export default function NotFound() {
  return (
    <>
      <div className="grid min-h-full grid-cols-1 grid-rows-[1fr_auto_1fr]  lg:grid-cols-[max(50%,36rem)_1fr] dark:bg-gray-900">
        <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
          <Link href="/">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="/MainLogo.svg"
              className="h-10 w-auto sm:h-12 dark:hidden"
            />
            <img
              alt=""
              src="/WhiteLogo.svg"
              className="h-10 w-auto not-dark:hidden sm:h-12"
            />
          </Link>
        </header>
        <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
          <div className="max-w-lg">
            <p className="text-base/8 font-semibold text-primary-600 ">404</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl dark:text-white">
              Page not found
            </h1>
            <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10">
              <a
                href="./"
                className="text-sm/7 font-semibold text-primary-600 "
              >
                <span aria-hidden="true">&larr;</span> Back to home
              </a>
            </div>
          </div>
        </main>
        <footer className="self-end lg:col-span-2 lg:col-start-1 lg:row-start-3">
          <div className="border-t border-gray-100 bg-gray-50 py-10 dark:border-white/10 dark:bg-gray-800/50">
            <nav className="mx-auto flex w-full max-w-7xl items-center gap-x-4 px-6 text-sm/7 text-gray-600 lg:px-8 dark:text-gray-400">
              {socialMediaIcons.map((icon) => (
                <a key={icon.name} href={icon.href}>
                  <Image
                    src={icon.src}
                    alt={icon.name}
                    width={32}
                    height={32}
                  />
                </a>
              ))}
            </nav>
          </div>
        </footer>
        <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
            className="absolute inset-0 size-full object-cover not-dark:hidden"
          />
          <img
            alt=""
            src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
            className="absolute inset-0 size-full object-cover dark:hidden"
          />
        </div>
      </div>
    </>
  );
}
