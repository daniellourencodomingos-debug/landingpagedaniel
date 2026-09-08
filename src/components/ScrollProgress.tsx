import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Barra fina no topo indicando o progresso de leitura da página.
 * Heurística de Nielsen #1 — visibilidade do status do sistema.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-2)] to-[var(--color-accent-2)]"
    />
  )
}
