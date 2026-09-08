import { useEffect, useState } from 'react'

/**
 * Observa quais seções estão visíveis para destacar o item ativo na navegação.
 * Heurística de Nielsen: visibilidade do status do sistema + reconhecimento
 * em vez de memorização (o usuário sempre sabe "onde está" na página).
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids])

  return active
}
