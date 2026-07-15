import { Icon } from './icon'

interface IconChipProps {
  icon: string
  size?: number
  iconSize?: number
  radius?: number
  /** Background + icon color classes. Defaults to the standard brand chip treatment. */
  colorClassName?: string
  /** Extra classes appended to the chip wrapper (e.g. `shrink-0`). */
  className?: string
}

export function IconChip({
  icon,
  size = 44,
  iconSize,
  radius = 9,
  colorClassName = 'bg-brand-900/[0.08] text-brand-900',
  className = '',
}: IconChipProps) {
  return (
    <div
      className={`flex items-center justify-center ${colorClassName} ${className}`.trim()}
      style={{ width: `${size}px`, height: `${size}px`, borderRadius: `${radius}px` }}
    >
      <Icon name={icon} size={iconSize ?? Math.round(size / 2)} />
    </div>
  )
}
