import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#f0d9d9] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="ASHU Electrical Solution home">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e10600] text-sm font-black text-white shadow-lg shadow-red-200">
            AS
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#b30000]">ASHU</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-[#e10600]">Electrical Solution</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-[#b30000]' : 'text-[#7b0000] hover:text-[#b30000]'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#f1d3d3] bg-white/90 text-[#6b0000] transition hover:border-[#e10600] hover:text-[#b30000]"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                transition={{ duration: 0.22 }}
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </button>

          <div className="hidden lg:block">
            <Link
              to="/consultation"
              className="inline-flex items-center justify-center rounded-full bg-[#e10600] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(225,6,0,0.25)] transition hover:bg-[#b30000]"
            >
              Request a Project Consultation
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#f1d3d3] bg-white/90 text-[#6b0000] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#f4e3e3] bg-white/90 px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-sm font-medium ${isActive ? 'bg-[#fff1f1] text-[#b30000]' : 'text-[#7b0000]'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/consultation" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-[#e10600] px-4 py-3 text-sm font-semibold text-white">
              Request a Project Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
