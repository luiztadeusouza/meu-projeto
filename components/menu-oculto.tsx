"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type MenuOcultoProps = {
  links: { href: string; rotulo: string }[];
};

// Menu que fica escondido e abre ao clicar no botão. Fecha ao escolher um link,
// ao clicar fora ou ao pressionar Esc.
export function MenuOculto({ links }: MenuOcultoProps) {
  const [aberto, setAberto] = useState(false);
  const raiz = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!aberto) return;

    function aoClicarFora(evento: MouseEvent) {
      if (raiz.current && !raiz.current.contains(evento.target as Node)) {
        setAberto(false);
      }
    }
    function aoTeclar(evento: KeyboardEvent) {
      if (evento.key === "Escape") setAberto(false);
    }

    function aoFocarFora(evento: FocusEvent) {
      if (raiz.current && !raiz.current.contains(evento.target as Node)) {
        setAberto(false);
      }
    }

    document.addEventListener("mousedown", aoClicarFora);
    document.addEventListener("keydown", aoTeclar);
    document.addEventListener("focusin", aoFocarFora);
    return () => {
      document.removeEventListener("mousedown", aoClicarFora);
      document.removeEventListener("keydown", aoTeclar);
      document.removeEventListener("focusin", aoFocarFora);
    };
  }, [aberto]);

  return (
    <div ref={raiz} className="relative">
      <button
        type="button"
        onClick={() => setAberto((valor) => !valor)}
        aria-expanded={aberto}
        aria-controls="menu-principal"
        aria-label={aberto ? "Fechar menu" : "Abrir menu"}
        className="flex size-10 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-muted"
      >
        {aberto ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <Menu className="size-5" aria-hidden="true" />
        )}
      </button>

      {aberto ? (
        <nav
          id="menu-principal"
          aria-label="Principal"
          className="absolute right-0 top-12 w-56 overflow-hidden rounded-xl border border-border bg-card shadow-lg"
        >
          <ul className="py-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setAberto(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {link.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
