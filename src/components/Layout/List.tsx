import clsx from "clsx";
import { Border } from "@/components/Layout/Border";
import { FadeIn, FadeInStagger } from "@/components/Layout/FadeIn";

export function List({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <FadeInStagger>
      <ul role="list" className={clsx("text-base text-neutral-600", className)}>
        {children}
      </ul>
    </FadeInStagger>
  );
}

interface ListItemProps {
  title?: string;
  children: React.ReactNode;
  onMouseCall?: () => void;
  onMouseLeaveCall?: () => void;
}

export function ListItem({
  children,
  title,
  onMouseCall,
  onMouseLeaveCall,
}: ListItemProps) {
  return (
    <li
      onMouseEnter={onMouseCall}
      onMouseLeave={onMouseLeaveCall}
      className="group transition-all duration-200 ease-in mt-10 first:mt-0 hover:scale-115"
    >
      <FadeIn>
        <Border className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
          {title && (
            <strong className="font-semibold text-primary-600">{`${title}. `}</strong>
          )}
          {children}
        </Border>
      </FadeIn>
    </li>
  );
}
