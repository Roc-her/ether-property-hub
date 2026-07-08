import { processSteps } from "@/lib/site-data";
import { processStepImages } from "@/lib/process-images";

export function ProcessSteps() {
  return (
    <div className="bg-brand-surface px-5 py-8 sm:px-8 sm:py-10">
      <ol className="relative mx-auto max-w-3xl">
        {processSteps.map((step, index) => (
          <li
            key={step.step}
            id={`step-${step.step}`}
            className="relative pb-12 last:pb-0"
          >
            {index < processSteps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-5 top-14 hidden h-[calc(100%-2rem)] w-px bg-brand-accent/30 sm:block"
              />
            )}

            <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
              <div className="flex items-start gap-4 sm:w-28 sm:shrink-0 sm:flex-col sm:items-center sm:gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-brand-accent bg-brand-cream font-display text-base font-bold text-brand-primary">
                  {step.step}
                </div>
                <p className="pt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-accent sm:pt-0 sm:text-center">
                  Step {step.step}
                </p>
              </div>

              <article className="min-w-0 flex-1 overflow-hidden border border-brand-primary/10 bg-brand-cream/40">
                <div className="grid sm:grid-cols-[140px_1fr]">
                  <div className="relative min-h-[120px] bg-brand-secondary sm:min-h-full">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${processStepImages[index]}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/55 via-brand-primary/25 to-brand-secondary/40" />
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="font-display text-xl font-bold text-brand-secondary sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.7] text-brand-secondary/70">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
