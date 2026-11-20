type TituloSecaoProps = {
  eyebrow: string;
  inicio: string;
  destaque: string;
  texto?: string;
};

export function TituloSecao({ eyebrow, inicio, destaque, texto }: TituloSecaoProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">
        {eyebrow}
      </p>
      <h2 className="font-heading mt-3 text-3xl font-bold leading-tight sm:text-4xl">
        {inicio} <em className="text-primary">{destaque}</em>
      </h2>
      {texto ? (
        <p className="mt-4 text-lg leading-8 text-muted-foreground">{texto}</p>
      ) : null}
    </div>
  );
}
