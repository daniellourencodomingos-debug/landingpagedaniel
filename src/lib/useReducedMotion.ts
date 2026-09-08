import { useEffect, useState } from 'react'

/**
 * Respeita a preferência do usuário (prefers-reduced-motion).
 * Heurística de Nielsen: controle e liberdade do usuário — nunca forçamos
 * animação em quem pediu para o sistema reduzir movimento.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const listener = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', listener)
    return () => mq.removeEventListener('change', listener)
  }, [])

  return reduced
}
