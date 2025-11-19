import Link from "next/link";
import clsx from "clsx";

export const socialMediaProfiles = [
  {
    title: "LinkedIn",
    href: "https://linkedin.com",
    svg: "soicalmedia/LinkedIn.svg",
  },
  {
    title: "Instagram",
    href: "https://instagram.com",
    svg: "soicalmedia/Instagram.svg",
  },
  {
    title: "Behance",
    href: "https://behance.com",
    svg: "soicalmedia/Behance.svg",
  },
  { title: "X", href: "https://github.com", svg: "soicalmedia/X.svg" },
];

export function SocialMedia({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {socialMediaProfiles.map((socialMediaProfile) => (
        <li key={socialMediaProfile.title}>
          <Link
            href={socialMediaProfile.href}
            aria-label={socialMediaProfile.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <img
              src={socialMediaProfile.svg}
              alt={socialMediaProfile.title}
              className="h-9 w-9"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
