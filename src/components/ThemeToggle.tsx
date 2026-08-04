interface ThemeToggleProps {
  theme: 'light' | 'dark'
  onToggle: () => void
  className?: string
}

export function ThemeToggle({ theme, onToggle, className = '' }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`flex items-center gap-[6px] rounded-[30px] border-[1.5px] border-border bg-transparent px-3 py-[6px] text-[18px] text-muted transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-accent hover:text-accent ${className}`}
    >
      <span className="text-[13px] tracking-[0.5px] uppercase">
        {theme === 'dark' ? 'Dark' : 'Light'}
      </span>
    </button>
  )
}
