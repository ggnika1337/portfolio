import type { Project } from "../../types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="group flex min-h-80 flex-col justify-between rounded-[28px] border border-white/10 bg-white/5 p-8 transition duration-500 hover:-translate-y-2 hover:border-white/30 hover:bg-white/10"
    >
      <div>
        <p className="mb-6 text-sm font-bold uppercase tracking-[0.22em] text-zinc-500">
          Project
        </p>
        <h3 className="text-2xl font-bold">{project.title}</h3>

        <p className="mt-5 leading-7 text-zinc-400">{project.desc}</p>
      </div>

      <div className="mt-10 font-semibold text-white/80 transition group-hover:text-white">
        View Project
      </div>
    </a>
  );
}
