type SkillBadgeProps = {
  skill: string;
};

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-200 backdrop-blur">
      {skill}
    </span>
  );
}
