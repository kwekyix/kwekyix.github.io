import type { AnchorHTMLAttributes } from 'react'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'ghost'
}

const base =
  'inline-flex items-center gap-[10px] rounded-sm px-8 py-4 font-mono text-[16px] uppercase no-underline max-phone:px-5 max-phone:py-3'

const variants = {
  primary:
    'bg-accent text-white shadow-[0_4px_20px_var(--color-shadow)] hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_8px_28px_var(--color-shadow)]',
  ghost:
    'border-[1.5px] border-border bg-surface text-muted hover:-translate-y-0.5 hover:border-accent hover:text-accent',
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  return <a className={`${base} ${variants[variant]} ${className}`} {...props} />
}
