# LTAS Brinquedos Antigos e Colecionáveis

Landing page de uma página só para a **LTAS Brinquedos Antigos**, loja de brinquedos antigos e colecionáveis. O site apresenta a marca, explica como comprar e leva o visitante ao Instagram e ao WhatsApp.

O projeto é estático e sem backend: não tem banco de dados, login nem formulários.

## Tecnologias

- [Next.js](https://nextjs.org) 16 (App Router) e React 19, com TypeScript
- Tailwind CSS 4 e componentes do shadcn/ui
- React Hook Form e Zod (instalados para formulários futuros, ainda sem uso na página)
- Ícones do `lucide-react`, mais SVGs próprios para Instagram e WhatsApp
- Fontes Geist e Fraunces, via `next/font`

## Como rodar

Requer Node.js 20 ou mais recente.

```bash
npm install
npm run dev        # servidor local em http://localhost:3000
```

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Serve o build de produção |
| `npm run lint` | Verifica o código com ESLint |
| `npm run type-check` | Gera os tipos de rota e confere o TypeScript |

Ainda não há testes automatizados nem script `test`.

### Ver no celular

Com o servidor rodando e o celular no mesmo Wi-Fi, abra `http://<IP-do-computador>:3000`. No modo de desenvolvimento, o Next.js bloqueia origens desconhecidas, então o IP precisa estar em `allowedDevOrigins` no [next.config.ts](next.config.ts). Se o IP do computador mudar, atualize essa lista. Isso só vale para o `npm run dev`.

## Estrutura

```
app/
  layout.tsx            idioma, título da aba e fontes
  page.tsx              a página inteira (todas as seções)
  globals.css           tema (cores, fontes) e tokens do shadcn
components/
  ui/                   componentes do shadcn (button, input, label, field, separator)
  menu-oculto.tsx       menu que abre ao clicar (client component)
  reveal.tsx            animação de entrada ao rolar (client component)
  instagram-icon.tsx    ícone do Instagram
  whatsapp-icon.tsx     ícone do WhatsApp
lib/utils.ts            função cn() para classes
public/                 logos
actions/  types/        pastas reservadas, ainda vazias
```

As pastas `src/`, `tests/`, `docs/`, `assets/`, `config/` e `scripts/` vieram do esqueleto inicial e estão vazias.

### Seções da página

Início, Sobre, Diferenciais, Como funciona e Contato, com o menu de navegação oculto no cabeçalho. A página é um Server Component. Só o menu e as animações de entrada rodam no navegador.

## Personalização

Os dados de contato e o conteúdo ficam em [app/page.tsx](app/page.tsx):

- `WHATSAPP_URL` e `INSTAGRAM_URL`, no topo do arquivo, definem os links dos botões.
- As listas `diferenciais` e `etapas` definem os cards e os passos.
- As cores do tema ficam em [app/globals.css](app/globals.css), nas variáveis do `:root`.

Vários textos foram escritos como ponto de partida e merecem revisão: diferenciais, passos de "Como funciona", o texto de "Sobre" e a frase "Para todo o Brasil" no bloco de contato.

## Claude Code

O projeto está configurado para o Claude Code:

- [CLAUDE.md](CLAUDE.md): convenções de código, estrutura e regras de segurança.
- `.claude/rules/`: regras de organização de código e uso do Context7.
- `.claude/skills/`: skills instaladas (`frontend-design`, `vercel-react-best-practices`, `web-design-guidelines` e `context7-mcp`).
- `.claude/settings.json`: bloqueia a leitura de arquivos com segredos.

## Segurança

- Tokens, chaves de API e senhas nunca entram no código, no README nem em commits.
- Segredos ficam em `.env.local` ou em variáveis de ambiente. Esses arquivos e o `.mcp.json` estão no `.gitignore`.
- O `git push` usa o Git Credential Manager (login pelo navegador), sem token em URL.

Os detalhes estão em [CLAUDE.md](CLAUDE.md).

## Repositório

https://github.com/luiztadeusouza/meu-projeto
