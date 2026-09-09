import { GraduationCap, BadgeCheck } from 'lucide-react'
import RevealOnScroll from './RevealOnScroll'

const EDUCATION = [
  {
    degree: 'Pós-graduação em Gestão de Marketing Digital',
    school: 'Anhanguera Educacional',
    period: '2026 — em andamento',
    current: true,
  },
  {
    degree: 'Pós-graduação em User Experience',
    school: 'Universidade Anhembi Morumbi',
    period: '2022 — 2023',
  },
  {
    degree: 'Tecnólogo em Marketing',
    school: 'Universidade Anhembi Morumbi',
    period: '2020 — 2022',
  },
  {
    degree: 'Técnico em Publicidade',
    school: 'FIEB — Fundação Instituto de Educação de Barueri',
    period: '2018 — 2019',
  },
]

const CERTIFICATIONS = [
  'Fundamentos do Design da Experiência do Usuário (UX) — Google',
  'Criatividade para Resolução de Problemas — USP',
  'UI Design e Figma — Workshop',
  'Criar Designs e Protótipos de Alta Fidelidade no Figma',
]

const INDUSTRIES = ['SaaS & FinOps', 'Saúde', 'Beleza & Cosméticos', 'Varejo & Marketing']

export default function About() {
  return (
    <section id="sobre" className="relative py-28" aria-label="Sobre e posição acadêmica">
      <div className="container-page">
        <RevealOnScroll>
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-accent)]">
            Sobre
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
            Design orientado por método — e por formação contínua.
          </h2>
        </RevealOnScroll>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Bio + indústrias — Lei de Proximidade: informações relacionadas agrupadas */}
          <RevealOnScroll delay={0.05}>
            <div className="space-y-5 text-[15px] leading-relaxed text-[var(--color-text-muted)]">
              <p>
                Ao longo de mais de uma década, migrei da comunicação visual para o design de
                experiências digitais centradas no usuário. Hoje aplico esse repertório em
                interfaces complexas — hierarquias de dados, sistemas de filtros e componentes
                de produto — sempre traduzindo requisitos técnicos em fluxos simples de usar.
              </p>
              <p>
                Trabalho com pesquisa, arquitetura da informação, prototipagem de alta fidelidade
                e design systems, unindo rigor metodológico (heurísticas de Nielsen, Leis de UX)
                a um olhar estético clean, moderno e consistente.
              </p>
              <p>
                Uso Inteligência Artificial no dia a dia como acelerador criativo — da geração e
                tratamento de imagens à produção de motion — sem perder de vista o que realmente
                importa: a experiência de quem usa o produto.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-[var(--color-text)]">Setores atendidos</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {INDUSTRIES.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-1.5 text-xs text-[var(--color-text-muted)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium text-[var(--color-text)]">
                <BadgeCheck size={16} className="text-[var(--color-accent-2)]" />
                Certificações
              </div>
              <ul className="space-y-2.5">
                {CERTIFICATIONS.map((c) => (
                  <li key={c} className="flex gap-2.5 text-sm text-[var(--color-text-muted)]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-faint)]" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          {/* Posição acadêmica — timeline, mesmo peso de credibilidade que os serviços */}
          <RevealOnScroll delay={0.1}>
            <div className="mb-6 flex items-center gap-2 text-sm font-medium text-[var(--color-text)]">
              <GraduationCap size={18} className="text-[var(--color-primary-2)]" />
              Formação acadêmica
            </div>
            <ol className="relative space-y-8 border-l border-[var(--color-border)] pl-7">
              {EDUCATION.map((ed) => (
                <li key={ed.degree} className="relative">
                  <span
                    className={`absolute -left-[30px] top-1 h-2.5 w-2.5 rounded-full ring-4 ring-[var(--color-bg)] ${
                      ed.current ? 'bg-[var(--color-accent-2)]' : 'bg-[var(--color-primary-2)]'
                    }`}
                  />
                  <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-text-faint)]">
                    {ed.period}
                    {ed.current && (
                      <span className="ml-2 rounded-full bg-[var(--color-accent-2)]/10 px-2 py-0.5 text-[10px] normal-case tracking-normal text-[var(--color-accent-2)]">
                        em andamento
                      </span>
                    )}
                  </p>
                  <h3 className="mt-1 font-medium text-[var(--color-text)]">{ed.degree}</h3>
                  <p className="mt-0.5 text-sm text-[var(--color-text-muted)]">{ed.school}</p>
                </li>
              ))}
            </ol>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
