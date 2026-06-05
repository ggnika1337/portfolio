"use client";

import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className: string;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  className,
  ariaLabel,
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!href.startsWith("#")) {
      return;
    }

    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", href);
  }

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={ariaLabel}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
