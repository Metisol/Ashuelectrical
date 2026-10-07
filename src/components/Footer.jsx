import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#650000] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e10600] text-sm font-black text-white">
                AS
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#f6b2b2]">ASHU</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white">Electrical Solution</div>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#f9dada]">
              Office renovation, refurbishment, building fit-out, electrical installation, and related technical services.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#f2bbbb]">Quick Links</h3>
            <ul className="space-y-3 text-sm text-[#f8d9d9]">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#f2bbbb]">Contact</h3>
            <ul className="space-y-4 text-sm text-[#f8d9d9]">
              <li className="flex items-start gap-3"><MapPin className="mt-1 h-4 w-4 text-[#ff6767]" /> <a href="https://maps.app.goo.gl/HbW8Zatxn19pKMA29?g_st=it" target="_blank" rel="noreferrer" className="hover:text-white">Addis Ababa, Ethiopia</a></li>
              <li className="flex items-start gap-3"><Phone className="mt-1 h-4 w-4 text-[#ff6767]" /> +251 913 312 828</li>
              <li className="flex items-start gap-3"><Phone className="mt-1 h-4 w-4 text-[#ff6767]" /> +251 921 809 883</li>
              <li className="flex items-start gap-3"><Mail className="mt-1 h-4 w-4 text-[#ff6767]" /> ashutame1216@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/50 pt-6 text-sm text-white">
          © {new Date().getFullYear()} ASHU Electrical Solution. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
