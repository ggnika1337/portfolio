import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
};

export function SectionHeading({
  children,
  className = "mb-10",
}: SectionHeadingProps) {
  return <h2 className={`${className} text-5xl font-black`}>{children}</h2>;
}
