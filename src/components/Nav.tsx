import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { ThemeToggle } from './ThemeToggle'

const NAV_LINKS = [
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#activities', label: 'Activities' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const navLinkClass =
  'rounded-sm px-4 py-2 text-[16px] text-muted uppercase hover:bg-accent hover:text-white'

export function Nav() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed top-0 right-0 left-0 z-100 border-b border-border bg-bg-alpha py-[18px] backdrop-blur-[10px]"
    >
      <div className="relative mx-auto flex max-w-[1100px] items-center justify-between px-9 max-tabsm:px-5 max-phone:px-4">
        <a href="#" className="font-mono text-[22px] font-bold text-ink">
          yix<span className="text-accent">.</span>
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="hidden text-[24px] text-ink hover:text-accent max-tablet:block"
        >
          ☰
        </button>

        <ul className="flex gap-2 max-tablet:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={navLinkClass}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle theme={theme} onToggle={toggleTheme} className="ml-2 max-tablet:hidden" />

        {menuOpen && (
          <ul className="fixed top-[81px] right-0 left-0 z-101 flex flex-col border-b-[1.5px] border-border bg-surface py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-5 py-3 text-[16px] text-muted uppercase hover:bg-accent-tint hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <div className="flex items-center justify-center border-t border-border px-5 py-3">
              <ThemeToggle theme={theme} onToggle={toggleTheme} className="ml-0" />
            </div>
          </ul>
        )}
      </div>
    </nav>
  )
}
