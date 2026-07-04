import type { ReactNode } from 'react'

interface CardProps {
  float?: boolean
  children: ReactNode
  className?: string
}

export function Card({ float = false, children, className = '' }: CardProps) {
  const classes = [
    'bg-dark/60 backdrop-blur-xl border border-accent/20 rounded-2xl shadow-lg p-6',
    float ? 'animate-float' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classes}>{children}</div>
}
