import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type CarouselProps = {
  images: string[]
  alt: string
  /** Quando false, remove borda/cantos arredondados/sombra — para uso "encaixado" (ex: dentro de um mockup). */
  framed?: boolean
}

export default function Carousel({ images, alt, framed = true }: CarouselProps) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const go = (next: number) => {
    setDirection(next > index ? 1 : -1)
    setIndex((next + images.length) % images.length)
  }

  return (
    <div
      className={`group relative aspect-square w-full select-none overflow-hidden bg-black ${
        framed ? 'rounded-2xl border border-[var(--color-border)]' : ''
      }`}
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.img
          key={index}
          src={images[index]}
          alt={`${alt} — slide ${index + 1} de ${images.length}`}
          custom={direction}
          initial={{ x: direction >= 0 ? 60 : -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction >= 0 ? -60 : 60, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.6}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) go(index + 1)
            else if (info.offset.x > 60) go(index - 1)
          }}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full cursor-grab object-cover active:cursor-grabbing"
        />
      </AnimatePresence>

      {/* Setas — alvo de toque grande (Lei de Fitts), aparecem no hover em telas maiores */}
      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Slide anterior"
        className="absolute left-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 focus-visible:opacity-100 sm:h-10 sm:w-10"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Próximo slide"
        className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 focus-visible:opacity-100 sm:h-10 sm:w-10"
      >
        <ChevronRight size={18} />
      </button>

      {/* Indicador de progresso — feedback de posição (Heurística de Nielsen: visibilidade do estado) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black/80 to-transparent p-4">
        <span className="text-[11px] font-medium tabular-nums text-white/70">
          {index + 1} / {images.length}
        </span>
        <div className="flex items-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Ir para slide ${i + 1}`}
              className="pointer-events-auto h-1.5 rounded-full bg-white/40 transition-all"
              style={{ width: i === index ? '1.25rem' : '0.375rem', backgroundColor: i === index ? '#fff' : undefined }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
