import Link from "next/link";
import clsx from "clsx";

export const socialMediaProfiles = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/reson8media/",
    svg: "soicalmedia/LinkedIn.svg",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/reson8media/",
    svg: "soicalmedia/Instagram.svg",
  },
  {
    title: "Behance",
    href: "https://www.behance.net/r8media",
    svg: "soicalmedia/Behance.svg",
  },
  {
    title: "X (Twitter)",
    href: "https://x.com/reson8mediaa",
    svg: "soicalmedia/X.svg",
  },
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
