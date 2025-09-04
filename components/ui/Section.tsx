import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  size?: 'sm' | 'md' | 'lg'
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, size = 'md', ...props }, ref) => {
    const sizes = {
      sm: 'py-8',
      md: 'py-16',
      lg: 'py-24',
    }

    return (
      <section
        ref={ref}
        className={cn(sizes[size], className)}
        {...props}
      />
    )
  }
)

Section.displayName = 'Section'

export { Section }
