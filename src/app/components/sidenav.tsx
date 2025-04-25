// src/app/components/sidenav.tsx
'use client'

interface SideNavProps {
  open: boolean
  onClose: () => void
}

const links = [
  { label: 'Home',    target: 'home'    },
  { label: 'Bar',   target: 'about'   },
  { label: 'Restaurant',    target: 'work'    },
  { label: 'Contact', target: 'contact' },
]

export default function SideNav({ open, onClose }: SideNavProps) {
  const handleClick = (target: string) => {
    const el = document.getElementById(target)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    onClose()
  }

  return (
    <div
      className={`fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-md transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      style={{ fontFamily: "'Cinzel', serif" }}
    >
      <ul className="space-y-8 text-4xl text-white text-center">
        {links.map(({ label, target }) => (
          <li key={target}>
            <button
              onClick={() => handleClick(target)}
              className="hover:text-yellow-300 transition-colors"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
