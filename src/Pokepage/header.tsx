import React from "react"

type HeaderProps = {
  name: string,
};

export const PokeHeader = (props: HeaderProps) => (
  <div>
    <h2 style={{ textAlign: "center" }}>
      {props.name}
    </h2>

  </div>
)