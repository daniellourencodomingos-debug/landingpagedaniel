import { useEffect, useRef, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '../lib/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

interface RevealOnScrollProps {
  children: ReactNode
  y?: number
  delay?: number
  duration?: number
  as?: 'div' | 'span'
  className?: string
}

/**
 * Revela o conteúdo suavemente ao entrar na viewport (GSAP ScrollTrigger).
 * Curto, discreto, sem "roubar" o scroll do usuário — reforça hierarquia
 * sem prejudicar performance nem a Lei da Prégnância (formas simples).
 */
export default function RevealOnScroll({
  children,
  y = 28,
  delay = 0,
  duration = 0.9,
  as = 'div',
  className,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (reduced) {
      gsap.set(el, { opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    }, ref)

    return () => ctx.revert()
  }, [y, delay, duration, reduced])

  const Tag = as
  return (
    <Tag ref={ref} className={className} style={{ opacity: reduced ? 1 : undefined }}>
      {children}
    </Tag>
  )
}
