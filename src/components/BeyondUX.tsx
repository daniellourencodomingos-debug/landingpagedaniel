import { motion } from 'framer-motion'
import { Target, Sparkles, ArrowUpRight, Film, GalleryHorizontal } from 'lucide-react'
import RevealOnScroll from './RevealOnScroll'
import Carousel from './Carousel'
import PhoneMockup from './PhoneMockup'
import InstagramEmbed from './InstagramEmbed'
import { useAutoplayVideo } from '../lib/useAutoplayVideo'
import motionPoster from '../assets/motion-creative-poster.jpg'

// Reel de animação feita com IA para petshop — embed oficial do Instagram
// (ver comentário em InstagramEmbed.tsx sobre por que não é um <video> nativo).
// Pra trocar por outro reel/post, é só atualizar esta URL.
const PETSHOP_REEL_URL = 'https://www.instagram.com/reel/DURdWweDwN0/'
import carouselSlide01 from '../assets/carousel-exo/slide-01.jpg'
import carouselSlide02 from '../assets/carousel-exo/slide-02.jpg'
import carouselSlide03 from '../assets/carousel-exo/slide-03.jpg'
import carouselSlide04 from '../assets/carousel-exo/slide-04.jpg'
import carouselSlide05 from '../assets/carousel-exo/slide-05.jpg'
import carouselSlide06 from '../assets/carousel-exo/slide-06.jpg'
import carouselSlide07 from '../assets/carousel-exo/slide-07.jpg'

const carouselImages = [
  carouselSlide01,
  carouselSlide02,
  carouselSlide03,
  carouselSlide04,
  carouselSlide05,
  carouselSlide06,
  carouselSlide07,
]

const motionVideoSrc = './videos/motion-creative.mp4'

export default function BeyondUX() {
  const videoRef = useAutoplayVideo<HTMLVideoElement>(motionVideoSrc)

  return (
    <section className="relative py-24" aria-label="Outras frentes: motion, mídias sociais e IA">
      <div className="container-page">
        <RevealOnScroll>
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-accent)]">
            Fora do UX
          </span>
          <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
            Antes do UX, veio o design gráfico e o motion — e eles ainda aparecem.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--color-text-muted)]">
            Meu foco hoje é produto digital, mas de vez em quando assino projetos pontuais de
            mídias sociais e motion design.
          </p>
        </RevealOnScroll>

        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:items-start">
          {/* Peça de motion — freela em After Effects para agência de marketing.
              Mesma moldura (cartão preto, cantos arredondados, barra de legenda
              com ícone de filme) usada no reel de IA ao lado, pra ficarem com
              a cara de uma "dupla" mesmo vindo de formatos diferentes. */}
          <RevealOnScroll delay={0.05}>
            <div className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-black">
              <video
                ref={videoRef}
                className="aspect-video w-full object-cover"
                poster={motionPoster}
                autoPlay
                loop
                muted
                playsInline
                preload="none"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5">
                <p className="flex items-center gap-1.5 text-xs font-medium text-white/70">
                  <Film size={13} />
                  Motion design · freela para agência de marketing · After Effects
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Animação para petshop feita com IA — embed do Instagram (ver
              PETSHOP_REEL_URL acima pra trocar o reel). Por vir direto do
              Instagram, o cartão interno mantém a cara padrão deles; a
              moldura e a legenda por fora seguem o mesmo padrão do vídeo
              de motion ao lado. */}
          <RevealOnScroll delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-black">
              <InstagramEmbed url={PETSHOP_REEL_URL} />
              <div className="border-t border-[var(--color-border)] bg-black p-5">
                <p className="flex items-center gap-1.5 text-xs font-medium text-white/70">
                  <Film size={13} />
                  Animação para petshop · feita com IA
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Mídias sociais com estratégia */}
          <RevealOnScroll delay={0.15}>
            <div className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-[var(--color-surface-2)] text-[var(--color-primary-2)]">
                <Target size={20} strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-medium text-[var(--color-text)]">
                Posts para redes sociais com estratégia
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                Planejamento de conteúdo, calendário editorial e peças pensadas para
                posicionamento de marca — não só estética.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Carrossel — peça real para a EXO, em vitrine própria (mockup de celular) */}
        <RevealOnScroll delay={0.15}>
          <div className="relative mt-6 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-14 sm:px-10">
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[100px]"
              style={{ background: 'radial-gradient(circle, #7c6cf8 0%, transparent 70%)' }}
              aria-hidden="true"
            />
            <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-10 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xs text-center sm:text-left">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-[var(--color-accent)]">
                  <GalleryHorizontal size={13} />
                  Carrossel de produto
                </span>
                <h3 className="mt-3 text-lg font-medium text-[var(--color-text)]">
                  Carrossel para a EXO
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  Sistema do Alisamento Perfeito — 7 slides, direção de arte e diagramação para
                  Instagram. Arraste no celular ao lado para navegar.
                </p>
              </div>
              <PhoneMockup handle="exo.oficial" caption="Publicidade · Cabelos">
                <Carousel
                  images={carouselImages}
                  alt="Carrossel Sistema do Alisamento Perfeito, para a EXO"
                  framed={false}
                />
              </PhoneMockup>
            </div>
          </div>
        </RevealOnScroll>

        {/* IA — card com destaque extra, leva para a página de prompts */}
        <RevealOnScroll delay={0.2}>
          <a
            href="./prompts.html"
            target="_blank"
            rel="noreferrer"
            className="group relative mt-6 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl border border-[var(--color-border-strong)] p-8 transition-transform hover:scale-[1.005] sm:flex-row sm:items-center"
            style={{ background: 'linear-gradient(120deg, #241a52 0%, #2c2570 45%, #1d3a8a 100%)' }}
          >
            <div
              className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full opacity-50 blur-[90px]"
              style={{ background: 'radial-gradient(circle, #8b7cfa 0%, transparent 70%)' }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full opacity-40 blur-[90px]"
              style={{ background: 'radial-gradient(circle, #4f7dfa 0%, transparent 70%)' }}
              aria-hidden="true"
            />

            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur">
                <Sparkles size={12} />
                Novo · IA generativa
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Imagens e vídeos com IA
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/70">
                Uso IA generativa no dia a dia — imagens, vídeos e animações. Reuni os prompts
                que mais uso numa biblioteca própria: parte grátis, parte à venda.
              </p>
            </div>

            <motion.span
              whileHover={{ x: 3 }}
              className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#1d1240]"
            >
              Ver Biblioteca de Prompts
              <ArrowUpRight size={15} />
            </motion.span>
          </a>
        </RevealOnScroll>
      </div>
    </section>
  )
}
