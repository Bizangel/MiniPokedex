import React from "react"
import { PokeHeader } from "./header"

export default function PokePage() {

  return (
    <div style={{ fontFamily: "Arial ,sans-serif" }}>
      <PokeHeader name="Gible" />
      <div> this is my pokepage </div>
      {/* <img src={window.location.hostname + "/assets/gible.jpg"}></img> */}
      <img src={window.assetRoot + "/gible.jpg"}></img>
    </div>
  )
}