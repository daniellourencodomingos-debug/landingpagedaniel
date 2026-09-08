import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Link2, ExternalLink, Send, CheckCircle2, MessageCircle } from 'lucide-react'
import RevealOnScroll from './RevealOnScroll'
import { WHATSAPP_URL } from '../lib/contact'

const EMAIL = 'danielgnr1@hotmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/daniel-lourenço-domingos-85045810a'
const BEHANCE = 'https://www.behance.net/danielloureno8'

type Status = 'idle' | 'error' | 'sent'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})

  const validate = () => {
    const next: typeof errors = {}
    if (!name.trim()) next.name = 'Conte seu nome para eu saber com quem estou falando.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Informe um e-mail válido para eu poder responder.'
    if (!message.trim() || message.trim().length < 10) next.message = 'Descreva brevemente seu projeto (mín. 10 caracteres).'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) {
      setStatus('error')
      return
    }
    const subject = encodeURIComponent(`Novo contato pelo site — ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <section id="contato" className="relative py-28" aria-label="Contato">
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <RevealOnScroll>
            <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-accent)]">
              Contato
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Vamos criar algo juntos?
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[var(--color-text-muted)]">
              Conte um pouco sobre o seu projeto. Costumo responder em até 1 dia útil.
            </p>

            <div className="mt-9 space-y-3">
              {/* Contato principal — respondido diretamente pelo WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl border border-[var(--color-accent-2)]/40 bg-[var(--color-accent-2)]/10 px-4 py-3.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent-2)]/70"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle size={18} className="text-[var(--color-accent-2)]" />
                  Chamar no WhatsApp
                </span>
                <ExternalLink size={14} className="text-[var(--color-text-faint)]" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3.5 text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-border-strong)]"
              >
                <Mail size={18} className="text-[var(--color-primary-2)]" />
                {EMAIL}
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3.5 text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-border-strong)]"
              >
                <span className="flex items-center gap-3">
                  <Link2 size={18} className="text-[var(--color-primary-2)]" />
                  LinkedIn
                </span>
                <ExternalLink size={14} className="text-[var(--color-text-faint)]" />
              </a>
              <a
                href={BEHANCE}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3.5 text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-border-strong)]"
              >
                <span className="flex items-center gap-3">
                  <ExternalLink size={18} className="text-[var(--color-primary-2)]" />
                  Behance — Portfólio
                </span>
                <ExternalLink size={14} className="text-[var(--color-text-faint)]" />
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08}>
            <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-describedby="form-status">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-[var(--color-text-muted)]">
                  Nome
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-primary-2)]"
                  placeholder="Seu nome"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-[var(--color-text-muted)]">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-primary-2)]"
                  placeholder="voce@empresa.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-[var(--color-text-muted)]">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-primary-2)]"
                  placeholder="Conte brevemente sobre o seu projeto"
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-text)] px-6 py-3.5 text-sm font-medium text-[var(--color-bg)] transition-transform hover:scale-[1.01] sm:w-auto"
              >
                Enviar mensagem
                <Send size={15} />
              </motion.button>

              <div id="form-status" role="status" aria-live="polite" className="min-h-[1.25rem]">
                {status === 'sent' && (
                  <p className="flex items-center gap-1.5 text-xs text-[var(--color-accent-2)]">
                    <CheckCircle2 size={14} />
                    Abrindo seu app de e-mail com a mensagem pronta para enviar.
                  </p>
                )}
              </div>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
