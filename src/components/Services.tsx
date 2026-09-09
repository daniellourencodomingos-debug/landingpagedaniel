import { motion } from 'framer-motion'
import { Compass, LayoutGrid, FlaskConical, Sparkles, Bot } from 'lucide-react'
import RevealOnScroll from './RevealOnScroll'

const SERVICES = [
  {
    icon: Compass,
    title: 'UX Research & Estratégia',
    description:
      'Entrevistas, jornadas e arquitetura da informação para entender o problema real antes de desenhar a solução.',
  },
  {
    icon: LayoutGrid,
    title: 'UI & Design Systems',
    description:
      'Interfaces limpas e consistentes, com bibliotecas de componentes escaláveis para produtos que crescem sem perder padrão.',
  },
  {
    icon: FlaskConical,
    title: 'Prototipagem & Testes de Usabilidade',
    description:
      'Protótipos de alta fidelidade no Figma, validados com usuários reais antes de virar código.',
  },
  {
    icon: Sparkles,
    title: 'Motion & Prototipação Interativa',
    description:
      'Protótipos navegáveis e animações que comunicam a ideia com clareza — do wireframe ao vídeo de apresentação.',
  },
  {
    icon: Bot,
    title: 'Design com Inteligência Artificial',
    description:
      'IA generativa aplicada ao fluxo criativo — geração e tratamento de imagens, variações de peças e aceleração de entregas sem abrir mão de consistência de marca.',
  },
]

const PROCESS = [
  ['01', 'Descoberta', 'Entendo o negócio, os usuários e as restrições técnicas.'],
  ['02', 'Definição', 'Estruturo fluxos, arquitetura da informação e wireframes.'],
  ['03', 'Design', 'Interfaces de alta fidelidade alinhadas ao design system.'],
  ['04', 'Validação', 'Testes com usuários e refinamento contínuo.'],
]

export default function Services() {
  return (
    <section id="servicos" className="relative py-28" aria-label="Serviços de UX/UI">
      <div className="container-page">
        <RevealOnScroll>
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-accent)]">
            Serviços
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
            Do problema à interface, com método.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--color-text-muted)]">
            Cada entrega segue as heurísticas de usabilidade e as Leis de UX — resultado em
            produtos consistentes, fáceis de aprender e agradáveis de usar.
          </p>
        </RevealOnScroll>

        {/* Grid 2x2: Lei de Prégnância — formas simples e repetíveis */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <RevealOnScroll key={s.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 transition-colors hover:border-[var(--color-border-strong)]"
              >
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-[var(--color-surface-2)] text-[var(--color-primary-2)] transition-colors group-hover:text-[var(--color-accent)]">
                  <s.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-medium text-[var(--color-text)]">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {s.description}
                </p>
              </motion.article>
            </RevealOnScroll>
          ))}
        </div>

        {/* Processo — chunking (Lei de Miller): 4 passos, fáceis de reter */}
        <RevealOnScroll delay={0.15}>
          <div className="mt-20 grid gap-8 border-t border-[var(--color-border)] pt-14 sm:grid-cols-4">
            {PROCESS.map(([n, title, desc]) => (
              <div key={n}>
                <span className="text-sm font-medium text-[var(--color-text-faint)]">{n}</span>
                <h4 className="mt-2 font-medium text-[var(--color-text)]">{title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-muted)]">{desc}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
