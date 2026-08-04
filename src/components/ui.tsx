import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'

export function Container({ children }: PropsWithChildren) {
  return (
    <div className="relative z-1 mx-auto w-full max-w-[1100px] px-9 max-tabsm:px-5 max-phone:px-4">
      {children}
    </div>
  )
}

interface CardProps extends PropsWithChildren {
  className?: string
}

export function Card({ className = '', children }: CardProps) {
  return (
    <div
      className={`rounded-card border-[length:var(--border-width)] border-border bg-surface ${className}`}
    >
      {children}
    </div>
  )
}

export function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-sm border border-border px-[14px] py-1 text-ui text-accent uppercase">
      {children}
    </span>
  )
}

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'ghost'
}

const buttonBase =
  'inline-flex items-center gap-[10px] rounded-sm px-8 py-4 font-mono text-ui uppercase no-underline max-phone:px-5 max-phone:py-3'

const buttonVariants = {
  primary:
    'bg-accent text-white shadow-[0_4px_20px_var(--color-shadow)] hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_8px_28px_var(--color-shadow)]',
  ghost:
    'border-[length:var(--border-width)] border-border bg-surface text-muted hover:-translate-y-0.5 hover:border-accent hover:text-accent',
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  return <a className={`${buttonBase} ${buttonVariants[variant]} ${className}`} {...props} />
}
