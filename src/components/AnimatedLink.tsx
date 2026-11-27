import type { AnchorHTMLAttributes, ReactNode } from "react";

interface AnimatedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  /** label shown inside the custom cursor on hover */
  cursorLabel?: string;
  /** email variant slides the + in from the right */
  email?: boolean;
  external?: boolean;
}

/**
 * Reference-style link: text shifts, a green rule slides in from the left,
 * and a + marker enters. `email` flips the + to the right edge.
 */
export function AnimatedLink({
  children,
  className = "",
  cursorLabel,
  email = false,
  external = false,
  ...rest
}: AnimatedLinkProps) {
  const cls = ["link", email ? "link--email" : "", className]
    .filter(Boolean)
    .join(" ");

  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      className={cls}
      data-cursor={cursorLabel ?? (email ? "EMAIL" : "GO")}
      {...externalProps}
      {...rest}
    >
      <span className="link__text">{children}</span>
      <span className="link__line" aria-hidden="true" />
      <span className="link__plus" aria-hidden="true">
        +
      </span>
    </a>
  );
}
