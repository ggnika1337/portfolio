import { projects } from "../../data/projects";
import { ButtonLink } from "../atoms/ButtonLink";
import { SectionHeading } from "../atoms/SectionHeading";
import { ProjectCard } from "../molecules/ProjectCard";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 lg:px-20">
      <SectionHeading className="mb-14">Projects</SectionHeading>

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <ButtonLink
          href="https://github.com/ggnika1337"
          className="rounded-2xl bg-white px-7 py-4 font-bold text-black transition hover:scale-105"
        >
          View More Projects on GitHub
        </ButtonLink>
      </div>
    </section>
  );
}
