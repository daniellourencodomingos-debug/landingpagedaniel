const CLIENTS = [
  'Amil',
  'Alfaparf Milano',
  'Grupo Koosmetics',
  'Cia Beauty',
  'Grupo Bioclean',
  'EXO',
  'Inforcomp',
  'Globo',
]

/**
 * Marquee discreto de marcas atendidas — prova social logo após o Hero.
 * Duplicamos a lista para o loop ficar contínuo (animate-marquee, CSS puro).
 */
export default function TrustedBy() {
  const items = [...CLIENTS, ...CLIENTS]

  return (
    <div className="border-y border-[var(--color-border)] bg-[var(--color-bg-soft)] py-6" aria-label="Marcas atendidas">
      <p className="container-page mb-4 text-center text-[11px] uppercase tracking-widest text-[var(--color-text-faint)]">
        Projetos entregues para
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--color-bg-soft)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--color-bg-soft)] to-transparent" />
        <div className="flex w-max animate-marquee gap-14">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap text-lg font-medium tracking-tight text-[var(--color-text-faint)]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
