import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void }
    }
  }
}

interface InstagramEmbedProps {
  /** URL pública do post/reel, ex: https://www.instagram.com/reel/XXXXXXXXXXX/ */
  url: string
}

/**
 * Embed oficial do Instagram (oEmbed). Carrega o script deles uma única vez
 * e manda reprocessar sempre que este componente aparece — é a forma
 * suportada de mostrar um post/reel sem baixar o vídeo. Por vir da própria
 * Meta, o cartão mantém o cabeçalho/rodapé padrão do Instagram (não dá pra
 * customizar isso); por fora, o wrapper usa a mesma moldura dos outros
 * cartões de motion do site para os dois ficarem visualmente parecidos.
 */
export default function InstagramEmbed({ url }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const process = () => window.instgrm?.Embeds.process()

    if (window.instgrm) {
      process()
      return
    }

    const existing = document.querySelector<HTMLScriptElement>('script[src="https://www.instagram.com/embed.js"]')
    if (existing) {
      existing.addEventListener('load', process)
      return () => existing.removeEventListener('load', process)
    }

    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    script.onload = process
    document.body.appendChild(script)
  }, [url])

  return (
    <div ref={containerRef} className="flex min-h-[420px] items-center justify-center bg-black">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ background: '#000', border: 0, margin: 0, maxWidth: 400, minWidth: 280, width: '100%' }}
      />
    </div>
  )
}
