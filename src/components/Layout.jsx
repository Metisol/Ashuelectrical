import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const [theme, setTheme] = useState(() => window.localStorage.getItem('ashu-theme') || 'light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('ashu-theme', theme)
  }, [theme])

  return (
    <div className="site-shell min-h-screen text-[#b30000]">
      <div aria-hidden="true" className="site-background">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2400&q=85"
          alt=""
        />
        <div className="site-background__wash" />
      </div>
      <Navbar theme={theme} onToggleTheme={() => setTheme((current) => current === 'light' ? 'dark' : 'light')} />
      <main className="site-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
