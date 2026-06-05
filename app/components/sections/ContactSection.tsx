import { ButtonLink } from "../atoms/ButtonLink";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-20">
      <div className="rounded-[32px] bg-white p-12 text-center text-black">
        <h2 className="text-5xl font-black">Contact Me</h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-700">
          Check my GitHub profile or contact me for projects and
          collaborations.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink
            href="https://github.com/ggnika1337"
            className="rounded-2xl bg-black px-6 py-3 font-semibold text-white transition hover:scale-105"
          >
            GitHub
          </ButtonLink>

          <ButtonLink
            href="mailto:nikushanika568@gmail.com"
            ariaLabel="Email nikushanika568@gmail.com"
            className="rounded-2xl border border-zinc-300 px-6 py-3 font-semibold transition hover:bg-zinc-100"
          >
            nikushanika568@gmail.com
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
