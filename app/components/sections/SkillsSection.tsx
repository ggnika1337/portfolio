import { skills } from "../../data/skills";
import { SectionHeading } from "../atoms/SectionHeading";
import { SkillBadge } from "../atoms/SkillBadge";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24 lg:px-20">
      <SectionHeading>Skills</SectionHeading>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
    </section>
  );
}
