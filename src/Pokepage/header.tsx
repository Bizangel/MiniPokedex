import React from "react"

type HeaderProps = {
  current: { number: number, name: string, subheader: string },
  previous: { number: number, name: string },
  next: { number: number, name: string },
};

export const PokeHeader = (props: HeaderProps) => (
  <div>
    <div style={{ position: "absolute", left: 0, top: 0, width: "100vw", display: "flex", justifyContent: "space-between" }}>
      <div style={{ margin: "8px" }}> ← # {props.previous.number}: {props.previous.name}</div>
      <div style={{ margin: "8px" }}> → # {props.next.number}: {props.next.name}</div>
    </div>


    <h1 style={{ textAlign: "center", marginBottom: "0" }}>
      <br />
      #{props.current.number}<br />
      {props.current.name}
    </h1>
    <h5 style={{ textAlign: "center", padding: "0", margin: "0" }}>
      {props.current.subheader}
    </h5>

    <div style={{ textAlign: "center" }}>
      <img src={window.assetRoot + "/gible.jpg"} style={{ maxWidth: "100%", maxHeight: "30vh", mixBlendMode: "darken" }}></img>
    </div>

  </div>
)