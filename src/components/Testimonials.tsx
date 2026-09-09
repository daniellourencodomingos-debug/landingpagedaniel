import { Star, Quote } from 'lucide-react'
import RevealOnScroll from './RevealOnScroll'

/**
 * Depoimentos — CONTEÚDO PLACEHOLDER (genérico), a pedido do Daniel, até ele
 * enviar os depoimentos reais de clientes. Antes de publicar de verdade,
 * troque `quote`, `name`, `role` e `company` pelos dados reais — o layout
 * (estrelas, aspas, avatar com iniciais) não precisa mudar.
 */
const TESTIMONIALS = [
  {
    quote:
      'Depoimento de cliente em breve. Este é um texto de exemplo mostrando o tamanho e o tom que um depoimento real deve ter nesta seção.',
    name: 'Nome do Cliente',
    role: 'Cargo, Empresa',
  },
  {
    quote:
      'Depoimento de cliente em breve. Este é um texto de exemplo mostrando o tamanho e o tom que um depoimento real deve ter nesta seção.',
    name: 'Nome do Cliente',
    role: 'Cargo, Empresa',
  },
  {
    quote:
      'Depoimento de cliente em breve. Este é um texto de exemplo mostrando o tamanho e o tom que um depoimento real deve ter nesta seção.',
    name: 'Nome do Cliente',
    role: 'Cargo, Empresa',
  },
]

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('')
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-28" aria-label="Depoimentos de clientes">
      <div className="container-page">
        <RevealOnScroll>
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-accent)]">
            Depoimentos
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
            O que dizem sobre o trabalho.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--color-text-muted)]">
            Conteúdo de exemplo — em breve com depoimentos reais de clientes e parceiros.
          </p>
        </RevealOnScroll>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
                <div className="flex items-center gap-1 text-[var(--color-accent-2)]">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>

                <Quote className="mt-4 text-[var(--color-text-faint)]" size={20} aria-hidden="true" />

                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[var(--color-text-muted)]">
                  {t.quote}
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-[var(--color-border)] pt-5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--color-surface-2)] text-xs font-medium text-[var(--color-primary-2)]">
                    {initials(t.name)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text)]">{t.name}</p>
                    <p className="text-xs text-[var(--color-text-faint)]">{t.role}</p>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
