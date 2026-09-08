# Daniel Lourenço Domingos — Portfólio

Landing page pessoal de Daniel Lourenço Domingos, UX/UI Designer. Construída com Vite + React + TypeScript + Tailwind CSS, com animações em GSAP (ScrollTrigger) e Framer Motion.

## Stack

- **Vite + React + TypeScript** — build rápido, export estático
- **Tailwind CSS v4** — design tokens (`src/index.css`) evoluídos da identidade visual (roxo/azul, Inter)
- **GSAP + ScrollTrigger** — revelações de conteúdo ao rolar a página
- **Framer Motion** — microinterações (hover, nav ativa, barra de progresso)
- **lucide-react** — ícones

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview   # para conferir o build localmente
```

O build estático é gerado em `dist/`.

## Deploy no GitHub Pages

O repositório já inclui um workflow (`.github/workflows/deploy.yml`) que builda e publica automaticamente a cada push na branch `main`.

Passo a passo:

1. Crie um repositório no GitHub e suba este projeto:
   ```bash
   git init
   git add .
   git commit -m "Landing page inicial"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
   git push -u origin main
   ```
2. No GitHub, vá em **Settings → Pages** e em "Build and deployment" selecione **Source: GitHub Actions**.
3. A cada push em `main`, o workflow builda o site e publica automaticamente. O link fica em **Settings → Pages** (algo como `https://SEU-USUARIO.github.io/SEU-REPO/`).

> `vite.config.ts` usa `base: './'`, então o build funciona tanto em `usuario.github.io/repo/` quanto em domínio próprio — não é necessário editar nada ao trocar o nome do repositório.

### Domínio próprio (opcional)

Se quiser usar um domínio próprio (ex: `danieldomingos.design`), crie um arquivo `public/CNAME` com o domínio e configure o DNS conforme a [documentação do GitHub Pages](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Conteúdo

Os textos de "Sobre" e "Formação acadêmica" (`src/components/About.tsx`) foram extraídos do seu CV (`Profile-2.pdf`) e do manual de identidade (`Identidade Daniel.docx`) encontrados na sua pasta de trabalho. Revise os dados antes de publicar — em especial telefone/e-mail em `src/components/Contact.tsx` — e ajuste a lista de clientes em `src/components/TrustedBy.tsx` conforme desejar citar publicamente.
