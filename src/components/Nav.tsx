import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '../lib/useActiveSection'

const LINKS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'contato', label: 'Contato' },
]

const SECTION_IDS = ['hero', ...LINKS.map((l) => l.id)]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-border)]' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            handleClick('hero')
          }}
          className="font-semibold tracking-tight text-[var(--color-text)] focus-visible:outline-offset-4"
          aria-label="Voltar ao topo — Daniel Lourenço Domingos"
        >
          DLD<span className="text-[var(--color-accent)]">.</span>
        </a>

        {/* Lei de Hick: poucas opções, decisão rápida */}
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleClick(link.id)
                }}
                aria-current={active === link.id ? 'true' : undefined}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active === link.id
                    ? 'text-[var(--color-text)]'
                    : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[var(--color-surface-2)] border border-[var(--color-border-strong)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          onClick={(e) => {
            e.preventDefault()
            handleClick('contato')
          }}
          className="hidden rounded-full bg-[var(--color-text)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-transform hover:scale-[1.03] md:inline-block"
        >
          Vamos conversar
        </a>

        {/* Alvo de toque generoso (Lei de Fitts) para abrir o menu mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-bg)] md:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-3">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleClick(link.id)
                    }}
                    className="block rounded-lg px-3 py-3 text-base text-[var(--color-text)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
