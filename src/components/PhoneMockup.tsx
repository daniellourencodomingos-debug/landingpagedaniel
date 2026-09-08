import type { ReactNode } from 'react'
import { Heart, MessageCircle, Send, Bookmark, Home, Search, SquarePlus, Film, CircleUser } from 'lucide-react'

type PhoneMockupProps = {
  children: ReactNode
  handle: string
  caption: string
  likes?: string
}

/**
 * Mockup genérico de smartphone (desenhado em CSS, sem depender de imagem
 * externa) com proporção real de aparelho (~9:19.5) — tela simulando o feed
 * do Instagram, incluindo barra de status, cabeçalho do app, post e barra
 * de navegação inferior, para dar contexto real ao conteúdo em 1:1.
 */
export default function PhoneMockup({ children, handle, caption, likes = '2.481' }: PhoneMockupProps) {
  return (
    <div className="mx-auto aspect-[9/19.5] w-[240px] select-none sm:w-[260px]">
      <div className="relative h-full rounded-[2.6rem] border border-white/10 bg-[#0a0a0f] p-2 shadow-2xl">
        {/* Botões laterais */}
        <div className="absolute -left-[3px] top-20 h-5 w-[3px] rounded-l-sm bg-white/10" aria-hidden="true" />
        <div className="absolute -left-[3px] top-28 h-9 w-[3px] rounded-l-sm bg-white/10" aria-hidden="true" />
        <div className="absolute -left-[3px] top-[9.5rem] h-9 w-[3px] rounded-l-sm bg-white/10" aria-hidden="true" />
        <div className="absolute -right-[3px] top-24 h-12 w-[3px] rounded-r-sm bg-white/10" aria-hidden="true" />

        {/* Tela */}
        <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white">
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />

          {/* Barra de status */}
          <div className="flex shrink-0 items-center justify-between px-5 pb-0.5 pt-2.5 text-[9px] font-medium text-black">
            <span>9:41</span>
            <span className="h-[7px] w-[11px] rounded-[1px] border border-black/60" />
          </div>

          {/* Cabeçalho do app */}
          <div className="flex shrink-0 items-center justify-between px-3 py-2">
            <span className="text-[15px] font-semibold italic tracking-tight text-black" style={{ fontFamily: 'Georgia, serif' }}>
              Instagram
            </span>
            <Heart size={16} strokeWidth={1.75} className="text-black" />
          </div>

          {/* Cabeçalho do post */}
          <div className="flex shrink-0 items-center gap-2 px-3 pb-1.5">
            <div className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#7c6cf8] to-[#4f7dfa] text-[8px] font-bold text-white">
              {handle.slice(0, 2).toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="truncate text-[11px] font-semibold leading-tight text-black">{handle}</p>
              <p className="truncate text-[9px] leading-tight text-neutral-500">{caption}</p>
            </div>
          </div>

          {/* Conteúdo — carrossel (1:1) */}
          <div className="shrink-0">{children}</div>

          {/* Ações */}
          <div className="flex shrink-0 items-center justify-between px-3 py-2">
            <div className="flex items-center gap-3 text-black">
              <Heart size={17} strokeWidth={1.75} />
              <MessageCircle size={17} strokeWidth={1.75} />
              <Send size={17} strokeWidth={1.75} />
            </div>
            <Bookmark size={17} strokeWidth={1.75} className="text-black" />
          </div>

          {/* Curtidas e legenda */}
          <div className="shrink-0 px-3 pb-2">
            <p className="text-[10px] font-semibold text-black">{likes} curtidas</p>
            <p className="mt-0.5 line-clamp-1 text-[10px] leading-snug text-neutral-700">
              <span className="font-semibold">{handle}</span> Sistema completo pra um alisamento perfeito ✨
            </p>
          </div>

          {/* Prévia do próximo post — reforça a ideia de feed rolável */}
          <div className="flex shrink-0 items-center gap-2 border-t border-neutral-100 px-3 pt-2">
            <div className="h-5 w-5 shrink-0 rounded-full bg-neutral-200" />
            <div className="h-1.5 w-20 rounded-full bg-neutral-200" />
          </div>

          {/* Espaço flexível — preenche o restante da tela, como um feed contínuo */}
          <div className="min-h-0 flex-1 bg-neutral-50" />

          {/* Barra de navegação inferior */}
          <div className="flex shrink-0 items-center justify-between border-t border-neutral-100 px-6 py-2.5 text-black">
            <Home size={17} strokeWidth={1.75} />
            <Search size={17} strokeWidth={1.75} />
            <SquarePlus size={17} strokeWidth={1.75} />
            <Film size={17} strokeWidth={1.75} />
            <CircleUser size={17} strokeWidth={1.75} />
          </div>
        </div>
      </div>
    </div>
  )
}
