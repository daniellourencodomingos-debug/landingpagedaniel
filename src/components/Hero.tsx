import { motion, type Variants } from 'framer-motion'
import { ArrowDown, ArrowUpRight, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../lib/contact'
import danielPortrait from '../assets/daniel-portrait.jpg'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
      aria-label="Introdução"
    >
      {/* Fundo — gradiente roxo/azul evoluído da identidade visual, com textura sutil */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[var(--color-bg)]" />
        <div
          className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-40 blur-[110px] animate-float"
          style={{ background: 'radial-gradient(circle, #6d5bfa 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-14rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full opacity-30 blur-[110px]"
          style={{ background: 'radial-gradient(circle, #4f7dfa 0%, transparent 70%)' }}
        />
        <div className="absolute inset-0 grain" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-page grid items-center gap-14 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-0"
      >
        <div>
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)]/60 px-4 py-1.5 text-xs text-[var(--color-text-muted)] backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent-2)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent-2)]" />
            </span>
            Disponível para novos projetos
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl"
          >
            UX/UI Design que transforma
            <br className="hidden sm:block" /> complexidade em{' '}
            <span className="text-gradient">clareza</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)]"
          >
            Sou Daniel Lourenço Domingos, UX/UI Designer com mais de 10 anos de trajetória
            desenhando produtos digitais — de plataformas B2B a marcas de saúde e beleza —
            com foco em usabilidade, consistência e resultado de negócio.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo('servicos')}
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-text)] px-6 py-3.5 text-sm font-medium text-[var(--color-bg)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Ver serviços
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] px-6 py-3.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-surface)]"
            >
              <MessageCircle size={16} />
              Fale no WhatsApp
            </a>
          </motion.div>

          <motion.dl variants={item} className="mt-14 grid max-w-md grid-cols-3 gap-6">
            {[
              ['10+', 'anos de experiência'],
              ['12', 'em tecnologia & design'],
              ['5+', 'setores atendidos'],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="text-2xl font-semibold text-[var(--color-text)]">{value}</dd>
                <dd className="mt-1 text-xs leading-snug text-[var(--color-text-faint)]">{label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Retrato — gerado com IA sobre o fundo roxo/azul da identidade, solto (sem moldura), como um recorte flutuando sobre o fundo */}
        <motion.div
          variants={item}
          className="relative order-first mx-auto w-full max-w-[15rem] sm:max-w-xs lg:order-last lg:max-w-sm"
        >
          <div
            className="absolute inset-0 -z-10 opacity-70 blur-3xl"
            style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 40%, #7c3aed, transparent 70%)' }}
            aria-hidden="true"
          />
          <img
            src={danielPortrait}
            alt="Retrato de Daniel Lourenço Domingos"
            className="relative aspect-[3/4] w-full object-cover"
            style={{
              maskImage:
                'radial-gradient(ellipse 82% 90% at 50% 42%, black 62%, rgba(0,0,0,0.7) 80%, transparent 100%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 82% 90% at 50% 42%, black 62%, rgba(0,0,0,0.7) 80%, transparent 100%)',
            }}
            width={864}
            height={1184}
          />
          <svg viewBox="0 0 300 300" className="pointer-events-none absolute -inset-10 h-[calc(100%+5rem)] w-[calc(100%+5rem)]" aria-hidden="true">
            <defs>
              <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8b7cfa" />
                <stop offset="100%" stopColor="#4f7dfa" />
              </linearGradient>
            </defs>
            <motion.circle
              cx="150"
              cy="150"
              r="145"
              fill="none"
              stroke="url(#ring)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="120 700"
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: '150px 150px' }}
            />
          </svg>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => scrollTo('sobre')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[var(--color-text-faint)] sm:flex"
        aria-label="Rolar para a seção Sobre"
      >
        <span className="text-[11px] uppercase tracking-widest">Rolar</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  )
}
