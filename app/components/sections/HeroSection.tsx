import { ButtonLink } from "../atoms/ButtonLink";
import { DeveloperInfoCard } from "../molecules/DeveloperInfoCard";

export function HeroSection() {
  return (
    <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-6 py-24 lg:flex-row lg:px-20">
      <div className="animate-[fadeUp_1s_ease]">
        <h2 className="max-w-2xl text-5xl font-black leading-tight md:text-7xl">
          Nikoloz Chkhikvadze
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          I build modern responsive websites using React.js and Next.js.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink
            href="#projects"
            className="rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            View Projects
          </ButtonLink>

          <ButtonLink
            href="https://github.com/ggnika1337"
            className="rounded-2xl border border-white/10 px-6 py-3 font-semibold transition hover:bg-white hover:text-black"
          >
            GitHub
          </ButtonLink>
          <ButtonLink
            href="https://www.linkedin.com/in/nikoloz-chkhikvadze-239253407"
            className="rounded-2xl border border-white/10 px-6 py-3 font-semibold transition hover:bg-white hover:text-black"
          >
            LinkedIn
          </ButtonLink>
        </div>
      </div>

      <DeveloperInfoCard />
    </section>
  );
}
