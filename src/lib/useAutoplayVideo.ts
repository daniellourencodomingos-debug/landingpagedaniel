import { useEffect, useRef } from 'react'

/**
 * Alguns navegadores pausam vídeos autoplay/loop quando a aba perde foco,
 * quando o elemento é revelado por uma animação (opacity 0 -> 1) ou por
 * economia de energia em rolagem longa. Este hook garante que o vídeo
 * retome a reprodução sempre que voltar a ficar visível.
 */
export function useAutoplayVideo<T extends HTMLVideoElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const tryPlay = () => {
      el.play().catch(() => {
        /* autoplay pode ser bloqueado até haver interação — silenciosamente ignora */
      })
    }

    // Tenta assim que montar (cobre o caso de já estar visível no load).
    tryPlay()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) tryPlay()
        })
      },
      { threshold: 0.15 },
    )
    observer.observe(el)

    const onVisibility = () => {
      if (document.visibilityState === 'visible') tryPlay()
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return ref
}
