type AnswerCardsProps = {
  title?: string;
  description?: string;
  items: Array<{
    title: string;
    text: string;
  }>;
  tone?: "light" | "muted";
};

export function AnswerCards({
  title = "Quick Answers",
  description,
  items,
  tone = "light",
}: AnswerCardsProps) {
  const sectionClass =
    tone === "muted" ? "bg-surface-container-low py-20 md:py-24" : "bg-white py-20 md:py-24";
  const cardClass =
    tone === "muted"
      ? "rounded-[28px] border border-border/60 bg-white p-6 md:p-7"
      : "rounded-[28px] border border-border/60 bg-surface-container-low p-6 md:p-7";

  return (
    <section className={sectionClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-600">
            Answer First
          </span>
          <h2 className="mb-5 text-3xl font-heading font-extrabold tracking-tight text-primary md:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="text-lg leading-8 text-muted-foreground md:text-xl">{description}</p>
          ) : null}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className={cardClass}>
              <h3 className="mb-3 text-xl font-heading font-bold text-primary">{item.title}</h3>
              <p className="text-base leading-7 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

