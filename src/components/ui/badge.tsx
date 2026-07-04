import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export function Badge({ children, className = '' }: BadgeProps) {
  const classes = [
    'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
    'bg-accent/20 text-accent border border-accent/30',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <span className={classes}>{children}</span>
}
