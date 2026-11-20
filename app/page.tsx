import Image from "next/image";
import { ChevronDown } from "lucide-react";

import { InstagramIcon } from "@/components/instagram-icon";
import { MenuOculto } from "@/components/menu-oculto";
import { Reveal } from "@/components/reveal";
import { TituloSecao } from "@/components/titulo-secao";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { cn } from "@/lib/utils";
import { diferenciais, etapas } from "@/config/landing-page-data";

const WHATSAPP_URL = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`;
const INSTAGRAM_URL = "https://www.instagram.com/ltasbrinquedos/";

const links = [
  { href: "#sobre", rotulo: "Sobre" },
  { href: "#diferenciais", rotulo: "Diferenciais" },
  { href: "#como-funciona", rotulo: "Como funciona" },
  { href: "#contato", rotulo: "Contato" },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-end gap-4 px-4 py-3 sm:px-6">
          <a
            href="#inicio"
            className="mr-auto transition-transform hover:scale-[1.02]"
            aria-label="LTAS Brinquedos Antigos - Home"
          >
            <Image
              src="/logo-ltas-horizontal.png"
              alt="LTAS Brinquedos Antigos"
              width={204}
              height={44}
              priority
              className="h-9 w-auto sm:h-10"
            />
          </a>
          <div className="flex items-center gap-3">
            <MenuOculto links={links} />
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-x-clip">
        <section
          id="inicio"
          className="relative flex min-h-[calc(100svh-4.5rem)] flex-col items-center justify-center px-4 py-16 text-center sm:px-6"
        >
          <Reveal className="w-full">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Brinquedos antigos e colecionáveis
            </p>
          </Reveal>
          <Reveal atraso={100} className="w-full">
            <h1 className="font-heading mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
              A infância de ontem, na sua <em className="text-primary">coleção</em> de hoje
            </h1>
          </Reveal>
          <Reveal atraso={200} className="w-full">
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Carrinhos, bonecos e jogos de várias décadas, escolhidos um a um e
              descritos com honestidade, do estado de conservação à escala.
            </p>
          </Reveal>
          <Reveal atraso={300} className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "h-11 w-full px-6 text-base sm:w-auto")}
            >
              <InstagramIcon />
              Instagram
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 w-full px-6 text-base sm:w-auto",
              )}
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </Reveal>
          <a
            href="#sobre"
            className="absolute bottom-6 flex flex-col items-center gap-1 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            Role
            <ChevronDown className="size-4 animate-bounce motion-reduce:animate-none" aria-hidden="true" />
          </a>
        </section>

        <section id="sobre" className="border-y border-border bg-secondary/60 py-20">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-12 md:items-start md:gap-12">
            <Reveal de="esquerda" className="md:col-span-4">
              <TituloSecao
                eyebrow="Sobre"
                inicio="Brinquedos que guardam"
                destaque="histórias"
              />
              <dl className="mt-8 grid gap-6">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Conservação
                  </dt>
                  <dd className="font-heading mt-1 text-lg font-bold">
                    Informada em cada peça
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Variedade
                  </dt>
                  <dd className="font-heading mt-1 text-lg font-bold">
                    Carrinhos, bonecos e jogos
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal de="direita" className="md:col-span-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p className="first-letter:font-heading first-letter:float-left first-letter:mr-3 first-letter:text-5xl first-letter:font-bold first-letter:leading-none first-letter:text-primary">
                A LTAS BRINQUEDOS ANTIGOS nasceu da paixão por reencontrar pedaços da própria infância. O que começou com o garimpo despretensioso de carrinhos e bonecos clássicos logo se transformou em uma busca dedicada por relíquias que marcaram época.
              </p>

              <p>
                Para nós, brinquedos antigos são cápsulas do tempo. Cada marca na pintura ou detalhe da caixa original carrega memórias genuínas — e nossa missão é conectar essas histórias a novos colecionadores com total transparência sobre o estado de cada peça.
              </p>

              <div className="border-t border-border/60 pt-4">
                <p className="font-heading text-base font-bold text-foreground">LTAS Brinquedos</p>
                <p className="text-xs font-medium uppercase tracking-wider text-primary">
                  Garimpo &amp; Memória • Uberlândia - MG
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="diferenciais" className="overflow-x-clip py-20">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <Reveal>
              <TituloSecao
                eyebrow="Diferenciais"
                inicio="Por que comprar"
                destaque="conosco?"
              />
            </Reveal>
            <ul className="mx-auto mt-12 flex max-w-3xl flex-col gap-8">
              {diferenciais.map(({ numero, de, titulo, texto }) => (
                <li key={numero}>
                  <Reveal
                    de={de}
                    className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
                  >
                    <p className="font-heading text-3xl font-bold text-accent-foreground/40">
                      {numero}
                    </p>
                    <h3 className="font-heading mt-3 text-xl font-bold">{titulo}</h3>
                    <p className="mt-2 leading-7 text-muted-foreground">{texto}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="como-funciona"
          className="border-y border-border bg-secondary/60 py-20"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <Reveal>
              <TituloSecao
                eyebrow="Como funciona"
                inicio="Do Instagram até a sua"
                destaque="casa"
              />
            </Reveal>
            <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {etapas.map(({ numero, titulo, texto }, indice) => (
                <li key={numero}>
                  <Reveal
                    atraso={indice * 120}
                    className="border-t-2 border-primary pt-4"
                  >
                    <p className="font-heading text-2xl font-bold text-primary">{numero}</p>
                    <h3 className="font-heading mt-2 text-lg font-bold">{titulo}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{texto}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contato" className="px-4 py-20 sm:px-6">
          <Reveal className="mx-auto grid max-w-5xl gap-10 rounded-2xl bg-primary px-6 py-12 text-primary-foreground sm:px-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest opacity-80">
                Contato
              </p>
              <h2 className="font-heading mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                Procurando uma peça <em>específica</em>?
              </h2>
              <p className="mt-4 opacity-90">
                Conte o que você procura e avisamos quando chegar algo parecido.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "mt-6 h-11 px-6 text-base",
                )}
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </div>
            <dl className="space-y-5">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest opacity-80">
                  Instagram
                </dt>
                <dd className="mt-1 text-lg font-medium">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-4 hover:underline"
                  >
                    @ltasbrinquedos
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest opacity-80">
                  Base &amp; Envios
                </dt>
                <dd className="mt-1 text-lg font-medium">
                  Uberlândia - MG • Para todo o Brasil
                </dd>
              </div>
            </dl>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 text-center text-sm text-muted-foreground sm:px-6">
          <Reveal>
            <p>© 2026 LTAS Brinquedos Antigos e Colecionáveis. Todos os direitos reservados.</p>
          </Reveal>
        </div>
      </footer>
    </>
  );
}
