"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  // De onde o conteúdo entra: pela direita, pela esquerda ou do centro.
  de?: "direita" | "esquerda" | "centro";
  // Espera, em milissegundos, antes de começar a animar (para entradas em sequência).
  atraso?: number;
};

const posicaoInicial = {
  direita: "translate-x-24",
  esquerda: "-translate-x-24",
  centro: "translate-y-10 scale-95",
} as const;

// Mostra o conteúdo com uma animação de entrada quando ele aparece na tela
// durante a rolagem da página.
export function Reveal({ children, className, de = "centro", atraso = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // O conteúdo nasce visível. Só depois que o JavaScript carrega ele é escondido
  // e passa a animar, para nunca ficar em branco se o script não rodar.
  const [pronto, setPronto] = useState(false);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;
    setPronto(true);

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          observador.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observador.observe(elemento);
    return () => observador.disconnect();
  }, []);

  return (
    // Tailwind não suporta delay dinâmico via classe em runtime; inline style necessário.
    <div
      ref={ref}
      style={atraso ? { transitionDelay: `${atraso}ms` } : undefined}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        !pronto || visivel
          ? "translate-x-0 translate-y-0 scale-100 opacity-100"
          : cn(
              posicaoInicial[de],
              "opacity-0 motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100",
            ),
        className,
      )}
    >
      {children}
    </div>
  );
}
