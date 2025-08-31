import type { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{ title: string }>;

const Card = ({ title, children }: CardProps) => (
  <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
);

export default Card;