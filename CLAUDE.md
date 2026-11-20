# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Status

The folder is still an empty skeleton (`src/`, `tests/`, `docs/`, `assets/`, `config/`, `scripts/`, each with only a `.gitkeep`). The stack and conventions below are planned and not yet implemented, so they are not confirmed by any code. The folder is also not a git repository.

# Project: [Nome do Projeto]

## Tech Stack
- Next.js 16 (App Router), React 19, TypeScript
- TailwindCSS 4, shadcn/ui
- React Hook Form + Zod (validação)
- Server Component First

## Commands
- `npm run dev` — servidor local (porta 3000)
- `npm run build` — build de produção

## Architecture
- App Router: rotas em `app/`, agrupadas por `(grupo)/`
- Server Components por padrão — só adicionar `'use client'` quando usar hooks/eventos/browser APIs
- Mutações via Server Actions em `actions/` — NUNCA chamar DB direto em Client Components
- `components/ui/` — primitivos reutilizáveis (shadcn)
- `components/` — componentes de feature
- `lib/` — helpers, clients (supabase, stripe), configurações
- `types/` — tipos globais e schemas Zod compartilhados

## Code Style
- NEVER use `any` explícito — usar `unknown` + type guard
- Imports: ES modules (import/export), sem require()
- Tailwind only — sem CSS inline, sem styled-components
- Novos design tokens vão em `tailwind.config.ts` antes de usar
- Nomes de arquivo: kebab-case. Componentes: PascalCase

## Environment Variables
- `NEXT_PUBLIC_*` apenas para valores seguros no client
- Segredos (DB, API keys) apenas em Server Actions ou Route Handlers
- Copiar `.env.example` para `.env.local` ao clonar

## Segredos e Segurança (tokens, chaves, senhas)
- NUNCA imprimir, repetir, resumir ou registrar o valor de um token, chave de API ou senha: nem nas respostas, nem em comandos, commits, diffs, logs ou mensagens de erro. Referir-se a eles pelo nome ("token do GitHub") ou mascarados (`ghp_****`)
- NUNCA ler por completo `.env*`, `.mcp.json` ou `~/.claude.json`. Para conferir se um segredo existe, usar `grep -c` ou `grep -q`, sem exibir o valor
- Segredo colado na conversa: não repetir o valor, usá-lo só se o usuário autorizar a ação específica, e avisar que ele deve ser revogado e trocado
- Onde guardar: segredos só em `.env.local` ou variáveis de ambiente (ignorados pelo git). Em `.mcp.json`, referenciar variáveis (`${NOME_DA_VARIAVEL}`) em vez de gravar o valor. `.mcp.json` já está no `.gitignore`
- Nunca colocar token em URL, argumento de comando ou `.git/config`. Para o `git push`, usar o Git Credential Manager (login pelo navegador)
- Antes de todo commit/push: `git grep --cached -n -I -E "github_pat_|ghp_|ctx7sk-|sk-ant-|Bearer [A-Za-z0-9_-]{20,}"`. Se algo aparecer, parar e avisar o usuário
- Tokens com o mínimo de permissão, restritos a este repositório e com validade curta. Se um token vazar, revogar na hora
- `NEXT_PUBLIC_*` nunca pode conter segredo. Segredos só em Server Actions ou Route Handlers

## Workflow
- ALWAYS run `npm run type-check && npm run lint` após uma série de mudanças
- Rodar um teste por vez, não o suite completo: `npm run test -- NomeDoArquivo`
- Branch naming: `feat/`, `fix/`, `chore/` + descrição em kebab-case
- Commits em inglês, imperativo: "add OAuth callback handler"

## Common Gotchas
- `revalidatePath()` e `revalidateTag()` só funcionam em Server Actions/Route Handlers
- Middleware em `middleware.ts` na raiz — não dentro de `app/`
- Supabase client no server: usar `createServerClient` (cookies). No client: `createBrowserClient`
- Imagens externas precisam de domínio autorizado em `next.config.ts` (remotePatterns)
