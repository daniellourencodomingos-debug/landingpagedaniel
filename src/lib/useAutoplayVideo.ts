import { useEffect, useRef } from 'react'

/**
 * Alguns navegadores pausam vídeos autoplay/loop quando a aba perde foco,
 * quando o elemento é revelado por uma animação (opacity 0 -> 1) ou por
 * economia de energia em rolagem longa. Este hook garante que o vídeo
 * retome a reprodução sempre que voltar a ficar visível.
 *
 * Também adia o carregamento do arquivo: o `src` só é atribuído ao elemento
 * (disparando o download) quando ele se aproxima da viewport, em vez de no
 * carregamento inicial da página — o vídeo é pesado e fica abaixo da dobra,
 * então isso evita competir com os recursos acima da dobra pela banda da
 * conexão e deixa o carregamento inicial da página mais rápido.
 */
export function useAutoplayVideo<T extends HTMLVideoElement>(src: string) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const tryPlay = () => {
      el.play().catch(() => {
        /* autoplay pode ser bloqueado até haver interação — silenciosamente ignora */
      })
    }

    let loaded = false
    const ensureLoaded = () => {
      if (loaded) return
      loaded = true
      el.src = src
      el.load()
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ensureLoaded()
            tryPlay()
          }
        })
      },
      { threshold: 0.15, rootMargin: '600px 0px' },
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
  }, [src])

  return ref
}
