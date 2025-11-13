import clsx from 'clsx'

import { Border } from '@/components/Layout/Border'
import { FadeIn, FadeInStagger } from '@/components/Layout/FadeIn'

export function List({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <FadeInStagger>
      <ul role="list" className={clsx('text-base text-neutral-600', className)}>
        {children}
      </ul>
    </FadeInStagger>
  )
}

interface ListItemProps {
  title?: string
  children: React.ReactNode
  onHoverStart?: () => void
  onHoverEnd?: () => void
}

export function ListItem({
  children,
  title, 
  onHoverStart, 
  onHoverEnd
  
}:ListItemProps) {
  return (
    <li onMouseEnter={onHoverStart} onMouseLeave={onHoverEnd}className="group mt-10 first:mt-0">
      <FadeIn>
        <Border className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
          {title && (
            <strong className="font-semibold text-neutral-950">{`${title}. `}</strong>
          )}
          {children}
        </Border>
      </FadeIn>
    </li>
  )
}
