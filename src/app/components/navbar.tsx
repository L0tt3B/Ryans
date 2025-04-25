'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'
import SideNav from './sidenav'
import { FiX, FiMenu } from 'react-icons/fi'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleNav = (e: React.MouseEvent, target: string) => {
    e.preventDefault()
    setOpen(false)

    // Home — scroll to top of current page
    if (target === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    else if (target === 'main') {
      router.push('/')
    }
    else if (target === 'ryans') {
      router.push('/ryans')
    }
    else if (target === 'nois') {
      router.push('/nois')
    }

    // Contact → scroll to #contact section
    else if (target === 'contact') {
      if (pathname !== '/') {
        router.push('/#contact') // make sure it's anchored on the homepage
      } else {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <header className="fixed top-0 w-full border-b border-yellow-700/50 bg-black/80 z-50">
        <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          {/* Logo click → top of homepage */}
          <button
            onClick={(e) => handleNav(e, 'main')}
            className="text-lg font-bold text-yellow-400 italic cursor-pointer"
          >
            Ryan's
          </button>

          {/* Main nav */}
          <div className="hidden md:flex space-x-8" style={{ fontFamily: "'Cinzel', serif" }}>
            {[
              { label: 'Home', target: 'home' },
              { label: 'Bar', target: 'ryans' },
              { label: 'Restaurant', target: 'nois' },
              { label: 'Contact', target: 'contact' },
            ].map(({ label, target }) => (
              <a
                key={target}
                href={target === 'home' ? '#' : `#${target}`}
                onClick={(e) => handleNav(e, target)}
                className="text-white/80 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile burger */}
          <div className="md:hidden">
            <button
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
              className="focus:outline-none text-white text-2xl"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>
      </header>

      <SideNav open={open} onClose={() => setOpen(false)} />
    </>
  )
}
