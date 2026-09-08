import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-sm text-[var(--color-text-faint)] sm:flex-row">
        <p>
          DLD<span className="text-[var(--color-accent)]">.</span> — Daniel Lourenço Domingos © {year}
        </p>
        <button
          onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3.5 py-2 text-xs text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
          aria-label="Voltar ao topo"
        >
          Voltar ao topo
          <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  )
}
